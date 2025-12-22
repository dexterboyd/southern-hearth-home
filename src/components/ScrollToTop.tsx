import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");

    // Hash navigation (e.g. /#newsletter)
    if (hash) {
      const id = decodeURIComponent(hash);
      // Wait a tick so the next route's DOM is mounted
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    // Default: always start at top when navigating
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
