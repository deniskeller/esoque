import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseText, BaseTitle } from "@base/index";

import styles from "@view/landing/esoque/Esoque.module.scss";

interface Props {
  title: string;
  titleColor: string;
  list: [{ text: string }];
  listItemsColor: string;
  image: Img;
}

interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const WelcomeBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  list,
  listItemsColor,
  image,
}) => {
  return (
    <BaseContainer>
      <div className={styles.WelcomeBlock}>
        <BaseTitle
          className={styles.WelcomeBlockTitle}
          style={{ color: `${titleColor ? titleColor : ""}` }}
        >
          {title}
        </BaseTitle>
        <div className={styles.WelcomeBlockUl}>
          <div className={styles.WelcomeBlockImage}>
            <Image
              src={image?.previewSrc || "/images/landing/esoque/imgEsoque.png"}
              layout={"fill"}
              alt={"Esocue image"}
              priority={true}
            />
          </div>
          {list.length &&
            list.map((item, index) => {
              return (
                <div key={index} className={styles.WelcomeBlockLi}>
                  <BaseText
                    className={styles.WelcomeBlockText}
                    style={{
                      color: `${listItemsColor ? listItemsColor : ""}`,
                    }}
                  >
                    {item.text}
                  </BaseText>
                </div>
              );
            })}
        </div>
      </div>
    </BaseContainer>
  );
};

export const WelcomeBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <WelcomeBlockComponents {...data} />
  </BlocksControls>
);

export const WelcomeBlockTemplate = {
  label: "Welcome Block",

  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    list: [{ text: "Please enter text" }],
    listItemsColor: "#fff",
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
      label: "List item",
      name: "list",
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
      name: "listItemsColor",
      label: "List item color",
      component: "color",
    },
    {
      name: "image",
      label: "Image",
      component: "image",
      description: "Please select an image",
    },
  ],
};

const WelcomeBlock = {
  Component: WelcomeBlockTina,
  template: WelcomeBlockTemplate,
} as Block;

export default WelcomeBlock;
