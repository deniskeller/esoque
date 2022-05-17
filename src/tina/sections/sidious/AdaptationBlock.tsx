import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseTitle } from "@base/index";

import styles from "@view/landing/sidious/Sidious.module.scss";

interface Props {
  title: string;
  titleColor: string;
  subTitle: string;
  subTitleColor: string;
  image: Img;
}

interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const AdaptationBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  subTitle,
  subTitleColor,
  image,
}) => {
  return (
    <BaseContainer>
      <div className={styles.AdaptationBlock}>
        <BaseTitle
          className={styles.AdaptationBlockTitle}
          style={{ color: `${titleColor ? titleColor : ""}` }}
        >
          {title}
        </BaseTitle>
        <BaseTitle
          className={styles.AdaptationBlockSubtitle}
          style={{ color: `${subTitleColor ? subTitleColor : ""}` }}
        >
          {subTitle}
        </BaseTitle>
        <div className={styles.AdaptationBlockImage}>
          <Image
            src={image?.previewSrc || "/images/landing/sidious/imgSidious3.png"}
            layout={"fill"}
            alt={""}
            priority
          />
        </div>
      </div>
    </BaseContainer>
  );
};

export const AdaptationBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <AdaptationBlockComponents {...data} />
  </BlocksControls>
);

export const AdaptationBlockTemplate = {
  label: "Adaptation Block",
  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    subTitle: "Please enter text",
    subTitleColor: "#E2F063",
    image: "",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "titleColor",
      label: "Title color",
      component: "color",
    },
    {
      name: "subTitle",
      label: "Subtitle",
      component: "text",
    },
    {
      name: "subTitleColor",
      label: "Subtitle color",
      component: "text",
    },
    {
      name: "image",
      label: "Image",
      component: "image",
      description: "Please select an image",
    },
  ],
};

const AdaptationBlock = {
  Component: AdaptationBlockTina,
  template: AdaptationBlockTemplate,
} as Block;

export default AdaptationBlock;
