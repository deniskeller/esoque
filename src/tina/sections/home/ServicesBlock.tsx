import React from "react";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseTitle } from "@base/index";

import styles from "@view/landing/home/Home.module.scss";
import Link from "next/link";

interface Props {
  titleBlock: string;
  items: { [key: string]: string }[];
  titleColor: string;
  textColor: string;
}
export const ServicesBlockComponents: React.FC<Props> = ({
  titleBlock,
  items,
  titleColor,
  textColor,
}) => {
  return (
    <div className={styles.ServicesBlock}>
      <BaseContainer>
        <BaseTitle
          className={styles.ServicesBlockTitle}
          style={{ color: titleColor }}
        >
          {titleBlock}
        </BaseTitle>
        <div className={styles.ServicesBlockItems}>
          {items.length &&
            items.map((item, idx) => {
              return (
                <div key={idx} className={styles.ServicesBlockItem}>
                  <BaseTitle
                    type="h2"
                    className={styles.ServicesItemTitle}
                    style={{ cursor: "pointer" }}
                  >
                    <Link href={item?.linkItem || "/default"}>
                      {item.titleItem}
                    </Link>
                  </BaseTitle>
                  <div
                    className={styles.ServicesItemText}
                    style={{ color: `${textColor}` }}
                  >
                    {item.subtitleItem}
                  </div>
                </div>
              );
            })}
        </div>
      </BaseContainer>
    </div>
  );
};

export const ServicesBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <ServicesBlockComponents {...data} />
  </BlocksControls>
);

export const ServicesBlockTemplate = {
  label: "Services Block",

  defaultItem: {
    titleBlock: "Please enter title text",
    titleColor: "#E2F063",
    textColor: "#ffffff",
    items: [
      {
        titleItem: "Please enter title-block text",
        subtitleItem: "Please enter subtitle-block text",
        linkItem: "/default",
      },
    ],
  },
  fields: [
    {
      label: "Title block",
      name: "titleBlock",
      component: "text",
    },

    {
      label: "Items block",
      name: "items",
      component: "group-list",
      fields: [
        {
          label: "Title item",
          name: "titleItem",
          component: "text",
        },
        {
          label: "Subtitle item",
          name: "subtitleItem",
          component: "text",
        },
        {
          label: "link to the page",
          name: "linkItem",
          component: "text",
          placeholder: "/default",
          description: "example: /home",
        },
      ],
    },
    {
      label: "Color title",
      name: "titleColor",
      component: "color",
    },
    {
      label: "Text color",
      name: "textColor",
      component: "color",
    },
  ],
};

const ServicesBlock = {
  Component: ServicesBlockTina,
  template: ServicesBlockTemplate,
} as Block;

export default ServicesBlock;
