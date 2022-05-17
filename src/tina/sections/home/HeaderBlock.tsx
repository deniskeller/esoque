import React from "react";
import Image from "next/image";
import { Block, BlocksControls } from "react-tinacms-inline";

import {
  BlackIcon,
  Treasury,
  Departament,
  Canada,
  Fca,
  Fma,
  Bank,
  Asic,
} from "../../../../public/images/landing/clients";
import styles from "@view/landing/home/Home.module.scss";
import HomeForm from "@content/forms/HomeForm/HomeForm";

interface Props {
  color: string;
  backgroundImage: Img;
}
interface Img {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}

export const HeaderBlockComponents: React.FC<Props> = ({
  color,
  backgroundImage,
}) => {
  const styled = {
    color: `${color}`,
  };

  return (
    <div className={styles.HeaderBlock} style={{ ...styled }}>
      <Image
        className={styles.BackgroundImage}
        src={backgroundImage?.previewSrc || "/images/landing/home/bgHome.png"}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={"Unicorn image"}
        priority
      />
      <div className={styles.container}>
        <div className={styles.HeaderBlockContainer}>
          <div className={styles.HeaderBlockText}>
            <div className={styles.BlockTextTitle}>
              Beyond the&nbsp;borders of&nbsp;financial world
            </div>
            <div className={styles.BlockTextDescription}>
              We are working with the following government authorities in order
              to provide the consultancy services to our customers and more:
            </div>
            <div className={styles.BlockTextIcons}>
              {/* <BaseIcon icon={ALL_ICONS.ENGLAND_BANK} /> */}
              <div className={styles.ClientsEnglandBank}>
                <Image src={BlackIcon} layout="fill" />
              </div>
              <div className={styles.ClientsTreasury}>
                <Image src={Treasury} layout="fill" />
              </div>
              <div className={styles.ClientsDepartament}>
                <Image src={Departament} layout="fill" />
              </div>
              <div className={styles.ClientsCanada}>
                <Image src={Canada} layout="fill" />
              </div>
              <div className={styles.ClientsFca}>
                <Image src={Fca} layout="fill" />
              </div>
              <div className={styles.ClientsFma}>
                <Image src={Fma} layout="fill" />
              </div>
              <div className={styles.ClientsBank}>
                <Image src={Bank} layout="fill" />
              </div>
              <div className={styles.ClientsAsic}>
                <Image src={Asic} layout="fill" />
              </div>
            </div>
          </div>
          <div className={styles.HeaderBlockForm}>
            <HomeForm />
          </div>
        </div>
      </div>
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
    backgroundImage: {
      directory: "",
      filename: "",
      id: 0,
      previewSrc: "",
      type: "",
    },
  },
  fields: [
    {
      name: "backgroundImage",
      label: "background-image",
      component: "image",
      description: "Please select an image for the background",
    },
  ],
};

const HeaderBlock = {
  Component: HeaderBlockTina,
  template: HeaderBlockTemplate,
} as Block;

export default HeaderBlock;
