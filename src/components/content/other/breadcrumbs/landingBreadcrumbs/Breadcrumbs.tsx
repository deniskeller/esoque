import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({
  rootPathName = 'Home',
  roorHref = '/',
}: Breadcrumbs) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbList>();

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className={styles.Wrapper}>
      <Link href={roorHref}>
        <a className={styles.white}>{rootPathName.toUpperCase()}</a>
      </Link>

      {breadcrumbs.map((breadcrumb, i, arr) => {
        if (i === arr.length - 1) {
          return (
            <Link key={breadcrumb.href} href={breadcrumb.href}>
              <a>
                {' / '}
                <span className={styles.pink}>
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </span>
              </a>
            </Link>
          );
        }
        return (
          <Link key={breadcrumb.href} href={breadcrumb.href}>
            <a className={styles.white}>
              {' '}
              / {convertBreadcrumb(breadcrumb.breadcrumb)}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

const convertBreadcrumb = (str: string) => {
  return str
    .replace(/#.*$/, '')
    .replace(/_and_/g, ' & ')
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')

    .toUpperCase();
};

type BreadcrumbList = {
  breadcrumb: string;
  href: string;
}[];

type Breadcrumbs = {
  rootPathName: string;
  roorHref: string;
};
