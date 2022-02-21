import React from 'react';
import {
  BaseIcon,
  BasePopup,
  BaseSubtitle,
  BaseText,
  BaseTitle,
} from '@base/index';
import styles from './UnicornsPopup.module.scss';
import { IconHorse } from '@content/index';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';

import mockDataModals from '@services/mockDataModals.json';
import { ALL_ICONS } from '@constants/icons';

interface IModalContentData {
  subtitle?: string;
  contentItemList?: string[];
}
interface IModalData {
  title?: string;
  text?: string;
  content?: IModalContentData[];
}

interface Props {
  className: string;
}

const UnicornsPopup: React.FC<Props> = ({ className }) => {
  const { id } = useSelector((state: RootState) => state.modal);

  const [page, setPage] = React.useState(id);

  let modalData: IModalData = mockDataModals[page - 1];

  const length = modalData?.content?.length;

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevDisable = () => {
    if (page <= 1) {
      return true;
    }
    return false;
  };

  const nextDisable = () => {
    if (mockDataModals.length <= page) {
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    setPage(page);
  }, [page]);

  React.useEffect(() => {
    setPage(id);
  }, [id]);

  if (modalData) {
    return (
      <>
        <BasePopup className={className}>
          <BaseTitle type='h2' className={styles.UnicornsPopupTitle}>
            {modalData.title}
          </BaseTitle>
          <BaseText className={styles.UnicornsPopupText}>
            {modalData.text}
          </BaseText>

          <div
            className={`${styles.UnicornsPopupContent} ${
              length! == 1 ? styles.FullWidth : ''
            }`}
          >
            {modalData.content &&
              modalData.content.map((item, index) => {
                return (
                  <div key={index} className={styles.UnicornsPopupContentList}>
                    <BaseSubtitle className={styles.UnicornsPopupSubtitle}>
                      {item.subtitle}
                    </BaseSubtitle>

                    <ul className={styles.UnicornsPopupContentUl}>
                      {item.contentItemList?.map((el, index) => {
                        return (
                          <li
                            key={index}
                            className={`${styles.UnicornsPopupContentLi} ${
                              length! == 1 ? styles.FullWidth : ''
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
            <BaseIcon
              icon={ALL_ICONS.LANDING_POPUP_NEXT}
              viewBox='1 0 21 23'
              className={`${styles.Btn} ${styles.PrevBtn} ${
                prevDisable() ? styles.Disable : ''
              }`}
              onClick={prevPage}
            />
            <BaseIcon
              icon={ALL_ICONS.LANDING_POPUP_NEXT}
              viewBox='1 0 21 23'
              className={`${styles.Btn} ${styles.NextBtn} ${
                nextDisable() ? styles.Disable : ''
              }`}
              onClick={nextPage}
            />
          </div>
        </BasePopup>
      </>
    );
  } else {
    return null;
  }
};

export default UnicornsPopup;
