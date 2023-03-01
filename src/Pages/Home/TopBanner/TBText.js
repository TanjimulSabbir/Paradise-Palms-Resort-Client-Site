import React, {useEffect, useState} from "react";
import CarouselText from "../../../JsonFiles/carouselText.json";

// TB- Top Bottom
const TBText = (hashName) => {
  const [selectedText, setSelectedText] = useState(null);

  useEffect(() => {
    const matchedText = CarouselText.find(
      (text) => text._id === Number(hashName)
    );
    setSelectedText(matchedText);
  }, [hashName]);

  return {selectedText};
};

export default TBText;
