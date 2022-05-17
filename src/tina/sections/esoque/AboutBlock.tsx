import React from "react";
import { Block, BlocksControls } from "react-tinacms-inline";
import Image from "next/image";

import { BaseContainer, BaseIcon, BaseTitle } from "@base/index";

import styles from "@view/landing/esoque/Esoque.module.scss";
import { ALL_ICONS } from "@constants/icons";
interface Props {
  title: string;
  titleColor: string;
  subTitle: string;
  subTitleColor: string;
  imageTop: Img;
  imageBottom: Img;
}

interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const AboutBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  subTitle,
  subTitleColor,
  imageTop,
  imageBottom,
}) => {
  return (
    <div className={styles.AboutContainer}>
      <BaseContainer>
        <div className={styles.About}>
          <div className={styles.AboutImage}>
            <Image
              src={
                imageTop?.previewSrc || "/images/landing/esoque/imgEsoque2.png"
              }
              layout={"fill"}
              alt={"Esocue image"}
            />
          </div>
          <BaseTitle
            className={styles.AboutTitle}
            style={{
              color: `${titleColor ? titleColor : ""}`,
            }}
          >
            {title}
          </BaseTitle>

          <div
            className={styles.AboutSubtitle}
            style={{
              color: `${subTitleColor ? subTitleColor : ""}`,
            }}
          >
            <p>{subTitle}</p>
          </div>

          <div className={styles.AboutIcon}>
            <div className={styles.AboutIconCircleDown}>
              <BaseIcon icon={ALL_ICONS.ARROW_DOWN} viewBox="0 0 30 68" />

              {/* <Image
                src={
                  imageBottom?.previewSrc ||
                  "/images/landing/iconEsoqueArrowDown.png"
                }
                layout={"fill"}
                alt={"Esocue image"}
              /> */}
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export const AboutBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <AboutBlockComponents {...data} />
  </BlocksControls>
);

export const AboutBlockTemplate = {
  label: "About Block",

  defaultItem: {
    title: "Please enter title text",
    titleColor: "#E2F063",
    subTitle: "Please enter subtitle text",
    subTitleColor: "#777777",
    imageTop: "",
    imageBottom: "",
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
      label: "SubTitle color",
      component: "color",
    },
    {
      name: "imageTop",
      label: "Image top",
      component: "image",
      description: "Please select an image",
    },
    {
      name: "imageBottom",
      label: "Image bottom",
      component: "image",
      description: "Please select an image",
    },
  ],
};

const AboutBlock = {
  Component: AboutBlockTina,
  template: AboutBlockTemplate,
} as Block;

export default AboutBlock;
