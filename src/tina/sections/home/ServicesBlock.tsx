import React from "react";

import { BaseContainer, BaseIcon, BaseTitle } from "@base/index";
import { Block, BlocksControls } from "react-tinacms-inline";

import styles from "@view/landing/home/Home.module.scss";

interface Props {}

export const ServicesBlockComponents: React.FC<Props> = () => {
  return (
    <div className={styles.ServicesBlock}>
      <BaseContainer>
        <BaseTitle className={styles.ServicesBlockTitle}>
          Services we offer
        </BaseTitle>
        <div className={styles.ServicesBlockItems}>
          <div className={styles.ServicesBlockItem}>
            <BaseTitle type="h2" className={styles.ServicesItemTitle}>
              Unicorns
            </BaseTitle>
            <div className={styles.ServicesItemText}>
              We would help to build a new revolutionary business. Need help
              with the regulatory permissions? Here we are!
            </div>
          </div>
          <div className={styles.ServicesBlockItem}>
            <BaseTitle type="h2" className={styles.ServicesItemTitle}>
              Sidious
            </BaseTitle>
            <div className={styles.ServicesItemText}>
              If you are looking for a solution that would help you to work with
              your customers, our KYC platform is the best choice. Automate your
              B2B or B2C flows!
            </div>
          </div>
          <div className={styles.ServicesBlockItem}>
            <BaseTitle type="h2" className={styles.ServicesItemTitle}>
              Dark Side
            </BaseTitle>
            <div className={styles.ServicesItemText}>
              Come to the dark side and join us. We will help you to incorporate
              the company in a few hours and get started your business with the
              space speed!
            </div>
          </div>
          <div className={styles.ServicesBlockItem}>
            <BaseTitle type="h2" className={styles.ServicesItemTitle}>
              Eco
            </BaseTitle>
            <div className={styles.ServicesItemText}>
              We can help you not only to grow your business but also to save
              the planet. Join the growing trend of eco-friendly fintech
              startups with us!
            </div>
          </div>
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
    colorTitle: "#e2f063",
    items: [
      {
        id: 1,
        titleItem: "Please enter title-block text",
        subtitleItem: "Please enter subtitle-block text",
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
          clearable: true,
        },
        {
          label: "Subtitle item",
          name: "subtitleItem",
          component: "text",
          clearable: true,
        },
        {
          label: "link to the page",
          name: "linkItem",
          component: "text",
          description: "example: /home",
        },
      ],
    },
  ],
};

const ServicesBlock = {
  Component: ServicesBlockTina,
  template: ServicesBlockTemplate,
} as Block;

export default ServicesBlock;
