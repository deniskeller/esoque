import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseText, BaseTitle } from "@base/index";
import { ServicesItem } from "@content/index";

import styles from "@view/landing/unicorns/Unicorns.module.scss";

interface Props {
  title: string;
  titleColor: string;
  subTitleList: ListItem;
  subTitleColor: string;
  listItems: [
    {
      title: string;
      items: string;
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

type ListItem = [{ [key: string]: string }];

export const WelcomeBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  subTitleList,
  subTitleColor,
  listItems,
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
                image?.previewSrc ||
                "/images/landing/unicorns/imgUnicornsHorse1.png"
              }
              layout={"fill"}
              alt={"Unicorn image"}
              priority
            />
          </div>

          {subTitleList?.length &&
            subTitleList.map((item, index) => (
              <div key={index} className={styles.WelcomeBlockLi}>
                <BaseText
                  className={styles.WelcomeBlockText}
                  style={{ color: `${subTitleColor ? subTitleColor : ""}` }}
                >
                  {item.text}
                </BaseText>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.ServicesBlock}>
        {listItems.length &&
          listItems.map((el, index) => {
            const itemFormat = {
              itemTitle: el.title,
              itemList: el?.items?.length ? el.items.split(";") : [],
            };
            return <ServicesItem item={itemFormat} key={index} />;
          })}
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
    titleColor: "#ffffff",
    subTitleList: [{ text: "Please enter subtitle text" }],
    subTitleColor: "#ffffff",
    image: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
    listItems: [
      {
        title: "Please enter title text",
        items: "Please enter text; Please enter text; Please enter text",
      },
    ],
    listItemsTitleColor: "#e2f063",
    listItemsIcon: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
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
      name: "subTitleList",
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
      name: "subTitleColor",
      label: "Subtitle color",
      component: "color",
    },
    {
      name: "image",
      label: "Image",
      component: "image",
      description: "Please select an image",
    },
    {
      label: "List items",
      name: "listItems",
      component: "group-list",
      fields: [
        {
          label: "Title",
          name: "title",
          component: "text",
          clearable: true,
        },
        {
          label: "List items",
          name: "items",
          component: "textarea",
          description: "Each item must be separated by the symbol ';'",
          clearable: true,
        },
      ],
    },
  ],
};

const WelcomeBlock = {
  Component: WelcomeBlockTina,
  template: WelcomeBlockTemplate,
} as Block;

export default WelcomeBlock;
