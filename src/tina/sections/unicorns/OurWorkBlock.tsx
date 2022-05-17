import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseText, BaseTitle } from "@base/index";
import { BusinessItem, IconHorse } from "@content/index";
import UnicornsPopup from "@content/popup/UnicornsPopupOurWork/UnicornsPopup";

import styles from "@view/landing/unicorns/Unicorns.module.scss";

interface Props {
  title: string;
  titleColor: string;
  titleList: [{ [key: string]: string }];
  subTitle: string;
  subTitleColor: string;
  title2: string;
  colorTitle2: string;
  subTitle2: string;
  image: Img;
  businessItems: [
    {
      title: string;
      text: string;
      subtitleLeftModal: string;
      leftModalItems: string;
      subtitleRightModal: string;
      rightModalItems: string;
    }
  ];
}

type BusinessData = {
  title: string;
  text: string;
  content: Content[];
};

type Content = {
  subtitle: string;
  contentItemList: string[];
};

interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

const OurWorkBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  titleList,
  subTitle,
  subTitleColor,
  title2,
  colorTitle2,
  subTitle2,
  image,
  businessItems,
}) => {
  const [data, setData] = React.useState<BusinessData>({
    title: "",
    text: "",
    content: [
      {
        subtitle: "",
        contentItemList: [""],
      },
    ],
  });

  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const cur = businessItems[step];

    const formatData = {
      title: cur?.title,
      text: cur?.text,
      content: [
        {
          subtitle: cur?.subtitleLeftModal,
          contentItemList: cur?.leftModalItems?.split(";"),
        },
        {
          subtitle: cur?.subtitleRightModal,
          contentItemList: cur?.rightModalItems?.split(";"),
        },
      ],
    };
    setData(formatData);
  }, [step, businessItems]);

  return (
    <>
      <div className={styles.OurWorkBlockContainer}>
        <BaseContainer>
          <div className={styles.OurWorkBlock}>
            <div className={styles.OurWorkBlockImage}>
              <Image
                src={
                  image.previewSrc || "/images/landing/imgUnicornsHorse2.png"
                }
                layout="fill"
                alt={"Unicorn image"}
                // loading="lazy"
                blurDataURL="/images/landing/imgUnicornsHorse2.png"
                priority
              />
            </div>

            <BaseTitle
              className={styles.OurWorkBlockTitle}
              style={{ color: `${titleColor ? titleColor : ""}` }}
            >
              {title}
            </BaseTitle>

            <div className={styles.OurWorkBlockPlan}>
              {titleList.length &&
                titleList.map((item, index) => {
                  return (
                    <li key={index} className={styles.OurWorkBlockPlanItem}>
                      <IconHorse className={styles.PlanItemImage} />
                      <p>{item.text}</p>
                    </li>
                  );
                })}
            </div>

            <BaseText
              className={styles.OurWorkBlockPs}
              style={{ color: `${subTitleColor ? subTitleColor : ""}` }}
            >
              {subTitle}
            </BaseText>

            <div className={styles.OurWorkBlockSubtitle}>
              <div
                className={styles.H1}
                style={{ color: `${colorTitle2 ? colorTitle2 : ""}` }}
              >
                <h1>{title2}</h1>
              </div>
              <div className={styles.P}>
                <p>{subTitle2}</p>
              </div>
            </div>

            <div className={styles.OurWorkBusinessItems}>
              {businessItems?.length &&
                businessItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setStep(index);
                      }}
                    >
                      <BusinessItem title={item.title} id={index} key={index} />
                    </div>
                  );
                })}
            </div>
          </div>
        </BaseContainer>
      </div>

      <UnicornsPopup
        page={step}
        setPage={setStep}
        length={businessItems.length - 1}
        data={data}
        className="UnicornsPopup"
      />
    </>
  );
};

export const OurWorkBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <OurWorkBlockComponents {...data} />
  </BlocksControls>
);

export const OurWorkBlockTemplate = {
  label: "OurWork Block",

  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    titleList: [{ text: "Please enter title item text" }],
    subTitle: "Please enter subtitle text",
    subTitleColor: "#fff",
    title2: "Please enter title2 text",
    colorTitle2: "#fff",
    subTitle2: "Please enter subtitle2 text",
    image: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
    businessItems: [
      {
        title: "Please enter title text",
        text: "Please enter text",
        subtitleLeftModal: "Please enter left subtitle modal text",
        leftModalItems: "Please enter; left modal; items text",
        subtitleRightModal: "Please enter right subtitle modal text",
        rightModalItems: "Please enter; right modal; items text",
      },
    ],
  },
  fields: [
    {
      label: "Title",
      name: "title",
      component: "text",
    },
    {
      label: "Title color",
      name: "titleColor",
      component: "color",
    },
    {
      label: "Image",
      name: "image",
      component: "image",
      description: "Please select an image",
    },
    {
      label: "Title list",
      name: "titleList",
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
      name: "subTitle",
      label: "Subtitle",
      component: "text",
      clearable: true,
    },
    {
      name: "subTitleColor",
      label: "Subtitle color",
      component: "color",
    },
    {
      name: "title2",
      label: "Title2",
      component: "text",
      clearable: true,
    },
    {
      name: "colorTitle2",
      label: "Color title2 color",
      component: "color",
    },
    {
      name: "subTitle2",
      label: "Subtitle2",
      component: "text",
      clearable: true,
    },
    {
      name: "businessItems",
      label: "Business items",
      component: "group-list",
      fields: [
        {
          label: "Title",
          name: "title",
          component: "text",
        },
        {
          label: "Text",
          name: "text",
          component: "text",
        },
        {
          label: "Subtitle Left Modal",
          name: "subtitleLeftModal",
          component: "text",
        },
        {
          label: "Left modal items left modal",
          name: "leftModalItems",
          description: "Each item must be separated by the symbol ';'",
          component: "textarea",
        },
        {
          label: "Subtitle right modal",
          name: "subtitleRightModal",
          component: "text",
        },
        {
          label: "Right modal items left modal",
          name: "rightModalItems",
          description: "Each item must be separated by the symbol ';'",
          component: "textarea",
        },
      ],
    },
  ],
};

const OurWorkBlock = {
  Component: OurWorkBlockTina,
  template: OurWorkBlockTemplate,
} as Block;

export default OurWorkBlock;
