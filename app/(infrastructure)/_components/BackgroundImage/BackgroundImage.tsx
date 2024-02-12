import { type ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

interface IBgImagesProps {
  src: string | StaticImageData;
  alt: string;
}

const BackgroundImage = (props: IBgImagesProps): ReactElement => {
  const { src, alt } = props;
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      quality={100}
      fill
      style={{
        backgroundColor: "rgba(250, 250, 250, 0.5)",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundImage;
