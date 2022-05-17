import React from "react";
import { BaseButton, BaseInput, BasePopup, BaseTextarea } from "@base/index";
import { useDispatch, useSelector } from "react-redux";
import { EsoqueState } from "@store/store";

import { checkInCopycert, checkInSigncert } from "@api/widget-sidious";
import { validateEmail } from "@utils/validateInputs";
import { actions as actionsModal } from "store/modals/reducer";

import styles from "./CertificationPopup.module.scss";
interface Props {
  className?: string;
}

const CertificationPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  // Tab 2 / Tab 3

  const { copycert, tabName, signcert } = useSelector(
    (state: EsoqueState) => state.widgetDox
  );

  const { userData } = useSelector((state: EsoqueState) => state.user);

  const [name, setName] = React.useState<string>(userData?.firstName);
  const [email, setEmail] = React.useState<string>(userData?.email);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [phone, setPhone] = React.useState<string>(userData?.phone);
  const [delivery_address, setDelivery_address] = React.useState<string>(
    userData?.addressLine1
  );

  const [comment, setComment] = React.useState<string>("");

  const [res, setRes] = React.useState<string>();

  const submit = async () => {
    let data;

    const Contact = {
      name,
      email,
      phone,
      delivery_address,
      comment,
    };

    if (tabName === "copycert") {
      data = {
        Contact,
        OrderList: copycert?.OrderList,
      };

      const response = await checkInCopycert({ data });
      if (response) {
        dispatch(
          actionsModal.setPopup({ popup: "RequestSuccessPopup", id: 9 })
        );
      } else {
        dispatch(actionsModal.setPopup({ popup: "RequestErrorPopup", id: 10 }));
      }
    } else {
      data = {
        Contact,
        OrderList: signcert?.OrderList,
      };
      const response = await checkInSigncert({ data });
      if (response) {
        dispatch(
          actionsModal.setPopup({ popup: "RequestSuccessPopup", id: 9 })
        );
      } else {
        dispatch(actionsModal.setPopup({ popup: "RequestErrorPopup", id: 10 }));
      }
    }
  };

  React.useEffect(() => {
    return () => setRes("");
  }, []);

  return (
    <>
      <BasePopup className={className} type="mini">
        <div className={styles.CertificationPopupTitle}>Send Request</div>
        <div className={styles.CertificationPopupSubtitle}>
          Pay now or send request for bank transfers and you will receive the
          link to Notary Appointments’ Calendar
        </div>

        <table className={styles.Table}>
          <tbody>
            {tabName === "copycert" && (
              <tr>
                <td colSpan={3} className={styles.TdHeader}>
                  {copycert?.Data?.services?.name}
                </td>
              </tr>
            )}

            {tabName === "copycert"
              ? copycert?.OrderList?.ItemList?.map((service) => {
                  const curService = copycert?.Data?.services?.ItemList?.find(
                    (item) => service?.id === item?.id
                  );

                  if (curService?.id === copycert?.OrderList?.pricelist_id) {
                    return;
                  }

                  return (
                    <tr key={curService?.id}>
                      <td>{curService?.name}</td>
                      <td className={styles.TdCounter}>
                        {curService?.name !== "Delivery" &&
                          copycert?.Data?.quantity}
                      </td>
                      <td>
                        <span>
                          {curService?.name !== "Delivery"
                            ? copycert?.Data?.price
                            : curService?.price}
                        </span>
                        &nbsp;EUR
                      </td>
                    </tr>
                  );
                })
              : signcert?.OrderList?.ItemList?.map((service) => {
                  const curService = signcert?.Data?.services?.ItemList?.find(
                    (item) => service?.id === item?.id
                  );

                  return (
                    <tr key={curService?.id}>
                      <td>{curService?.name}</td>
                      <td className={styles.TdCounter}>
                        {curService?.name !== "Delivery" &&
                          signcert?.Data?.quantity}
                      </td>
                      <td>
                        <span>
                          {curService?.name !== "Delivery"
                            ? signcert?.Data?.price
                            : curService?.price}
                        </span>
                        &nbsp;EUR
                      </td>
                    </tr>
                  );
                })}

            <tr>
              <td colSpan={2} className={styles.TdTotal}>
                Total
              </td>
              <td>
                {tabName === "copycert" ? (
                  <>
                    <span>{copycert?.Data?.totalPrice}</span>&nbsp;EUR
                  </>
                ) : (
                  <>
                    <span>{signcert?.Data?.totalPrice}</span>&nbsp;EUR
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <BaseInput
          name=""
          placeholder="Your Name"
          type="text"
          required
          autocomplete="on"
          value={name}
          onChange={(val: string) => setName(val)}
          className={styles.Input}
        />

        <BaseInput
          name=""
          placeholder="Email"
          type="text"
          error={emailError}
          required
          autocomplete="on"
          value={email}
          onChange={(val: string) => setEmail(val)}
          className={styles.Input}
        />

        <BaseInput
          name=""
          placeholder="Phone"
          type="text"
          required
          autocomplete="on"
          value={phone}
          onChange={(val: string) => setPhone(val)}
          className={styles.Input}
        />

        <BaseTextarea
          placeholder="Delivery address for originals / hardcopies of documents"
          value={delivery_address}
          onChange={(val: string) => setDelivery_address(val)}
          className={`${styles.Textarea} ${styles.Textarea1}`}
        />

        <BaseTextarea
          placeholder="Comment"
          value={comment}
          onChange={(val: string) => setComment(val)}
          className={`${styles.Textarea} ${styles.Textarea2}`}
        />

        <BaseButton
          onClick={() => {
            if (validateEmail(email)) {
              setEmailError(false);
              submit();
              return;
            }
            setEmailError(true);
          }}
          className={styles.Button}
        >
          Request
        </BaseButton>

        <div style={{ color: "#fff" }}>{res}</div>
      </BasePopup>
    </>
  );
};

export default CertificationPopup;
