import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseIcon, BaseText, BaseTitle } from "@base/index";

import styles from "@view/landing/sidious/Sidious.module.scss";
import { ALL_ICONS } from "@constants/icons";

interface Props {
  title: string;
  titleColor: string;
  list: [{ text: string }];
  listItemsColor: string;
  titleBottom: string;
  titleBottomColor: string;
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
  titleBottom,
  titleBottomColor,
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
              src={
                image?.previewSrc || "/images/landing/sidious/imgSidious1.png"
              }
              layout={"fill"}
              alt={""}
              priority
            />
          </div>

          {list.length &&
            list.map((item, index) => {
              return (
                <div key={index} className={styles.WelcomeBlockLi}>
                  <BaseText
                    className={styles.WelcomeBlockText}
                    style={{ color: `${listItemsColor ? listItemsColor : ""}` }}
                  >
                    {item.text}
                  </BaseText>
                </div>
              );
            })}
          {
            <div className={`${styles.WelcomeBlockLi} ${styles.GreenTExt}`}>
              <BaseText
                className={`${styles.WelcomeBlockText}`}
                style={{ color: `${titleBottomColor ? titleBottomColor : ""}` }}
              >
                {titleBottom}
              </BaseText>
            </div>
          }
        </div>

        <div className={styles.AboutIcon}>
          <div className={styles.AboutIconCircleDown}>
            <BaseIcon icon={ALL_ICONS.ARROW_DOWN} viewBox="0 0 30 68" />
            {/* <Image
              src="/images/landing/iconEsoqueArrowDown.png"
              layout={"fill"}
              alt={""}
              priority
            /> */}
          </div>
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
    list: [
      {
        text: "Please enter text",
      },
    ],
    listItemsColor: "#fff",
    titleBottom: "Please enter text",
    titleBottomColor: "#13DE4C",
    image: "",
    _template: "welcomeBlock",
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
          label: "text",
          name: "text",
          component: "text",
          clearable: true,
        },
      ],
    },
    {
      name: "listItemsColor",
      label: "Subtitle list color",
      component: "color",
    },
    {
      name: "titleBottom",
      label: "Title bottom",
      component: "text",
    },
    {
      name: "titleBottomColor",
      label: "Title bottom color",
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
