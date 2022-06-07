import React, {useEffect, useState} from 'react';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import styles from './Careers.module.scss';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';
import { AccordionCareerItem } from '@content/index';
import CareersForm from '@content/forms/CareersForm/CareersForm';
import {IApplyVacancy, IVacancy} from "@type/careers";
import {sendResponseVacancy} from "@api/app/careers/careersUser";

interface Props{
  vacanciesList : IVacancy[],
}
interface PropsButton{
  applyHandler: (id:any)=>void,
  id: any
}

const Careers: React.FC<Props> = ({vacanciesList} : Props) => {
  const [isVisibleForm, setIsVisibleForm] = React.useState(false);
  const [showSuccessForm, setShowSuccessForm] = React.useState(false);
  const myRef = React.useRef<HTMLDivElement>(null);

  const [selectedId, setSelectedId]= useState("");
  console.log("vacanciesList", vacanciesList);
  console.log("selectedId", selectedId);

  const applyHandler = (id: any) => {
    setShowSuccessForm(false)
    setIsVisibleForm(true);
    myRef.current?.scrollIntoView();
    setSelectedId(id);
  };

  async function onApplyToVacancy(data: IApplyVacancy){
    const isSuccess = await sendResponseVacancy(data);
    if (isSuccess){
      setShowSuccessForm(true)
    }
  }

  React.useEffect(() => {
    if (myRef.current) {
      myRef.current?.scrollIntoView();
    }
  }, [myRef.current, isVisibleForm]);

  return (
    <div className={styles.Wrapper}>
      <BaseContainer>
        <div className={styles.Breadcrumbs}>
          <Breadcrumbs roorHref="/" rootPathName="Home" />
        </div>
        <BaseTitle className={styles.Title}>Careers</BaseTitle>
        <div className={styles.Discription}>
          <div className={styles.DiscriptionImage}>
            <Image
              src="/images/landing/imgCareers.png"
              layout="fill"
              alt={'Careers'}
            />
          </div>
          <BaseText className={styles.DiscriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat
            risus commodo et. Ut cursus laoreet massa, vitae malesuada enim
            iaculis ut. Pellentesque sed nisl ultrices, tincidunt ante finibus,
            rutrum diam. Ut non euismod turpis. Aenean eros orci, interdum ut
            consequat nec, aliquam non justo. Curabitur lacinia scelerisque
            semper. Ut non accumsan mi. Ut justo felis, pulvinar at urna et,
            bibendum aliquam felis. Ut cursus laoreet massa, vitae malesuada
            enim iaculis ut. Pellentesque sed nisl ultrices, tincidunt ante
            finibus, rutrum diam. Ut non euismod turpis. Aenean eros orci,
            interdum ut consequat nec, aliquam non justo.
          </BaseText>
        </div>

        <div className={styles.Accordions}>
          <h1 className={styles.AccordionsTitle}>AVAILABLE VACANCIES</h1>
          {vacanciesList?.map((vacancy)=>{
            return <AccordionCareerItem title={vacancy.position} key={vacancy.uid}>
              <div className={styles.CareerItem}>
                <div className={styles.CareerItemRow}>
                  <div className={styles.CareerItemName}>
                    <div className={styles.RowImage}>
                      <Image
                        src="/images/landing/careers/iconAbout.png"
                        layout="fill"
                        alt={'Careers'}
                      />
                    </div>
                    <div className={styles.RowTitle}>About the role</div>
                  </div>
                  <div className={styles.CareerItemDiscription} dangerouslySetInnerHTML={{"__html": vacancy.aboutRole}}/>
                </div>

                <div className={styles.CareerItemRow}>
                  <div className={styles.CareerItemName}>
                    <div className={styles.RowImage}>
                      <Image
                        src="/images/landing/careers/iconBedoing.png"
                        layout="fill"
                        alt={'Careers'}
                      />
                    </div>
                    <div className={styles.RowTitle}>What you’ll be doing</div>
                  </div>
                  <div className={styles.CareerItemDiscription} dangerouslySetInnerHTML={{"__html":  vacancy.whatBeDoing}}/>
                </div>

                <div className={styles.CareerItemRow}>
                  <div className={styles.CareerItemName}>
                    <div className={styles.RowImage}>
                      <Image
                        src="/images/landing/careers/iconNeed.png"
                        layout="fill"
                        alt={'Careers'}
                      />
                    </div>
                    <div className={styles.RowTitle}>What you'll need</div>
                  </div>
                  <div className={styles.CareerItemDiscription}  dangerouslySetInnerHTML={{"__html":  vacancy.whatNeed}}/>
                </div>
              </div>
              <ApplyButton applyHandler={applyHandler} id={vacancy.uid}/>
            </AccordionCareerItem>
          })}
        </div>

        <div
          className={`${styles.CareersForm} ${
            !isVisibleForm ? styles.Hidden : ''
          }`}
          ref={myRef}
        >
          <CareersForm id={selectedId} onSubmit={onApplyToVacancy} showSuccessForm={showSuccessForm}/>
        </div>
      </BaseContainer>
    </div>
  );
};

export default Careers;

const ApplyButton: React.FC<PropsButton> = ({applyHandler, id}:PropsButton)=>{
  function onClick(){
    applyHandler(id);
  }
  return <div className={styles.CareerItemApply} onClick={onClick}>
    <div className={styles.Image}>
      <Image
        src="/images/landing/careers/iconApply.png"
        layout="fill"
        alt={'Careers'}
      />
    </div>
    <div className={styles.CareerItemApplyTitle}>
      Apply for this role!
    </div>
  </div>
}