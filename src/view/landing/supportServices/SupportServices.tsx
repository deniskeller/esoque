import React, { SyntheticEvent } from 'react';

import {
  BaseCheckbox,
  BaseContainer,
  BaseIcon,
  BaseSubtitle,
  BaseTitle,
} from '@base/index';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';
import useOnClickOutside from '@hooks/useOnClickOutside';

import styles from './SupportServices.module.scss';
import { ALL_ICONS } from '@constants/icons';
import AccordionItem from '@content/other/AccordionItem/AccordionItem';

const mockAdditionalFinancialServices = [
  { name: 'Active SWIFT/BIC', value: '£ 150,000' },
  { name: 'Passive SWIFT/BIC', value: '£ 50,000' },
  { name: 'Issuing License for VISA', value: '£ 100,000' },
  { name: 'Issuing License for MasterCard', value: '£ 100,000' },
  { name: 'Issuing License for China Union Pay', value: '£ 100,000' },
  { name: 'Issuing License for American Express', value: '£ 100,000' },
  { name: 'Issuing License for Discover', value: '£ 100,000' },
  { name: 'Issuing License for Diners Club', value: '£ 100,000' },
  { name: 'Issuing License for JSB', value: '£ 100,000' },
  { name: 'Acquiring License for VISA', value: '£ 100,000' },
  { name: 'Acquiring License for MasterCard', value: '£ 100,000' },
  { name: 'Acquiring License for China Union Pay', value: '£ 100,000' },
  { name: 'Acquiring License for American Express', value: '£ 100,000' },
  { name: 'Acquiring License for Discover', value: '£ 100,000' },
  { name: 'Acquiring License for Diners Club', value: '£ 100,000' },
  { name: 'Acquiring License for JSB', value: '£ 100,000' },
];

const mockOther = [
  { name: 'Employment of directors', value: '£ 80,000' },
  {
    name: 'Company monthly outsourcing fee for reporting and procedures',
    value: '£ 35,000',
  },
];

const SupportServices: React.FC = () => {
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
            <BaseTitle className={styles.Title}>Support Services</BaseTitle>
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
          <AccordionItem title="website development">
            <div className={styles.ListTotal}>
              <div className={styles.Checkbox}>
                <BaseCheckbox
                  checkboxValue={isChecked}
                  onClick={setIsChecked}
                />
              </div>
              <div className={styles.Title}>
                Option 1: Custom Design and Dashboard Development
              </div>
            </div>
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Web Design & Development</div>
                <div className={styles.Value}>from £ 25,000</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Dashboard Development</div>
                <div className={styles.Value}>from £ 35,000</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Corporate Brand Identity & Style Guidelines
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
                  Brand Strategy & Copywriting (English)
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
                <div className={styles.Title}>SMM & Blogging</div>
                <div className={styles.Value}>£ 2,500 / monthly</div>
              </div>
            </div>

            <div className={styles.ListTotal}>
              <div className={styles.Checkbox}>
                <BaseCheckbox
                  checkboxValue={isChecked}
                  onClick={setIsChecked}
                />
              </div>
              <div className={styles.Title}>
                Option 2: Custom Design and Third-party Platform Integration
              </div>
              <div className={styles.Value}>from £ 42,500</div>
            </div>

            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Web Design & Development</div>
                <div className={styles.Value}>from £ 25,000</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Dashboard Development</div>
                <div className={styles.Value}>from £ 35,000</div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Corporate Brand Identity & Style Guidelines
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
                  Brand Strategy & Copywriting (English)
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
                <div className={styles.Title}>SMM & Blogging</div>
                <div className={styles.Value}>£ 2,500 / monthly</div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="company registration in United Kingdom">
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>Limited Company (LTD)</div>
                <div className={styles.Value}>£ 5,000</div>
              </div>

              <div className={styles.Includes}>
                <div className={styles.IncludesTitle}>Includes:</div>
                <ul className={styles.IncludesList}>
                  <li>legal address for 1 year;</li>
                  <li>correspondence address for 1 year;</li>
                  <li>notarized constituent documants package;</li>
                  <li>apostille on documents</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="physical office in united kingdom">
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Virtual office on London (one time set-up fee)
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
                  Physical office on London (one time set-up fee)
                </div>
                <div className={styles.Value}>£ 5,000</div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="bank account opening">
            <div className={styles.List}>
              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Tier 1 British Bank Correspondence Account
                </div>
                <div className={styles.Value}>£ 175,000</div>
              </div>

              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Tier 2 British Bank Correspondence Account
                </div>
                <div className={styles.Value}>£ 100,000</div>
              </div>

              <div className={styles.ListItem}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>
                  Tier 3 British Bank Correspondence Account
                </div>
                <div className={styles.Value}>£ 50,000</div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="additional financial services">
            <div className={styles.List}>
              {mockAdditionalFinancialServices?.map((item, index) => {
                return (
                  <div className={styles.ListItem} key={index}>
                    <div className={styles.Checkbox}>
                      <BaseCheckbox
                        checkboxValue={isChecked}
                        onClick={setIsChecked}
                      />
                    </div>
                    <div className={styles.Title}>{item.name}</div>
                    <div className={styles.Value}>{item.value}</div>
                  </div>
                );
              })}
            </div>
          </AccordionItem>

          <AccordionItem title="other">
            <div className={styles.List}>
              {mockOther?.map((item, index) => {
                return (
                  <div className={styles.ListItem} key={index}>
                    <div className={styles.Checkbox}>
                      <BaseCheckbox
                        checkboxValue={isChecked}
                        onClick={setIsChecked}
                      />
                    </div>
                    <div className={styles.Title}>{item.name}</div>
                    <div className={styles.Value}>{item.value}</div>
                  </div>
                );
              })}
            </div>
          </AccordionItem>
        </div>
      </BaseContainer>
    </div>
  );
};

export default SupportServices;
