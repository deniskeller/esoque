import React from "react";

import { BaseContainer, BaseIcon } from "@base/index";
import { ALL_ICONS } from "@constants/icons";

import { Block, BlocksControls } from "react-tinacms-inline";

import styles from "@view/landing/home/Home.module.scss";

interface Props {
  color: string;
  backgroundIamge: string;
}

export const HeaderBlockComponents: React.FC<Props> = ({
  color,
  backgroundIamge,
}) => {
  return (
    <div className={styles.HeaderBlock}>
      <BaseContainer>
        <div className={styles.HeaderBlockContainer}>
          <BaseIcon
            icon={ALL_ICONS.LOGO_TEXT}
            viewBox="0 0 269 20"
            className={styles.LogoText}
          />

          <BaseIcon
            icon={ALL_ICONS.LOGO}
            viewBox="0 0 439 87"
            className={styles.Logo}
          />
        </div>
      </BaseContainer>
    </div>
  );
};

export const HeaderBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <HeaderBlockComponents {...data} />
  </BlocksControls>
);

export const HeaderBlockTemplate = {
  label: "Header Block",

  defaultItem: {
    color: "#e2f063",
  },
  fields: [
    {
      name: "color",
      label: "Logo color",
      component: "color",
    },
    { name: "backgroundIamge", label: "background-image", component: "image" },
  ],
};

const HeaderBlock = {
  Component: HeaderBlockTina,
  template: HeaderBlockTemplate,
} as Block;

export default HeaderBlock;
