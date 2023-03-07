import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";


function ScrollToTopButton() {

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
    <div className="fixed flex flex-col right-4 bottom-8">
      <VscTriangleUp title="Scroll Up" className="text-2xl cursor-pointer" onClick={scrollToTop} />
      <VscTriangleDown title="Scroll Down" className="text-2xl cursor-pointer" onClick={scrollToBottom} />
    </div>
  );
}
export default ScrollToTopButton