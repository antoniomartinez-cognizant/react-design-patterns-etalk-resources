import useDogImages from "./useDogImages";

const ContainerPresentationalVsHooks = () => {
  const images = useDogImages();
  return (
    <>
      {images &&
        images?.map((row) => (
          <img alt="dog" height={100} width={100} src={row} />
        ))}
    </>
  );
};

export default ContainerPresentationalVsHooks;
