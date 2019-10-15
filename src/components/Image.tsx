import * as React from "react";

export interface ImageFields {
  image?: { id: string };
  designation: string;
}

export const Image: React.FC<ImageFields> = ({ designation, image }) => {
  return (
    <article>
      <h1>{designation}</h1>
      {image && (
        <img
          src={`https://data.toulouse-metropole.fr/explore/dataset/inventaire-collections-augustins/files/${image.id}/300`}
        />
      )}
    </article>
  );
};
