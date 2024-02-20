import { type ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

interface IBgImagesProps {
  src: string | StaticImageData;
  alt: string;
  backgroundColor: string;
}

const BackgroundImage = (props: IBgImagesProps): ReactElement => {
  const { src, alt, backgroundColor } = props;
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      quality={100}
      fill
      style={{
        backgroundColor,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundImage;
