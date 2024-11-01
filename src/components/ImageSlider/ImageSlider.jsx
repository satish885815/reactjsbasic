import React, { useEffect, useRef, useState } from "react";

const images = [
  {
    id: "uMCFAmgSLF",
    imageUrl:
      "https://i1.zopping.com/zopsmart-media/24649/images/originals/20240626/a126358a-9a06-4d0c-8fc1-46d75b03f41f-HomePageDesktop2e86d04aae12d4bc8898e7c58acf63a9a.webp",
    link: "#",
    text: "This is where your text for this image goes",
  },
  {
    id: "aNrs5RKsej",
    imageUrl:
      "https://i1.zopping.com/zopsmart-media/24649/images/originals/20240626/47b0c73a-9efd-4732-bddd-f74d1a183c94-HomePageDesktop141a6714c360c4af0a1fd5287a9a4e0df.webp",
    link: "#",
    text: "This is where your text for the second image goes",
  },
  {
    id: "kNQnCRPUay",
    imageUrl:
      "https://i1.zopping.com/zopsmart-media/24649/images/originals/20240626/806344d7-4371-4d2e-aaf0-9b5e03f29a2b-HomePageDesktop3c2a4ba9e2c3147ad8856182e45907b9d.webp",
    link: "",
    text: "",
  },
  {
    id: "wYqKxDDM2c",
    imageUrl:
      "https://i1.zopping.com/zopsmart-media/24649/images/originals/20240626/6d9a627b-0481-4429-add1-370fc0c52bd7-HomePageDesktop4f80ba5a3e95e481ba5c12ef5648802ae.webp",
    link: "",
    text: "",
  },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef();
  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleClickNext = () => {
    setCurrentIndex((nextIndex) => {
      return nextIndex === images.length - 1 ? 0 : nextIndex + 1;
    });
  };

  useEffect(() => {
    handleAutoSlide();
    return () => {
      handleRemoveAutoSlide();
    };
  });

  const handleAutoSlide = () => {
    imageRef.current = setInterval(() => {
      handleClickNext();
    }, 2000);
  };

  const handleRemoveAutoSlide = () => {
    if (imageRef.current) {
      clearInterval(imageRef.current);
    }
  };

  return (
    <div class="flex overflow-hidden relative w-full">
      <button
        onClick={handleClickPrev}
        class="absolute top-1/2 left-0 translate-y-1/2 z-10 bg-black w-10 bg-opacity-50"
      >
        {"<"}
      </button>
      {images.map((image) => {
        return (
          <div
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            class="flex justify-center transition-transform duration-500 ease-in-out min-w-full"
          >
            <img
              class="max-w-full max-h-full object-cover"
              src={image.imageUrl}
              alt=""
            />
          </div>
        );
      })}
      <button
        onClick={handleClickNext}
        class="absolute top-1/2 right-0 translate-y-1/2 bg-black w-10 bg-opacity-50"
      >
        {">"}
      </button>
    </div>
  );
}

export default ImageSlider;
