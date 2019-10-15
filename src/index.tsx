import * as React from "react";
import * as ReactDOM from "react-dom";
import * as data from "./data.json";

import { ImageList } from "./components/ImageList";

ReactDOM.render(
  <ImageList
    imageList={data.map(image => ({
      recordid: image.recordid,
      designation: image.fields.designation,
      image: image.fields.image
    }))}
  />,
  document.getElementById("example")
);
