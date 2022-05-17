import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseTitle } from "@base/index";

import styles from "@view/landing/sidious/Sidious.module.scss";

interface Props {
  title: string;
  titleColor: string;
  subTitle: string;
  subTitleColor: string;
  imageDesktop: Img;
  imageTablet: Img;
  imageMobile: Img;
}

interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const HowItWorksBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  subTitle,
  subTitleColor,
  imageDesktop,
  imageTablet,
  imageMobile,
}) => {
  return (
    <div className={styles.HowItWorksBlockContainer}>
      <div className={styles.HowItWorksBlock}>
        <BaseTitle
          type="h2"
          className={styles.HowItWorksBlockTitle}
          style={{ color: `${titleColor ? titleColor : ""}` }}
        >
          {title}
        </BaseTitle>

        <div
          className={`${styles.HowItWorksBlockImage} ${styles.DesktopImage}`}
        >
          <Image
            layout={"fill"}
            alt="preview"
            src={
              imageDesktop?.previewSrc ||
              "/images/landing/sidious/imgSidious5desktop.png"
            }
            priority
          />
        </div>

        <div className={`${styles.HowItWorksBlockImage} ${styles.TabletImage}`}>
          <Image
            layout={"fill"}
            alt="preview"
            src={
              imageTablet?.previewSrc ||
              "/images/landing/sidious/imgSidious5tablet.png"
            }
            priority
          />
        </div>

        <div className={`${styles.HowItWorksBlockImage} ${styles.MobileImage}`}>
          <Image
            layout={"fill"}
            alt="preview"
            src={
              imageMobile?.previewSrc ||
              "/images/landing/sidious/imgSidious5mobile.png"
            }
            priority
          />
        </div>

        <BaseTitle
          className={styles.HowItWorksBlockSubtitle}
          style={{ color: `${subTitleColor ? subTitleColor : ""}` }}
        >
          {subTitle}
        </BaseTitle>
      </div>
    </div>
  );
};

export const HowItWorksBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <HowItWorksBlockComponents {...data} />
  </BlocksControls>
);

export const HowItWorksBlockTemplate = {
  label: "How It Works Block",
  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    subTitle: "Please enter text",
    subTitleColor: "#E2F063",
    imageDesktop: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
    imageTablet: "",
    imageMobile: "",
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
      component: "color",
    },
    {
      name: "imageDesktop",
      label: "Image desktop",
      component: "image",
      description: "Please select an image",
    },
    {
      name: "imageTablet",
      label: "Image tablet",
      component: "image",
      description: "Please select an image",
    },
    {
      name: "imageMobile",
      label: "Image mobile",
      component: "image",
      description: "Please select an image",
    },
  ],
};

const HowItWorksBlock = {
  Component: HowItWorksBlockTina,
  template: HowItWorksBlockTemplate,
} as Block;

export default HowItWorksBlock;
