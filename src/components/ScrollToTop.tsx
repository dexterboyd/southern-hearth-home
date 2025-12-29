import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");

    // Hash navigation (e.g. /#newsletter)
    if (hash) {
      const id = decodeURIComponent(hash);

      // Wait until the destination DOM node is mounted.
      let frame = 0;
      const maxFrames = 60; // ~1s at 60fps
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        if (frame++ < maxFrames) requestAnimationFrame(tryScroll);
      };

      requestAnimationFrame(tryScroll);
      return;
    }

    // Default: always start at top when navigating
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
