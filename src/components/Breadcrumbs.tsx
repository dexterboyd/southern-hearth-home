import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

export const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  const all: Crumb[] = [{ label: "Home", to: "/" }, ...items];
  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-body text-sm text-muted-foreground ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((crumb, i) => {
          const isLast = i === all.length - 1;
          return (
            <Fragment key={`${crumb.label}-${i}`}>
              <li className="flex items-center">
                {crumb.to && !isLast ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {i === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                    <span>{crumb.label}</span>
                  </Link>
                ) : (
                  <span
                    className="inline-flex items-center gap-1 text-foreground font-medium"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {i === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                    <span>{crumb.label}</span>
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export const breadcrumbJsonLd = (items: Crumb[], siteUrl: string) => {
  const all: Crumb[] = [{ label: "Home", to: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: `${siteUrl}${c.to}` } : {}),
    })),
  };
};