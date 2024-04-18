import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const useScrollToTop = () => {
  const Navigate = useNavigate();
  const scrollToTop = () => {
    Navigate("/Contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollToTop;
};

export default useScrollToTop;
