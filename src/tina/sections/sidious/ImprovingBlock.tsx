import React from "react";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseTitle } from "@base/index";
import { ImprovingItem } from "@content/index";

import styles from "@view/landing/sidious/Sidious.module.scss";

interface Props {
  title: string;
  titleColor: string;
  subTitle: string;
  subTitleColor: string;
  list: [{ items: string; image: Img }];
}

interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const ImprovingBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  subTitle,
  subTitleColor,
  list,
}) => {
  return (
    <BaseContainer>
      <div className={styles.ImprovingBlock}>
        <BaseTitle
          type="h2"
          className={styles.ImprovingBlockTitle}
          style={{ color: `${titleColor ? titleColor : ""}` }}
        >
          {title}
        </BaseTitle>
        <BaseTitle
          className={styles.ImprovingBlockSubtitle}
          style={{ color: `${subTitleColor ? subTitleColor : ""}` }}
        >
          {subTitle}
        </BaseTitle>
        <div className={styles.ImprovingBlockItems}>
          {list.length &&
            list.map((item, index) => {
              const formatText = item?.items?.length
                ? item?.items?.split(";")
                : [];
              return (
                <ImprovingItem
                  key={index}
                  itemList={formatText}
                  image={
                    item?.image?.previewSrc ||
                    "/images/landing/sidious/iconSidiousManOfficeWorker.png"
                  }
                />
              );
            })}
        </div>
      </div>
    </BaseContainer>
  );
};

export const ImprovingBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <ImprovingBlockComponents {...data} />
  </BlocksControls>
);

export const ImprovingBlockTemplate = {
  label: "Improving Block",
  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    subTitle: "Please enter text",
    subTitleColor: "#E2F063",
    list: [
      {
        image: {
          directory: "",
          filename: "",
          id: 0,
          previewSrc: "",
          type: "",
        },
        items: "Please;enter;text",
      },
    ],
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
      label: "List items",
      name: "list",
      component: "group-list",
      fields: [
        {
          label: "List",
          name: "items",
          component: "textarea",
          description: "Each item must be separated by the symbol ';'",
        },
        {
          name: "image",
          label: "Image",
          component: "image",
          description: "Please select an image",
        },
      ],
    },
  ],
};

const ImprovingBlock = {
  Component: ImprovingBlockTina,
  template: ImprovingBlockTemplate,
} as Block;

export default ImprovingBlock;
