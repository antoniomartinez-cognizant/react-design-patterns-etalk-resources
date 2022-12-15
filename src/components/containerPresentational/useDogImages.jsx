import { useState, useEffect } from "react";
const useDogImages = () => {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/shiba/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setImages(message));
  }, []);

  return images;
};

export default useDogImages;
