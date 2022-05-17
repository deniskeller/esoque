import React from "react";
import { BaseButton, BaseInput, BasePopup, BaseTextarea } from "@base/index";
import styles from "./CorporateDocumentsPopup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { EsoqueState } from "@store/store";
import { checkInCorpdoc } from "@api/widget-sidious";
import { validateEmail } from "@utils/validateInputs";
import { actions as actionsModal } from "store/modals/reducer";

interface Props {
  className?: string;
}

const CorporateDocumentsPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  // Tab 1
  const { corpdoc } = useSelector((state: EsoqueState) => state.widgetDox);

  const { userData } = useSelector((state: EsoqueState) => state.user);

  const [res, setRes] = React.useState<string>();

  const [name, setName] = React.useState<string>(userData?.firstName);
  const [email, setEmail] = React.useState<string>(userData?.email);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [phone, setPhone] = React.useState<string>(userData?.phone);
  const [delivery_address, setDelivery_address] = React.useState<string>(
    userData?.addressLine1
  );

  const [comment, setComment] = React.useState<string>("");

  const submit = async () => {
    const Contact = {
      name,
      email,
      phone,
      delivery_address,
      comment,
    };

    const data = {
      Contact,
      Company: corpdoc?.Company,
      OrderList: corpdoc?.OrderList,
    };

    const response = await checkInCorpdoc({ data });
    if (response) {
      dispatch(actionsModal.setPopup({ popup: "RequestSuccessPopup", id: 8 }));
    } else {
      dispatch(actionsModal.setPopup({ popup: "RequestErrorPopup", id: 10 }));
    }
  };

  React.useEffect(() => {
    return () => setRes("");
  }, []);

  return (
    <>
      <BasePopup className={className} type="mini">
        <div className={styles.CorporateDocumentsPopupTitle}>Send Request</div>

        <table className={styles.Table}>
          <tbody>
            <tr>
              <td className={styles.Large}>Jurisdiction</td>
              <td>{corpdoc?.Data?.juristdiction}</td>
            </tr>
            <tr>
              <td className={styles.Large}>Company Name</td>
              <td>{corpdoc?.Data?.companyName}</td>
            </tr>
            {corpdoc?.OrderList?.ItemList?.map((service) => {
              const curService = corpdoc?.Data?.services?.ItemList?.find(
                (item) => service?.id === item?.id
              );
              return (
                <tr key={curService?.id}>
                  <td className={styles.Large}>{curService?.name}</td>
                  <td>
                    <span>{curService?.price}</span>&nbsp;EUR
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className={`${styles.TdTotal} ${styles.Large}`}>Total</td>
              <td>
                <span>{corpdoc?.Data?.totalPrice}</span>&nbsp;EUR
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
          required
          error={emailError}
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

export default CorporateDocumentsPopup;
