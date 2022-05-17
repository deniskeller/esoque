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

export const PlatformBenefitsBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  subTitle,
  subTitleColor,
  list,
  listItemsColor,
  image,
}) => {
  return (
    <div className={styles.PlatformBenefitsBlockContainer}>
      <BaseContainer>
        <div className={styles.PlatformBenefitsBlock}>
          <BaseTitle
            type="h2"
            className={styles.PlatformBenefitsBlockTitle}
            style={{ color: `${titleColor ? titleColor : ""}` }}
          >
            {title}
          </BaseTitle>

          <div className={styles.PlatformBenefits}>
            <div className={styles.PlatformBenefitsText}>
              <BaseTitle
                className={styles.PlatformBenefitsBlockSubtitle}
                style={{ color: `${subTitleColor ? subTitleColor : ""}` }}
              >
                {subTitle}
              </BaseTitle>
              <ul className={styles.PlatformBenefitsBlockList}>
                {list.length &&
                  list.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={styles.PlatformBenefitsBlockListItem}
                        style={{
                          color: `${listItemsColor ? listItemsColor : ""}`,
                        }}
                      >
                        <span></span>
                        <p>{item.text}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={styles.PlatformBenefitsImage}>
              <Image
                layout={"fill"}
                alt={""}
                src={
                  image?.previewSrc || "/images/landing/sidious/imgSidious4.png"
                }
                priority
              />
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export const PlatformBenefitsBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <PlatformBenefitsBlockComponents {...data} />
  </BlocksControls>
);

export const PlatformBenefitsBlockTemplate = {
  label: "Platform Benefits Block",
  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    subTitle: "Please enter text",
    subTitleColor: "#E2F063",
    list: [
      {
        text: "Please enter text",
      },
    ],
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
      name: "image",
      label: "Image",
      component: "image",
      description: "Please select an image",
    },
  ],
};

const PlatformBenefitsBlock = {
  Component: PlatformBenefitsBlockTina,
  template: PlatformBenefitsBlockTemplate,
} as Block;

export default PlatformBenefitsBlock;
