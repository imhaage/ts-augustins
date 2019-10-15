import * as React from "react";
import { ImageFields, Image } from "./Image";

interface ImageFieldsWithId extends ImageFields {
  recordid: string;
}

interface ImageListProps {
  imageList: ImageFieldsWithId[];
}

export const ImageList: React.FC<ImageListProps> = ({ imageList }) => {
  return (
    <section>
      {imageList.map(image => (
        <Image
          key={image.recordid}
          image={image.image}
          designation={image.designation}
        />
      ))}
    </section>
  );
};
