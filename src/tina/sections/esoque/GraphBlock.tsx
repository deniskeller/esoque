import React, { useState } from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseButton, BaseContainer, BaseTitle } from "@base/index";

import styles from "@view/landing/esoque/Esoque.module.scss";

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

export const GraphBlockComponents: React.FC<Props> = ({}) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const myRef = React.useRef<HTMLDivElement>(null);

  const moreInfoOpen = () => {
    setMoreInfo(true);
  };

  const moreInfoClose = () => {
    setMoreInfo(false);
    myRef.current?.scrollIntoView();
  };

  return (
    <div className={styles.GraphBlock} ref={myRef}>
      <BaseTitle className={styles.GraphBlockTitle}>
        Financial Historical Records
      </BaseTitle>
      <div className=""></div>
      <BaseTitle className={styles.GraphBlockSubtitle}>
        Total assets that are managed
      </BaseTitle>

      <div
        className={`${styles.GraphBlockContent} ${
          moreInfo ? styles.FullHeight : ""
        }`}
      >
        <div className={styles.LineCenter}></div>
        <div className={styles.Gradient}></div>
        <div className={styles.LineTop}></div>

        <div className={styles.GraphBlockContentItem}>
          <div className={`${styles.LeftItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p>
                  Financial Institutions - <br /> $ 201,614,100.00
                </p>
              </div>
              <div className={styles.LeftColItem}>
                <p>
                  Information Unicorns - <br /> $ 55,092,225.00
                </p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p className={styles.PinkColor}>2021</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.RightItem} ${styles.GraphItem} ${styles.LowPadding}`}
          >
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p className={styles.GreenColor}>2020</p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p>
                  Financial Institutions - <br /> $ 28,132,200.00
                </p>
              </div>
              <div className={styles.RightColItem}>
                <p>
                  Information Unicorns - <br /> $ 55,092,225.00
                </p>
              </div>

              <div className={styles.RightColItem}>
                <p>
                  Compliance Firms - <br />$ 9,377,400.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.GraphBlockContentItem}>
          <div className={`${styles.LeftItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p>
                  Financial Institutions - <br /> $ 16,100,000.00
                </p>
              </div>
              <div className={styles.LeftColItem}>
                <p>
                  Information Unicorns - <br /> $ 5,000,023.00
                </p>
              </div>
              <div className={styles.LeftColItem}>
                <p>
                  Information Unicorns - <br /> $ 4,007,100.00
                </p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p className={styles.YellowColor}>2019</p>
              </div>
            </div>
          </div>

          <div className={`${styles.RightItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p className={styles.PinkColor}>2018</p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p>
                  Financial Institutions - <br /> $ 1,000,100.00
                </p>
              </div>
              <div className={styles.RightColItem}>
                <p>
                  Information Unicorns - <br /> $ 4,030,000.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.GraphBlockContentItem}>
          <div className={`${styles.LeftItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p>
                  Financial Institutions - <br /> $ 6,100,000.00
                </p>
              </div>
              <div className={styles.LeftColItem}>
                <p>
                  Information Unicorns - <br /> $ 567,000.00
                </p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p className={styles.GreenColor}>2017</p>
              </div>
            </div>
          </div>

          <div className={`${styles.RightItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p className={styles.YellowColor}>2016</p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p>
                  Financial Institutions - <br /> $ 3,000,200.00
                </p>
              </div>
              <div className={styles.RightColItem}>
                <p>
                  Information Unicorns - <br /> $ 310,000.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.GraphBlockContentItem}>
          <div className={`${styles.LeftItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p>
                  Financial Institutions - <br /> $ 1,200,000.00
                </p>
              </div>
              <div className={styles.LeftColItem}>
                <p>
                  Information Unicorns - <br /> $ 120,000.00
                </p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p className={styles.PinkColor}>2015</p>
              </div>
            </div>
          </div>

          <div className={`${styles.RightItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p className={styles.GreenColor}>2014</p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p>
                  Financial Institutions - <br /> $ 800,000.00
                </p>
              </div>
              <div className={styles.RightColItem}>
                <p>
                  Information Unicorns - <br /> $ 60,000.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.GraphBlockContentItem}>
          <div className={`${styles.LeftItem} ${styles.GraphItem}`}>
            <div className={styles.LeftCol}>
              <div className={styles.LeftColItem}>
                <p>
                  Financial Institutions - <br /> $ 1,200,000.00
                </p>
              </div>
              <div className={styles.LeftColItem}>
                <p>
                  Information Unicorns - <br /> $ 120,000.00
                </p>
              </div>
            </div>
            <div className={styles.RightCol}>
              <div className={styles.RightColItem}>
                <p className={styles.YellowColor}>2013</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {moreInfo && moreInfo ? (
        <BaseButton className={styles.GraphBlockBtn} onClick={moreInfoClose}>
          Hide
        </BaseButton>
      ) : (
        <BaseButton className={styles.GraphBlockBtn} onClick={moreInfoOpen}>
          See more
        </BaseButton>
      )}
    </div>
  );
};

export const GraphBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <GraphBlockComponents {...data} />
  </BlocksControls>
);

export const GraphBlockTemplate = {
  label: "Graph Block",

  defaultItem: {},
  fields: [],
};

const GraphBlock = {
  Component: GraphBlockTina,
  template: GraphBlockTemplate,
} as Block;

export default GraphBlock;
