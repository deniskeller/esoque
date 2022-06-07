// @ts-nocheck
import React from "react";
import { Landing } from "@layouts/index";
import { BaseContainer, BaseIcon, BaseText, BaseTitle } from "@base/index";
import Image from "next/image";
import styles from "@view/landing/newsAndInsights/NewsAndInsights.module.scss";
import Breadcrumbs from "@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs";
import { useRouter } from "next/router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ALL_ICONS } from "@constants/icons";

const mockNews = [
  {
    id: 1,
    image: "/images/landing/imageNews.jpg",
    title: "HEADER HEADER HEADER 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed",
    read: "1",
    date: "DD/MM/YYYY",
  },
  {
    id: 2,
    image: "/images/landing/imageNews.jpg",
    title: "HEADER HEADER HEADER 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed",
    read: "1",
    date: "DD/MM/YYYY",
  },
  {
    id: 3,
    image: "/images/landing/imageNews.jpg",
    title: "HEADER HEADER HEADER 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed",
    read: "1",
    date: "DD/MM/YYYY",
  },
  {
    id: 4,
    image: "/images/landing/imageNews.jpg",
    title: "HEADER HEADER HEADER 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed",
    read: "1",
    date: "DD/MM/YYYY",
  },
  {
    id: 5,
    image: "/images/landing/imageNews.jpg",
    title: "HEADER HEADER HEADER 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed",
    read: "1",
    date: "DD/MM/YYYY",
  },
  {
    id: 6,
    image: "/images/landing/imageNews.jpg",
    title: "HEADER HEADER HEADER 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed",
    read: "1",
    date: "DD/MM/YYYY",
  },
];

