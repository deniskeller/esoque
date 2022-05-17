import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer } from "@base/index";

import styles from "@view/landing/home/Home.module.scss";

interface Props {
  text: string;
  textColor: string;
  image: Img;
  backgroundImage: Img;
}
interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const ConclusionBlockComponents: React.FC<Props> = ({
  text,
  textColor,
  image,
  backgroundImage,
}) => {
  return (
    <div
      className={styles.ConclusionBlock}
      style={{ backgroundImage: `url(${backgroundImage.previewSrc})` }}
    >
      <BaseContainer>
        <div className={styles.ConclusionBlockContent}>
          <div className={styles.ConclusionBlockImage}>
            {image?.previewSrc?.length && (
              <Image
                src={
                  image?.previewSrc ||
                  "/images/landing/home/imgHomeMoneyBag.png"
                }
                layout={"fill"}
                alt={"Money Bag image"}
                // loading="lazy"
                priority
                blurDataURL="/images/landing/home/imgHomeMoneyBag.png"
              />
            )}
          </div>

          <div className={styles.ConclusionBlockTitle}>
            <p style={{ color: textColor }}>{text}</p>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export const ConclusionBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <ConclusionBlockComponents {...data} />
  </BlocksControls>
);

export const ConclusionBlockTemplate = {
  label: "Conclusion Block",

  defaultItem: {
    text: "Please enter title text",
    textColor: "#ea93d1",
    image: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
    backgroundImage: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
  },
  fields: [
    {
      name: "text",
      label: "Text",
      component: "text",
    },
    {
      name: "textColor",
      label: "Text color",
      component: "color",
    },
    {
      name: "image",
      label: "Image from text",
      component: "image",
    },
    {
      name: "backgroundImage",
      label: "Background image",
      component: "image",
    },
  ],
};

const ConclusionBlock = {
  Component: ConclusionBlockTina,
  template: ConclusionBlockTemplate,
} as Block;

export default ConclusionBlock;
