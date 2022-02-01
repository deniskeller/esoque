import React from "react";

import { BaseContainer, BaseIcon, BaseTitle } from "@base/index";
import { Block, BlocksControls } from "react-tinacms-inline";

import Image from "next/image";

import styles from "@view/landing/home/Home.module.scss";

interface Props {}

export const ConclusionBlockComponents: React.FC<Props> = () => {
  return (
    <div className={styles.ConclusionBlock}>
      <BaseContainer>
        <div className={styles.ConclusionBlockContent}>
          <div className={styles.ConclusionBlockImage}>
            <Image
              src="/images/landing/imgHomeMoneyBag.png"
              layout={"fill"}
              // width={653}
              // height={503}
              alt={"Money Bag image"}
            />
          </div>

          <div className={styles.ConclusionBlockTitle}>
            <p>
              Build the future with us and we will open you to a new dimension
              of FinTech.
            </p>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export const ConclusionBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <ConclusionBlockComponents {...data} />
  </BlocksControls>
);

export const ConclusionBlockTemplate = {
  label: "Conclusion Block",

  defaultItem: {
    text: "Please enter title text",
    textColor: "#ea93d1",
    fontSize: "2rem",
    backgroundImage: "/images/landing/imgHomeMoneyBag.png",
  },
  fields: [
    {
      name: "text",
      label: "Text",
      component: "text",
    },
    {
      name: "fontSize",
      label: "Font-size",
      component: "number",
    },
    {
      name: "backgroundImage",
      label: "Background image",
      component: "image",
    },
    {
      name: "textColor",
      label: "Text color",
      component: "color",
    },
  ],
};

const ConclusionBlock = {
  Component: ConclusionBlockTina,
  template: ConclusionBlockTemplate,
} as Block;

export default ConclusionBlock;
