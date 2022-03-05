import React from 'react';
import { BaseIcon, BasePopup } from '@base/index';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { ALL_ICONS } from '@constants/icons';
import jurisdictionData from '@services/jurisdictionData.json';
import {
  Canada,
  Cyprus,
  Dominica,
  Estonia,
  Hongkong,
  Latvia,
  Liechtenstein,
  Marshall,
  Netherlands,
  SaintVincent,
  Scotland,
  Seychelles,
  Singapore,
  Sweden,
} from '../JurisdictionIPopupContents';
import styles from './JurisdictionPopup.module.scss';

interface Props {
  className: string;
}

const JurisdictionPopup: React.FC<Props> = ({ className }) => {
  const { id } = useSelector((state: RootState) => state.modal);
  const [page, setPage] = React.useState(id);
  let modalData = jurisdictionData[page - 1];

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
    if (jurisdictionData.length <= page) {
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
          <div
            className={`${styles.BgWrapper} ${
              page == 1
                ? styles.BgCanada
                : page == 2
                ? styles.BgCyprus
                : page == 3
                ? styles.BgDominica
                : page == 4
                ? styles.BgEstonia
                : page == 5
                ? styles.BgHongkong
                : page == 6
                ? styles.BgLatvia
                : page == 7
                ? styles.BgLiechtenstein
                : page == 8
                ? styles.BgMarshall
                : page == 9
                ? styles.BgNetherlands
                : page == 10
                ? styles.BgSaintVincent
                : page == 11
                ? styles.BgScotland
                : page == 12
                ? styles.BgSeychelles
                : page == 13
                ? styles.BgSingapore
                : page == 14
                ? styles.BgSweden
                : ''
            }`}
          >
            {page == 1 ? (
              <Canada />
            ) : page == 2 ? (
              <Cyprus />
            ) : page == 3 ? (
              <Dominica />
            ) : page == 4 ? (
              <Estonia />
            ) : page == 5 ? (
              <Hongkong />
            ) : page == 6 ? (
              <Latvia />
            ) : page == 7 ? (
              <Liechtenstein />
            ) : page == 8 ? (
              <Marshall />
            ) : page == 9 ? (
              <Netherlands />
            ) : page == 10 ? (
              <SaintVincent />
            ) : page == 11 ? (
              <Scotland />
            ) : page == 12 ? (
              <Seychelles />
            ) : page == 13 ? (
              <Singapore />
            ) : page == 14 ? (
              <Sweden />
            ) : (
              ''
            )}

            <div className={styles.UnicornsPopupNav}>
              <div
                className={`${styles.Btn} ${styles.PrevBtn} ${
                  prevDisable() ? styles.Disable : ''
                }`}
                onClick={prevPage}
              >
                <BaseIcon
                  icon={ALL_ICONS.LANDING_POPUP_NEXT}
                  viewBox='0 0 21 24'
                />
              </div>

              <div
                className={`${styles.Btn} ${styles.NextBtn} ${
                  nextDisable() ? styles.Disable : ''
                }`}
                onClick={nextPage}
              >
                <BaseIcon
                  icon={ALL_ICONS.LANDING_POPUP_NEXT}
                  viewBox='0 0 21 24'
                />
              </div>
            </div>
          </div>
        </BasePopup>
      </>
    );
  } else {
    return null;
  }
};

export default JurisdictionPopup;
