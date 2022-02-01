import React from "react";

import { BlocksControls, Block } from "react-tinacms-inline";
import { BaseContainer, BaseText, BaseTitle } from "@base/index";

import styles from "@view/landing/home/Home.module.scss";

import Image from "next/image";

interface Props {
  titleLeft: string;
  subtitleLeft: string;
  titleRight: string;
  subtitleRight: string;
  img: string;
  backgroundColor: string;
}

export const HelloBlockComponents: React.FC<Props> = ({
  titleLeft,
  subtitleLeft,
  titleRight,
  subtitleRight,
  img,
  backgroundColor,
}) => {
  return (
    <BaseContainer>
      <div className={styles.HelloBlock}>
        <div className={styles.BlockLeft}>
          <span className={styles.ContentText}>
            <BaseTitle className={styles.HelloBlockTitle}>Hello!</BaseTitle>
            <BaseText className={styles.HelloBlockText}>
              Welcome to Esoque, the foundation of the future of the financial
              world. We are the best experts in the financial industry with more
              than 16 years of modern finance and information technologies
              knowledge.
            </BaseText>
          </span>
          <span className={styles.ContentImage}>
            <Image
              src="/images/landing/imgHomeUnicorn.png"
              layout={"fill"}
              // width={653}
              // height={503}
              alt={"Unicorn image"}
            />
          </span>
        </div>

        <div className={styles.BlockRight}>
          <BaseTitle className={styles.HelloBlockTitle}>
            We build Unicorns!
          </BaseTitle>
          <BaseText className={styles.HelloBlockText}>
            Yes, that is true, you can make a new PayPal, Stripe or Revolut, or
            even launch the financial projects for the space.
          </BaseText>
          <BaseText className={styles.HelloBlockText}>
            Our team would help you to find the proper jurisdiction for your
            business and get all required regulatory permissions to launch your
            unicorn.
          </BaseText>
          <BaseText className={styles.HelloBlockText}>
            If you are a well-established business we will help you to expand it
            and grow your opportunities. We have successfully been working with
            European banks to develop their financial infrastructure and get
            regulatory permissions.
          </BaseText>
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
    subtitleLeft: "Please enter subtitle-left text",
    titleRight: "Please enter title-right text",
    subtitleRight: "Please enter subtitle-right text",
    img: "/images/landing/imgHomeUnicorn.png",
    backgroundColor: "#101010",
  },
  fields: [
    {
      name: "titleLeft",
      label: "title-left",
      component: "text",
    },
    {
      name: "subtitleLeft",
      label: "subititle-left",
      component: "text",
    },
    {
      name: "titleRight",
      label: "title-right",
      component: "text",
    },
    {
      name: "subtitleRight",
      label: "subtitle-right",
      component: "text",
    },
    { label: "background-color", name: "backgroundColor", component: "color" },
  ],
};

const HelloBlock = {
  Component: HelloBlockTina,
  template: HelloBlockTemplate,
} as Block;

export default HelloBlock;
