import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On a new page, start at the top. If the link has a #section, scroll to that section instead.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const find = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: "start" });
      else if (tries++ < 10) window.setTimeout(find, 50);
    };
    find();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
