import React from "react";
import { BaseContainer, BaseText, BaseTitle } from "@base/index";
import Image from "next/image";
import styles from "./Unicorns.module.scss";
import {
  BusinessItem,
  IconHorse,
  ServicesItem,
  UnicornsPopup,
} from "@content/index";

interface Props {}

//моковые данные
const mockServicesItems = [
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Card Schemes Membership (INT)",
    itemList: [
      "Visa",
      "MasterCard",
      "UnionPay",
      "JCB",
      "Discover",
      "Diners Club",
      "American Express",
      "Payment Аacilitator registration ",
      "ISO (independent sales organisation) registration ",
      "TPP (third party processor) registration ",
      "DWO or SDWO (digital wallet operator or staged digital wallet operator) registration",
      "Assistance during the card schemes internal and external audit ",
      "Team education ",
      "Chargeback management",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
  {
    itemTitle: "Banking Licenses (UK & US)",
    itemList: [
      "Specialized Banking License (UK)",
      "State Banking License (US)",
      "Federal Banking License (US)",
    ],
  },
];

const mockBbusinessItems = [
  {
    id: 1,
    title: "SEPA Membership",
  },
  {
    id: 2,
    title: "SWIFT",
  },
  {
    id: 3,
    title: "Blockchain",
  },
  {
    id: 4,
    title: "Gambling and lottery licensing",
  },
  {
    id: 5,
    title: "E-commerce business set-up",
  },
  {
    id: 6,
    title: "Investment funds and brokerage companies",
  },
  {
    id: 7,
    title: "PCI DSS",
  },
  {
    id: 8,
    title: "Patents",
  },
  {
    id: 9,
    title: "Trademark",
  },
  {
    id: 10,
    title: "Account opening",
  },
  {
    id: 11,
    title: "NASDAQ",
  },
  {
    id: 12,
    title: "Additional offers",
  },
  // {
  //   id: 13,
  //   title: 'Additional offers',
  // },
  // {
  //   id: 14,
  //   title: 'Additional offers',
  // },
];

const Unicorns: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.WelcomeBlock}>
          <BaseTitle className={styles.WelcomeBlockTitle}>Unicorns</BaseTitle>
          <div className={styles.WelcomeBlockUl}>
            <div className={styles.WelcomeBlockImage}>
              <Image
                src="/images/landing/imgUnicornsHorse1.png"
                layout={"fill"}
                priority={true}
                blurDataURL="/images/landing/imgUnicornsHorse1.png"
                placeholder="blur"
                alt={"Unicorn image"}
              />
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                Welcome to the Unicorn page! We really hope to see you like the
                new Amazon, Google or PayPal.
              </BaseText>
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                In the new world of the rapidly developing FinTech industry, we
                are the ones that help you to achieve your results.
              </BaseText>
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                Here we offer our licensing services in different fields of the
                financial business like:
              </BaseText>
            </div>
          </div>
        </div>

        <div className={styles.ServicesBlock}>
          {mockServicesItems &&
            mockServicesItems.map((item, index) => {
              return <ServicesItem item={item} key={index} />;
            })}
        </div>
      </BaseContainer>
      <div className={styles.OurWorkBlockContainer}>
        <BaseContainer>
          <div className={styles.OurWorkBlock}>
            <div className={styles.OurWorkBlockImage}>
              <Image
                layout={"fill"}
                alt={"Unicorn image"}
                loading="lazy"
                blurDataURL="/images/landing/imgUnicornsHorse2.png"
                src="/images/landing/imgUnicornsHorse2.png"
              />
            </div>

            <BaseTitle className={styles.OurWorkBlockTitle}>
              What do we do?
            </BaseTitle>

            <ul className={styles.OurWorkBlockPlan}>
              <li className={styles.OurWorkBlockPlanItem}>
                <div className={styles.PlanItemImage}>
                  <IconHorse className={styles.Image} />
                </div>

                <p>Draft or review your procedures</p>
              </li>
              <li className={styles.OurWorkBlockPlanItem}>
                <div className={styles.PlanItemImage}>
                  <IconHorse className={styles.Image} />
                </div>
                <p>Approve your procedures with the regulator</p>
              </li>
              <li className={styles.OurWorkBlockPlanItem}>
                <div className={styles.PlanItemImage}>
                  <IconHorse className={styles.Image} />
                </div>
                <p>
                  Update your business model so you can increase your income
                </p>
              </li>
              <li className={styles.OurWorkBlockPlanItem}>
                <div className={styles.PlanItemImage}>
                  <IconHorse className={styles.Image} />
                </div>
                <p>Help you throughout procedures and consultations</p>
              </li>
              <li className={styles.OurWorkBlockPlanItem}>
                <div className={styles.PlanItemImage}>
                  <IconHorse className={styles.Image} />
                </div>
                <p>
                  Prepare the business plan and make the financial forecasts
                </p>
              </li>
            </ul>

            <BaseText className={styles.OurWorkBlockPs}>
              For us, it is a unique journey that we start with you and work
              close day-by-day until the license would be achieved. The unique
              experience gives us confidence in our services and happy customers
              only prooves our statements.
            </BaseText>

            <div className={styles.OurWorkBlockSubtitle}>
              <div className={styles.H1}>
                <h1>
                  Together with the primary services, we also cover the
                  following ones to fully prepare your business:
                </h1>
              </div>
              <div className={styles.P}>
                <p>[ PRESS TO KNOW MORE ]</p>
              </div>
            </div>

            <div className={styles.OurWorkBusinessItems}>
              {mockBbusinessItems &&
                mockBbusinessItems.map((item) => {
                  return (
                    <BusinessItem
                      title={item.title}
                      id={item.id}
                      key={item.id}
                    />
                  );
                })}
            </div>
          </div>
        </BaseContainer>
      </div>
      <UnicornsPopup className="UnicornsPopup" />
    </>
  );
};

export default Unicorns;
