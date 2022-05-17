import React from "react";
import Image from "next/image";
import { BlocksControls, Block } from "react-tinacms-inline";

import { BaseContainer, BaseText, BaseTitle } from "@base/index";

import styles from "@view/landing/home/Home.module.scss";

interface Props {
  titleLeft: string;
  titleLeftAlign: string;
  leftItems: { [key: string]: string }[];
  leftItemsAlign: string;
  titleRight: string;
  titleRightAlign: string;
  rightItems: { [key: string]: string }[];
  rightItemsAlign: string;
  image: Img;
  backgroundColor: string;
}
interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const HelloBlockComponents: React.FC<Props> = ({
  titleLeft,
  titleLeftAlign,
  leftItems,
  leftItemsAlign,
  titleRight,
  titleRightAlign,
  rightItems,
  rightItemsAlign,
  image,
  backgroundColor,
}) => {
  return (
    <BaseContainer>
      <div
        className={styles.HelloBlock}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className={styles.BlockLeft}>
          <span className={styles.ContentText}>
            <BaseTitle
              className={styles.HelloBlockTitle}
              style={{ textAlign: titleLeftAlign }}
            >
              {titleLeft}
            </BaseTitle>
            {leftItems.length &&
              leftItems.map((item, idx) => {
                return (
                  <BaseText
                    key={idx}
                    className={styles.HelloBlockText}
                    style={{ textAlign: leftItemsAlign }}
                  >
                    {item.text}
                  </BaseText>
                );
              })}
          </span>
          <span className={styles.ContentImage}>
            {image?.previewSrc?.length && (
              <Image
                src={
                  image?.previewSrc || "/images/landing/home/imgHomeUnicorn.png"
                }
                layout={"fill"}
                alt={"Unicorn image"}
                priority
              />
            )}
          </span>
        </div>

        <div className={styles.BlockRight}>
          <BaseTitle
            className={styles.HelloBlockTitle}
            style={{ textAlign: titleRightAlign }}
          >
            {titleRight}
          </BaseTitle>
          {rightItems.length &&
            rightItems.map((item, idx) => {
              return (
                <BaseText
                  key={idx}
                  className={styles.HelloBlockText}
                  style={{ textAlign: rightItemsAlign }}
                >
                  {item.text}
                </BaseText>
              );
            })}
        </div>
      </div>
    </BaseContainer>
  );
};

export const HelloBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <HelloBlockComponents {...data} />
  </BlocksControls>
);

export const HelloBlockTemplate = {
  label: "Hello Block",

  defaultItem: {
    titleLeft: "Please enter title-left text",
    titleLeftAlign: "left",
    leftItems: [{ text: "Please enter text" }],
    leftItemsAlign: "left",

    titleRight: "Please enter title-right text",
    titleRightAlign: "right",
    rightItems: [{ text: "Please enter text" }],
    rightItemsAlign: "right",
    image: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
    backgroundColor: "#101010",
  },
  fields: [
    {
      name: "titleLeft",
      label: "Title left",
      component: "text",
    },
    {
      name: "titleLeftAlign",
      label: "Align left title",
      component: "select",
      options: ["left", "right"],
    },
    {
      label: "Left text items",
      name: "leftItems",
      component: "group-list",
      fields: [
        {
          label: "text",
          name: "text",
          component: "text",
          clearable: false,
        },
      ],
    },
    {
      label: "Align left items",
      name: "leftItemsAlign",
      component: "select",
      options: ["left", "right"],
    },

    {
      name: "titleRight",
      label: "Title right",
      component: "text",
    },
    {
      label: "Align right title",
      name: "titleRightAlign",
      component: "select",
      options: ["left", "right"],
    },
    {
      label: "Right text items",
      name: "rightItems",
      component: "group-list",
      fields: [
        {
          label: "text",
          name: "text",
          component: "text",
          clearable: true,
        },
      ],
    },
    {
      label: "Align right items",
      name: "rightItemsAlign",
      component: "select",
      options: ["left", "right"],
    },
    {
      name: "image",
      label: "Image",
      component: "image",
      description: "Please select an image",
    },

    {
      name: "backgroundColor",
      label: "background",
      component: "color",
    },
  ],
};

const HelloBlock = {
  Component: HelloBlockTina,
  template: HelloBlockTemplate,
} as Block;

export default HelloBlock;
