import React from "react";

import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer } from "@base/index";
import { WidgetSidious } from "@content/index";

import styles from "@view/landing/sidious/Sidious.module.scss";

interface Props {}

export const WidgetBlockComponents: React.FC<Props> = ({}) => {
  return (
    <div className={styles.WidgetBlockContainer}>
      <BaseContainer>
        <WidgetSidious />
      </BaseContainer>
    </div>
  );
};

export const WidgetBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <WidgetBlockComponents {...data} />
  </BlocksControls>
);

export const WidgetBlockTemaplate = {
  label: "Widget block",
  defaultItem: {},
  fields: [],
};

const WidgetBlock = {
  Component: WidgetBlockTina,
  template: WidgetBlockTemaplate,
} as Block;

export default WidgetBlock;
