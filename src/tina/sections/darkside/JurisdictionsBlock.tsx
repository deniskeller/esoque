import React from "react";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseTitle } from "@base/index";
import {
  AdvantageItem,
  JurisdictionCountryItem,
  JurisdictionPopup,
} from "@content/index";

import { actions as actionsModals } from "@store/modals/reducer";

import styles from "@view/landing/darkside/Darkside.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { EsoqueState } from "@store/store";

const jurisdictions = [
  {
    id: 16,
    title: "London",
    subtitle: "London [United Kingdom] - 550 EUR",
    image: "imgDarksideLondon.png",
  },
  {
    id: 5,
    title: "Hong kong",
    subtitle: "Hong Kong [China] - 2100 EUR",
    image: "imgDarksideHongkong.png",
  },
];
interface Props {
  title: string;
  titleColor: string;
  jurisdictions: [{ title: string; subTitle: string; image: Img }];
  title2: string;
  title2Color: string;
  list: [
    {
      title: string;
      subTitle: string;
      image: Img;
      width: number;
      height: number;
    }
  ];
}
interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const JurisdictionsBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
  // jurisdictions,
  title2,
  title2Color,
  list,
}) => {
  const { popup } = useSelector((state: EsoqueState) => state.modals);
  const dispatch = useDispatch();

  const handleClick = ({ id }: { id: number }) => {
    dispatch(actionsModals.setPopup({ popup: "JurisdictionPopup", id }));
  };

  return (
    <div className={styles.JurisdictionsBlock}>
      <BaseContainer>
        <BaseTitle
          className={styles.WelcomeBlockTitle}
          style={{ color: `${titleColor ? titleColor : ""}` }}
        >
          {title}
        </BaseTitle>
      </BaseContainer>

      <div className={styles.JurisdictionsBlockCountry}>
        {jurisdictions &&
          jurisdictions.map((item) => {
            return (
              <JurisdictionCountryItem
                popup={popup}
                openModal={() => handleClick({ id: item.id })}
                id={item.id}
                image={`/images/landing/darkside/${item.image}`}
                title={item.title}
                subtitle={item.subtitle}
                key={item.id}
              />
            );
          })}
      </div>
      <BaseContainer>
        <BaseTitle
          className={styles.HowItWorksTitle}
          style={{ color: `${title2Color ? title2Color : ""}` }}
        >
          {title2}
        </BaseTitle>

        <div className={styles.HowItWorksItems}>
          {list &&
            list.map((item, index) => {
              return (
                <AdvantageItem
                  backgroundType="light"
                  title={item.title}
                  subtitle={item.subTitle}
                  image={
                    item.image?.previewSrc ||
                    "/images/landing/darkside/iconDarksideHourglassDone.png"
                  }
                  width={item.width}
                  height={item.height}
                  key={index}
                  className={styles.HowItWorksItem}
                />
              );
            })}
        </div>
      </BaseContainer>
    </div>
  );
};

export const JurisdictionsBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <JurisdictionsBlockComponents {...data} />
  </BlocksControls>
);

export const JurisdictionsBlockTemplate = {
  label: "Jurisdictions Block",
  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
    // jurisdictions: [
    //   {
    //     title: "Example",
    //     subTitle: "Please enter text",
    //     image: "",
    //   },
    // ],
    title2: "Please enter title2 text",
    title2Color: "#fff",

    list: [
      {
        title: "Naming",
        subTitle: "Create or choose a ready-made company",
        image: {
          directory: "",
          filename: "",
          id: 0,
          previewSrc: "/iconDarksideLightBulb.png",
          type: "",
        },
        width: 51,
        height: 51,
      },
    ],
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

    // {
    //   label: "Jurisdictions List",
    //   name: "jurisdictions",
    //   component: "group-list",
    //   fields: [
    //     {
    //       label: "Title",
    //       name: "title",
    //       component: "text",
    //       clearable: true,
    //     },
    //     {
    //       label: "Subtitle",
    //       name: "subTitle",
    //       component: "text",
    //       clearable: true,
    //     },
    //     {
    //       name: "image",
    //       label: "Image",
    //       component: "image",
    //       description: "Please select an image",
    //     },
    //   ],
    // },
    {
      name: "title2",
      label: "Title",
      component: "text",
    },
    {
      name: "title2Color",
      label: "Title color",
      component: "color",
    },
    {
      label: "Works",
      name: "list",
      component: "group-list",
      fields: [
        {
          label: "Title",
          name: "title",
          component: "text",
          clearable: true,
        },
        {
          label: "Subtitle",
          name: "subTitle",
          component: "text",
          clearable: true,
        },
        {
          name: "image",
          label: "Image",
          component: "image",
          description: "Please select an image",
        },
        {
          name: "width",
          label: "Width image",
          component: "number",
          step: 1,
          description: "Recommned size 50x50",
        },
        {
          name: "height",
          label: "Height image",
          component: "number",
          step: 1,
          description: "Recommned size 50x50",
        },
      ],
    },
  ],
};

const JurisdictionsBlock = {
  Component: JurisdictionsBlockTina,
  template: JurisdictionsBlockTemplate,
} as Block;

export default JurisdictionsBlock;