const News = () => {
  const router = useRouter();
  const { id } = router.query;

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sliderRef = React.useRef(null);

  // React.useEffect(() => {
  //   console.log('sliderRef: ', sliderRef);
  // }, [sliderRef]);
  //убрать // @ts-nocheck и правильно типизировать методы слайдера
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Landing>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Breadcrumbs}>
            <Breadcrumbs roorHref="/" rootPathName="Home" />
          </div>
          <BaseTitle className={styles.Title}>News {id}</BaseTitle>

          <div className={styles.SelectedItemImage}>
            <Image src="/images/landing/imageNews.jpg" layout="fill" alt={"News & Insights"} />
          </div>

          <div className={styles.SelectedItemDescription}>
            <BaseText className={styles.Paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus animi non accusantium eos debitis
              et voluptates impedit corrupti totam, eaque quidem! Quo excepturi quam cupiditate fuga facilis harum est
              asperiores ipsam magni unde reprehenderit, animi nihil? Culpa cumque nulla blanditiis sapiente deserunt
              voluptatem quisquam hic ullam, vitae unde eius enim officia tenetur quod doloribus ipsum tempore
              distinctio eos? Deleniti dolor odio in reprehenderit praesentium tempora neque quia! Doloremque animi
              obcaecati velit harum? Laboriosam voluptates fugit aliquam delectus neque fuga temporibus tenetur. Nam
              autem mollitia fugit obcaecati officiis? Blanditiis eligendi laboriosam odit, quam mollitia voluptatibus!
              Numquam officiis magnam voluptatibus iste debitis atque labore deserunt facilis expedita ex ullam, ipsa
              inventore, recusandae vitae natus nostrum obcaecati iure consequuntur omnis a odit cupiditate ab ad
              reprehenderit! Sunt at aut quaerat necessitatibus labore eius. Quas, sed sapiente quaerat suscipit
              architecto nulla inventore ut amet rem atque necessitatibus dignissimos id incidunt beatae animi laborum
              possimus quisquam odio illo expedita, ratione vero eveniet? Delectus eaque sit a officia reiciendis iusto
              impedit, reprehenderit quaerat accusantium fugit recusandae eveniet magnam esse nobis perspiciatis eius
              dignissimos cumque. Quidem explicabo qui aspernatur officiis inventore, neque veniam quis aperiam
              cupiditate, possimus ratione nisi deserunt voluptatem non tempore, quaerat exercitationem! Doloremque.
            </BaseText>

            <BaseText className={styles.Paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus animi non accusantium eos debitis
              et voluptates impedit corrupti totam, eaque quidem! Quo excepturi quam cupiditate fuga facilis harum est
              asperiores ipsam magni unde reprehenderit, animi nihil? Culpa cumque nulla blanditiis sapiente deserunt
              voluptatem quisquam hic ullam, vitae unde eius enim officia tenetur quod doloribus ipsum tempore
              distinctio eos? Deleniti dolor odio in reprehenderit praesentium tempora neque quia! Doloremque animi
              obcaecati velit harum? Laboriosam voluptates fugit aliquam delectus neque fuga temporibus tenetur. Nam
              autem mollitia fugit obcaecati officiis? Blanditiis eligendi laboriosam odit, quam mollitia voluptatibus!
              Numquam officiis magnam voluptatibus iste debitis atque labore deserunt facilis expedita ex ullam, ipsa
              inventore, recusandae vitae natus nostrum obcaecati iure consequuntur omnis a odit cupiditate ab ad
              reprehenderit! Sunt at aut quaerat necessitatibus labore eius. Quas, sed sapiente quaerat suscipit
              architecto nulla inventore ut amet rem atque necessitatibus dignissimos id incidunt beatae animi laborum
              possimus quisquam odio illo expedita, ratione vero eveniet? Delectus eaque sit a officia reiciendis iusto
              impedit, reprehenderit quaerat accusantium fugit recusandae eveniet magnam esse nobis perspiciatis eius
              dignissimos cumque. Quidem explicabo qui aspernatur officiis inventore, neque veniam quis aperiam
              cupiditate, possimus ratione nisi deserunt voluptatem non tempore, quaerat exercitationem! Doloremque.
            </BaseText>
          </div>
        </BaseContainer>

        <div className={styles.SelectedItemSlider}>
          <div className={styles.Slider}>
            <div className={styles.SliderTitle}>You may also like</div>
            <div className={styles.SliderContent}>
              <div className={styles.SliderNav}>
                <div className={`${styles.Btn} ${styles.BtnPrev}`} onClick={prevSlide}>
                  <BaseIcon icon={ALL_ICONS.ACCORDION_OPEN} viewBox="0 0 24 21" className={styles.IconPrev} />
                </div>
                <div className={`${styles.Btn} ${styles.BtnNext}`} onClick={nextSlide}>
                  <BaseIcon icon={ALL_ICONS.ACCORDION_OPEN} viewBox="0 0 24 21" className={styles.IconNext} />
                </div>
              </div>

              <Slider {...settings} ref={sliderRef}>
                <div>
                  <div className={styles.SlideItem}>
                    <div className={styles.SlideItemImage}>
                      <Image src="/images/landing/imageNews.jpg" layout="fill" alt={"News & Insights"} />
                    </div>
                    <div className={styles.SlideItemTitle}>HEADER HEADER HEADER 1</div>
                  </div>
                </div>

                <div>
                  <div className={styles.SlideItem}>
                    <div className={styles.SlideItemImage}>
                      <Image src="/images/landing/imageNews.jpg" layout="fill" alt={"News & Insights"} />
                    </div>
                    <div className={styles.SlideItemTitle}>HEADER HEADER HEADER 2</div>
                  </div>
                </div>

                <div>
                  <div className={styles.SlideItem}>
                    <div className={styles.SlideItemImage}>
                      <Image src="/images/landing/imageNews.jpg" layout="fill" alt={"News & Insights"} />
                    </div>
                    <div className={styles.SlideItemTitle}>HEADER HEADER HEADER 3</div>
                  </div>
                </div>

                <div>
                  <div className={styles.SlideItem}>
                    <div className={styles.SlideItemImage}>
                      <Image src="/images/landing/imageNews.jpg" layout="fill" alt={"News & Insights"} />
                    </div>
                    <div className={styles.SlideItemTitle}>HEADER HEADER HEADER 4</div>
                  </div>
                </div>

                <div>
                  <div className={styles.SlideItem}>
                    <div className={styles.SlideItemImage}>
                      <Image src="/images/landing/imageNews.jpg" layout="fill" alt={"News & Insights"} />
                    </div>
                    <div className={styles.SlideItemTitle}>HEADER HEADER HEADER 5</div>
                  </div>
                </div>

                <div>
                  <div className={styles.SlideItem}>
                    <div className={styles.SlideItemImage}>
                      <Image src="/images/landing/imageNews.jpg" layout="fill" alt={"News & Insights"} />
                    </div>
                    <div className={styles.SlideItemTitle}>HEADER HEADER HEADER 6</div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Landing>
  );
};

export default News;
