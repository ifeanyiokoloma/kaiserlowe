import React from "react";
import {
  AdvancedImage,
  accessibility,
  placeholder,
  responsive,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const Image = ({ className, alt, style, imageName, width, height }) => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "kaiserlowe",
    },
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image(`kaiserlowe/${imageName}`);

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  if (height || width) {
    myImage.resize(fill().width(width).height(height).gravity(autoGravity()));
  }
  myImage.resize(fill().gravity(autoGravity())).format("webp");

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return (
    <>
      <AdvancedImage
        className={className}
        style={style}
        cldImg={myImage}
        alt={alt}
        plugins={[
          responsive({ steps: [600, 900, 1200, 1536] }),
          accessibility(),
          placeholder({ mode: "pixelate" }),
        ]}
      />
    </>
  );
};

export default Image;
