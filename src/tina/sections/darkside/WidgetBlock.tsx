import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseTitle } from "@base/index";
import { AdvantageItem, WidgetDarkside } from "@content/index";

import styles from "@view/landing/darkside/Darkside.module.scss";

interface Props {
  title: string;
  titleColor: string;
  list: [
    {
      title: string;
      subTitle: string;
      image: Img;
      width: number;
      height: number;
    }
  ];
  image: Img;
}

interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const WidgetBlockComponents: React.FC<Props> = ({ title, titleColor, list, image }) => {
  return (
    <>
      <BaseContainer>
        <div className={styles.WidgetBlock}>
          <div className={styles.WidgetBlockImage}>
            <Image
              src={image?.previewSrc || "/images/landing/darkside/imgDarksideCompass.png"}
              layout={"fill"}
              blurDataURL="/images/landing/darkside/imgDarksideCompass.png"
              alt={"Unicorn image"}
            />
          </div>
          <BaseTitle className={styles.WidgetBlockTitle} style={{ color: `${titleColor ? titleColor : ""}` }}>
            {title}
          </BaseTitle>

          <div className={styles.WidgetBlockWidget}>
            <WidgetDarkside />
          </div>

          <div className={styles.WidgetBlockAdvantages}>
            {list.length &&
              list.map((item, index) => {
                return (
                  <AdvantageItem
                    title={item.title}
                    subtitle={item.subTitle}
                    image={item?.image?.previewSrc || "/images/landing/darkside/iconDarksideHourglassDone.png"}
                    width={Math.abs(item.width) || 20}
                    height={Math.abs(item.height) || 20}
                    key={index}
                    className={styles.WidgetBlockAdvantagesItem}
                  />
                );
              })}
          </div>
        </div>
      </BaseContainer>
    </>
  );
};

export const WidgetBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <WidgetBlockComponents {...data} />
  </BlocksControls>
);

export const WidgetBlockTemaplate = {
  label: "Widget block",
  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    list: [
      {
        title: "Please enter title",
        subTitle: "Please enter subtitle text",
        image: {
          directory: "",
          filename: "",
          id: 0,
          previewSrc: "",
          type: "",
        },
        width: 50,
        height: 50,
      },
    ],
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
      label: "Subtitle List",
      name: "list",
      component: "group-list",
      fields: [
        {
          label: "Title",
          name: "title",
          component: "text",
          clearable: true,
        },
        {
          label: "Subtitle",
          name: "subTitle",
          component: "text",
          clearable: true,
        },
        {
          name: "image",
          label: "Image",
          component: "image",
          description: "Please select an image",
        },
        {
          name: "width",
          label: "Width image",
          component: "number",
          step: 1,
          description: "Recommned size 50x50",
        },
        {
          name: "height",
          label: "Height image",
          component: "number",
          step: 1,
          description: "Recommned size 50x50",
        },
      ],
    },
  ],
};

const WidgetBlock = {
  Component: WidgetBlockTina,
  template: WidgetBlockTemaplate,
} as Block;

export default WidgetBlock;
