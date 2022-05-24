import React from 'react';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import styles from './NewsAndInsights.module.scss';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';
import { useRouter } from 'next/router';

const mockNews = [
  {
    id: 1,
    image: '/images/landing/imageNews.jpg',
    title: 'HEADER HEADER HEADER 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed',
    read: '1',
    date: 'DD/MM/YYYY',
  },
  {
    id: 2,
    image: '/images/landing/imageNews.jpg',
    title: 'HEADER HEADER HEADER 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed',
    read: '1',
    date: 'DD/MM/YYYY',
  },
  {
    id: 3,
    image: '/images/landing/imageNews.jpg',
    title: 'HEADER HEADER HEADER 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed',
    read: '1',
    date: 'DD/MM/YYYY',
  },
  {
    id: 4,
    image: '/images/landing/imageNews.jpg',
    title: 'HEADER HEADER HEADER 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed',
    read: '1',
    date: 'DD/MM/YYYY',
  },
  {
    id: 5,
    image: '/images/landing/imageNews.jpg',
    title: 'HEADER HEADER HEADER 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed',
    read: '1',
    date: 'DD/MM/YYYY',
  },
  {
    id: 6,
    image: '/images/landing/imageNews.jpg',
    title: 'HEADER HEADER HEADER 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam	vitae laoreet odio. Phasellus suscipit tincidunt enim, et volutpat	risus commodo et. Ut cur Lorem ipsum dolor sit amet consectetur	adipisicing elit. Doloribus sapiente quia unde. Nam hic, sed',
    read: '1',
    date: 'DD/MM/YYYY',
  },
];

const NewsAndInsights = () => {
  const router = useRouter();
  const goToNews = (id: number) => {
    router.push('/news_and_insights/' + id);
  };
  return (
    <div className={styles.Wrapper}>
      <BaseContainer>
        <div className={styles.Breadcrumbs}>
          <Breadcrumbs roorHref="/" rootPathName="Home" />
        </div>
        <BaseTitle className={styles.Title}>News & Insights</BaseTitle>

        <div className={styles.News}>
          {mockNews?.map((item) => {
            return (
              <div className={styles.NewsItem} key={item.id}>
                <div className={styles.NewsItemImage}>
                  <Image
                    src={item.image}
                    layout="fill"
                    alt={'News & Insights'}
                  />
                </div>

                <div
                  className={styles.NewsItemTitle}
                  onClick={() => goToNews(item.id)}
                >
                  {item.title}
                </div>
                <div className={styles.NewsItemDescription}>
                  {item.description}
                </div>
                <div className={styles.NewsItemInfo}>
                  <div className={styles.NewsItemRead}>
                    {item.read} min read
                  </div>
                  <div className={styles.NewsItemDate}>{item.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </BaseContainer>
    </div>
  );
};

export default NewsAndInsights;
