import React from "react";
import { Block, BlocksControls } from "react-tinacms-inline";

import { BaseContainer, BaseTitle } from "@base/index";
import { CountryItem, JurisdictionPopup } from "@content/index";

import styles from "@view/landing/darkside/Darkside.module.scss";

const countryItems = [
  { id: 1, title: "CANADA", image: "flag-canada.png" },
  { id: 2, title: "CYPRUS", image: "flag-cyprus.png" },
  { id: 3, title: "DOMINICA", image: "flag-dominica.png" },
  { id: 4, title: "ESTONIA", image: "flag-estonia.png" },
  { id: 5, title: "HONG KONG", image: "flag-hong-kong.png" },
  { id: 6, title: "LATVIA", image: "flag-latvia.png" },
  { id: 7, title: "LIECHTENSTEIN", image: "flag-liechtenstein.png" },
  { id: 8, title: "MARSHALL ISLANDS", image: "flag-marshall-islands.png" },
  { id: 9, title: "NETHERLANDS", image: "flag-netherlands.png" },
  {
    id: 10,
    title: "SAINT VINCENT & THE GRENADINES",
    image: "flag-st-vincent-grenadines.png",
  },
  { id: 11, title: "SCOTLAND", image: "flag-scotland.png" },
  { id: 12, title: "SEYCHELLES", image: "flag-seychelles.png" },
  { id: 13, title: "SINGAPORE", image: "flag-singapore.png" },
  { id: 14, title: "SWEDEN", image: "flag-sweden.png" },
  { id: 15, title: "SWITZERLAND", image: "flag-switzerland.png" },
  { id: 16, title: "UNITED KINGDOM", image: "flag-united-kingdom.png" },
  { id: 17, title: "USA", image: "flag-united-states.png" },
  { id: 18, title: "GEORGIA", image: "flag-united-states.png" },

  // нет модалок
  // { id: 2, title: 'IRELAND', image: 'flag-ireland.png' },
  // { id: 7, title: 'LITHUANIA', image: 'flag-lithuania.png' },
  // { id: 10, title: 'LUXEMBOURG', image: 'flag-luxembourg.png' },
  // { id: 15, title: 'HUNGARY', image: 'flag-hungary.png' },
  // { id: 21, title: 'CURACAO', image: 'flag-curacao.png' },
  // { id: 22, title: 'MALTA', image: 'flag-malta.png' },
  // { id: 23, title: 'ALDERNEY', image: 'flag-alderney.png' },
  // { id: 24, title: 'JERSEY', image: 'flag-jersey.png' },
  // { id: 25, title: 'GIBRALTAR', image: 'flag-gibraltar.png' },
];

interface Props {
  title: string;
  titleColor: string;
}

export const JurisdictionsCountryBlockComponents: React.FC<Props> = ({
  title,
  titleColor,
}) => {
  return (
    <BaseContainer>
      <div className={styles.JurisdictionsCountryBlock}>
        <BaseTitle
          className={styles.JurisdictionsCountryBlockTitle}
          style={{ color: `${titleColor ? titleColor : ""}` }}
        >
          {title}
        </BaseTitle>

        <div className={styles.JurisdictionsCountryItems}>
          {countryItems &&
            countryItems.map((item) => {
              return (
                <CountryItem
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  key={item.id}
                />
              );
            })}
        </div>
      </div>

      <JurisdictionPopup className="JurisdictionPopup" />
    </BaseContainer>
  );
};

export const JurisdictionsCountryBlockTina = ({ index, data }: any) => (
  <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls={true}>
    <JurisdictionsCountryBlockComponents {...data} />
  </BlocksControls>
);

export const JurisdictionsCountryBlockTemplate = {
  label: "Jurisdictions County Block",
  defaultItem: {
    title: "Please enter title text",
    titleColor: "#fff",
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
  ],
};

const JurisdictionsCountryBlock = {
  Component: JurisdictionsCountryBlockTina,
  template: JurisdictionsCountryBlockTemplate,
} as Block;

export default JurisdictionsCountryBlock;
