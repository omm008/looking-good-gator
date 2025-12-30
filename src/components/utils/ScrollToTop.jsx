import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the path changes

  return null;
}
