import { useEffect } from "react";

const SITE_URL = "https://www.flavorfirstrecipes.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/recipe/southern-baked-mac-cheese"
  image?: string; // absolute URL
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo({
  title,
  description,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const canonical = canonicalPath
      ? `${SITE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`
      : SITE_URL;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertCanonical(canonical);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", image);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    // JSON-LD structured data
    const scriptId = "seo-jsonld";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [title, description, canonicalPath, image, type, jsonLd]);

  return null;
}

export { SITE_URL };