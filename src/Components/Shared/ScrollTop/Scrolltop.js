import { useEffect, useState } from "react";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";


function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // clean the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 250) {
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

  const scrollToBottom = () => {
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-3 right-0 ${isVisible ? "visible" : "invisible"}`}>
      <VscTriangleUp
        className="text-2xl cursor-pointer p-1" onClick={scrollToTop}>
        Scroll to top
      </VscTriangleUp>
      <VscTriangleDown title="Scroll Down" className="text-2xl cursor-pointer p-1" onClick={scrollToBottom} />
    </div>
  );
}

export default ScrollToTopButton







