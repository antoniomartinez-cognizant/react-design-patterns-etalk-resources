import React, { useEffect, useState } from "react";
import PresentationalComponent from "./PresentationalComponent";

const ContainerComponent = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/shiba/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setImages(message));
  }, []);

  return <PresentationalComponent images={images} />;
};

export default ContainerComponent;
