import React, { SyntheticEvent } from 'react';

import {
  BaseCheckbox,
  BaseContainer,
  BaseIcon,
  BaseSubtitle,
  BaseTitle,
} from '@base/index';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';
import Link from 'next/link';
import useOnClickOutside from '@hooks/useOnClickOutside';

import styles from './Licensing.module.scss';
import { ALL_ICONS } from '@constants/icons';
import AccordionItem from '@content/other/AccordionItem/AccordionItem';

const Licensing: React.FC = () => {
  //логика модалки калькулятора
  const [hidden, setHidden] = React.useState<boolean>(false);
  const showCalculatedPopup = (event: SyntheticEvent) => {
    event.stopPropagation();
    setHidden(true);
  };
  //убрать any и задать правильный тип
  const closeCalculatedPopup = (event: any) => {
    event.stopPropagation();
    setHidden(false);
  };
  const thisPopup = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(thisPopup, closeCalculatedPopup);

  //логика аккордионов
  const thisAccordion = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  // React.useEffect(() => {
  //   console.log('thisAccordion', thisAccordion);
  // }, [thisAccordion]);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  //логика чекбоксов
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <div className={styles.Container}>
      <BaseContainer>
        <div className={styles.Breadcrumbs}>
          <Breadcrumbs roorHref="/" rootPathName="Home" />
        </div>

        <div className={styles.Header}>
          <div className={styles.HeaderDescription}>
            <BaseTitle className={styles.Title}>Licensing</BaseTitle>
            <BaseSubtitle type="h3" className={styles.Subtitle}>
              Please select the service you are interested in below
            </BaseSubtitle>
          </div>
          <div className={styles.HeaderActions}>
            <div className={styles.Calculated} onClick={showCalculatedPopup}>
              <span>TOTAL COST £ #calculated</span>
              <div
                className={`${styles.CalculatedPopup} ${
                  !hidden ? styles.Hidden : ''
                }`}
                ref={thisPopup}
              >
                <div className={styles.Close} onClick={closeCalculatedPopup}>
                  <BaseIcon
                    icon={ALL_ICONS.CALCULATED_POPUP_CLOSE}
                    viewBox="0 0 20 23"
                    className={styles.IconClose}
                  />
                </div>
                <div className={styles.List}>
                  <div className={styles.ListItem}>
                    <div className={styles.ListItemDelete}>
                      <BaseIcon
                        icon={ALL_ICONS.TRASH_CAN}
                        viewBox="0 0 22 23"
                        className={styles.IconDelete}
                      />
                    </div>
                    <div className={styles.ListItemName}>Position #1</div>
                    <div className={styles.ListItemPrice}>price</div>
                  </div>
                  <div className={styles.ListItem}>
                    <div className={styles.ListItemDelete}>
                      <BaseIcon
                        icon={ALL_ICONS.TRASH_CAN}
                        viewBox="0 0 22 23"
                        className={styles.IconDelete}
                      />
                    </div>
                    <div className={styles.ListItemName}>Position #2</div>
                    <div className={styles.ListItemPrice}>price</div>
                  </div>
                  <div className={styles.ListItem}>
                    <div className={styles.ListItemDelete}>
                      <BaseIcon
                        icon={ALL_ICONS.TRASH_CAN}
                        viewBox="0 0 22 23"
                        className={styles.IconDelete}
                      />
                    </div>
                    <div className={styles.ListItemName}>Position #3</div>
                    <div className={styles.ListItemPrice}>price</div>
                  </div>
                </div>
                <div className={styles.Info}>
                  <div className={styles.Total}>TOTAL</div>
                  <div className={styles.Price}>price</div>
                </div>
              </div>
            </div>
            <div className={styles.Order}>ORDER</div>
          </div>
        </div>

        <div className={styles.Accordion}>
          <AccordionItem title="AEMI">
            <div className={styles.ListTotal}>
              <div className={styles.Checkbox}>
                <BaseCheckbox
                  checkboxValue={isChecked}
                  onClick={setIsChecked}
                />
              </div>
              <div className={styles.Title}>Total Cost</div>
              <div className={styles.Value}>£ 1, 061,000</div>
            </div>
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Requirements to the authorised capital
                </div>
                <div className={styles.Value}>£ 305,000</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Commission in the FCA treasury for a financial company
                </div>
                <div className={styles.Value}>£ 6,000</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Cost of preparation of documents and infrastructure
                </div>
                <div className={styles.Value}>£ 750,000</div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Semi">
            <div className={styles.ListTotal}>
              <div className={styles.Checkbox}>
                <BaseCheckbox
                  checkboxValue={isChecked}
                  onClick={setIsChecked}
                />
              </div>
              <div className={styles.Title}>Total Cost</div>
              <div className={styles.Value}>£ 201,500</div>
            </div>
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Requirements to the authorised capital
                </div>
                <div className={styles.Value}>£ 0,00</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Commission in the FCA treasury for a financial company
                </div>
                <div className={styles.Value}>£ 1,500</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Cost of preparation of documents and infrastructure
                </div>
                <div className={styles.Value}>£ 200,000</div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Sublicensing">
            <div className={styles.ListTotal}>
              <div className={styles.Checkbox}>
                <BaseCheckbox
                  checkboxValue={isChecked}
                  onClick={setIsChecked}
                />
              </div>
              <div className={styles.Title}>Total Cost</div>
              <div className={styles.Value}>£ 775,000</div>
            </div>
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Government Application Fee</div>
                <div className={styles.Value}>£ 25,000</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Application Fee</div>
                <div className={styles.Value}>£ 750,000</div>
              </div>

              <div className={styles.ListTitle}>
                Expanses on the sub-license
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Drafting the business plan</div>
                <div className={styles.Value}>£ 10,000</div>
              </div>

              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Government fee</div>
                <div className={styles.Value}>£ 2,000</div>
              </div>

              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  One time set up fee of the technical system
                </div>
                <div className={styles.Value}>£ 15,000</div>
              </div>

              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Application design and sending to the FCA
                </div>
                <div className={styles.Value}>£ 10,000</div>
              </div>

              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Drafting of the internal procedures for the agent
                </div>
                <div className={styles.Value}>£ 5,500</div>
              </div>
            </div>
          </AccordionItem>
        </div>
      </BaseContainer>
    </div>
  );
};

export default Licensing;
