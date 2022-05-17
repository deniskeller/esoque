import React, { Dispatch, SetStateAction } from "react";
import {
  BaseIcon,
  BasePopup,
  BaseSubtitle,
  BaseText,
  BaseTitle,
} from "@base/index";
import { IconHorse } from "@content/index";
import { ALL_ICONS } from "@constants/icons";

import styles from "./UnicornsPopup.module.scss";

interface Props {
  className: string;
  page: number;
  length: number;
  setPage: Dispatch<SetStateAction<number>>;
  data: BusinessData;
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

const UnicornsPopup: React.FC<Props> = ({
  className,
  data,
  page,
  setPage,
  length,
}) => {
  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevDisable = () => {
    if (page <= 0) {
      return true;
    }
    return false;
  };

  const nextDisable = () => {
    if (length <= page) {
      return true;
    }
    return false;
  };

  if (data) {
    return (
      <>
        <BasePopup className={className}>
          <BaseTitle type="h2" className={styles.UnicornsPopupTitle}>
            {data.title}
          </BaseTitle>
          <BaseText className={styles.UnicornsPopupText}>{data.text}</BaseText>

          <div
            className={`${styles.UnicornsPopupContent} ${
              data.content.length == 1 ? styles.FullWidth : ""
            }`}
          >
            {data.content.length &&
              data.content.map((item, index) => {
                return (
                  <div key={index} className={styles.UnicornsPopupContentList}>
                    <BaseSubtitle className={styles.UnicornsPopupSubtitle}>
                      {item.subtitle}
                    </BaseSubtitle>

                    <ul
                      className={`${styles.UnicornsPopupContentUl} ${
                        data.content &&
                        data.content.length == 1 &&
                        item.contentItemList &&
                        item.contentItemList?.length >= 12
                          ? styles.SoloStyle
                          : ""
                      }`}
                    >
                      {item.contentItemList?.map((el, index) => {
                        if (!el) {
                          return;
                        }

                        return (
                          <li
                            key={index}
                            className={`${styles.UnicornsPopupContentLi} ${
                              data.content.length == 1 ? styles.FullWidth : ""
                            }`}
                          >
                            <IconHorse className={styles.ContentLiImage} />
                            <p>{el}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
          </div>
          <div className={styles.UnicornsPopupNav}>
            <div
              className={`${styles.Btn} ${styles.PrevBtn} ${
                prevDisable() ? styles.Disable : ""
              }`}
              onClick={prevPage}
            >
              <BaseIcon
                icon={ALL_ICONS.LANDING_POPUP_NEXT}
                viewBox="0 0 21 24"
              />
            </div>

            <div
              className={`${styles.Btn} ${styles.NextBtn} ${
                nextDisable() ? styles.Disable : ""
              }`}
              onClick={nextPage}
            >
              <BaseIcon
                icon={ALL_ICONS.LANDING_POPUP_NEXT}
                viewBox="0 0 21 24"
              />
            </div>
          </div>
        </BasePopup>
      </>
    );
  } else {
    return null;
  }
};

export default UnicornsPopup;
