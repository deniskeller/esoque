import React from "react";
import Image from "next/image";

import { BaseContainer } from "@base/index";
import { Block, BlocksControls } from "react-tinacms-inline";

import styles from "@view/landing/darkside/Darkside.module.scss";

interface Props {
  items: Item[];
}

type Item = {
  text1: string;
  image1: Img;
  text2: string;
  image2: Img;
  colorText: string;
  typeItem: string;
};
interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const SomeBlockComponents: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.SomeBlockContainer}>
      <BaseContainer>
        <div className={styles.SomeBlock}>
          {items?.length &&
            items?.map((item, index) => {
              // switch
              switch (item.typeItem) {
                case "two-emoji":
                  return (
                    <div key={index} className={styles.SomeBlockMore}>
                      {item.text1 && (
                        <div className={styles.SomeBlockMoreItem}>
                          <div className={styles.WelcomeBlockImage}>
                            {item?.image1?.previewSrc && (
                              <Image
                                src={
                                  item?.image1?.previewSrc ||
                                  "/images/landing/darkside/iconDarksideFaceWithRollingEyes.png"
                                }
                                layout={"fill"}
                                alt={""}
                              />
                            )}
                          </div>
                          <p
                            style={{
                              color: `${
                                item?.colorText ? item?.colorText : ""
                              }`,
                            }}
                          >
                            {item?.text1}
                          </p>
                        </div>
                      )}

                      {item?.text2 && (
                        <div className={styles.SomeBlockMoreItem}>
                          <div className={styles.WelcomeBlockImage}>
                            {item?.image2?.previewSrc && (
                              <Image
                                src={
                                  item?.image2?.previewSrc ||
                                  "/images/landing/darkside/iconDarksideExplodingHead.png"
                                }
                                layout={"fill"}
                                alt={""}
                              />
                            )}
                          </div>
                          <p
                            style={{
                              color: `${
                                item?.colorText ? item?.colorText : ""
                              }`,
                            }}
                          >
                            {item?.text2}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                case "solo-emoji":
                  return (
                    <div key={index} className={styles.SomeBlockSolo}>
                      <div className={styles.SomeBlockSoloItem}>
                        <div className={styles.WelcomeBlockImage}>
                          {(item?.image1 || item?.image2) && (
                            <Image
                              src={
                                item?.image1?.previewSrc ||
                                item?.image2?.previewSrc ||
                                "/images/landing/darkside/iconDarksideCompass.png"
                              }
                              layout={"fill"}
                              alt={""}
                            />
                          )}
                        </div>
                        <p
                          style={{
                            color: `${
                              item?.colorText ? item?.colorText : "#EA93D1"
                            }`,
                          }}
                        >
                          {item?.text1 || item?.text2}
                        </p>
                      </div>
                    </div>
                  );
                case "two-text":
                  return (
                    <div key={index} className={styles.SomeBlockMore}>
                      <div className={styles.SomeBlockMoreItem}>
                        <p
                          className={styles.Small}
                          style={{
                            color: `${item?.colorText ? item?.colorText : ""}`,
                          }}
                        >
                          {item?.text1}
                        </p>
                      </div>

                      <div className={styles.SomeBlockMoreItem}>
                        <p
                          className={styles.Small}
                          style={{
                            color: `${item?.colorText ? item?.colorText : " "}`,
                          }}
                        >
                          {item?.text2}
                        </p>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}
        </div>
      </BaseContainer>
    </div>
  );
};

export const SomeBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <SomeBlockComponents {...data} />
  </BlocksControls>
);

export const SomeBlockTemplate = {
  label: "Some Block",
  defaultItem: {
    items: [
      {
        text1: "",

        image1: {
          directory: "",
          filename: "",
          id: 0,
          previewSrc: "",
          type: "",
        },
        text2: "",
        color: "#fff",
        image2: {
          directory: "",
          filename: "",
          id: 1,
          previewSrc: "",
          type: "",
        },
        typeItem: "two-text",
      },
    ],
  },
  fields: [
    {
      name: "items",
      label: "Some",
      component: "group-list",
      fields: [
        {
          label: "Text first item",
          name: "text1",
          component: "text",
        },
        {
          label: "Image first item",
          name: "image1",
          component: "image",
          description:
            "This field is optional and does not apply to type : 'two-text'",
        },
        {
          label: "Text second item",
          name: "text2",
          component: "text",
        },
        {
          label: "Image second item",
          name: "image2",
          component: "image",
          description:
            "This field is optional and does not apply to type : 'two-text'",
        },
        {
          label: "Color text",
          name: "colorText",
          component: "color",
        },
        {
          label: "Type item(s)",
          component: "select",
          name: "typeItem",
          description: "Select the display type of the element(s)",
          options: ["two-emoji", "solo-emoji", "two-text"],
        },
      ],
    },
  ],
};

const SomeBlock = {
  Component: SomeBlockTina,
  template: SomeBlockTemplate,
} as Block;

export default SomeBlock;
