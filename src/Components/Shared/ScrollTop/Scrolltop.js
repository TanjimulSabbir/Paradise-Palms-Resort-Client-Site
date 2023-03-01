import { useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-4 right-4 p-3 rounded-full bg-sky-600 text-white">
          Scroll to top
        </button>
      )}
    </>
  );
}
export default ScrollToTopButton