const PresentationalComponent = ({ images }) => {
  return (
    <>
      {images
        ? images?.map((row) => (
            <img key={row} alt="dog" height={100} width={100} src={row} />
          ))
        : null}
    </>
  );
};

export default PresentationalComponent;
