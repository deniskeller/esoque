import React from "react";
import { BaseButton, BaseInput, BasePopup, BaseTextarea } from "@base/index";
import styles from "./NotAcceptingPopup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { EsoqueState } from "@store/store";
import { validateEmail } from "@utils/validateInputs";
import { checkInCorpdoc } from "@api/widget-sidious";
import { actions as actionsModal } from "store/modals/reducer";

interface Props {
  className?: string;
}

const NotAcceptingPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const { corpdocOffline } = useSelector(
    (state: EsoqueState) => state.widgetDox
  );

  const { userData } = useSelector((state: EsoqueState) => state.user);

  const [res, setRes] = React.useState<string>();

  const [name, setName] = React.useState<string>(userData?.firstName);
  const [email, setEmail] = React.useState<string>(userData?.email);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [phone, setPhone] = React.useState<string>(userData?.phone);

  // Tab 1

  const [comment, setComment] = React.useState<string>("");

  const submit = async () => {
    const Contact = {
      name,
      email,
      phone,
      comment,
    };

    const Company = {
      name: corpdocOffline?.Data?.companyName,
      jurisdiction: corpdocOffline?.Data?.juristdiction,
    };

    const data = {
      Contact,
      Company,
    };

    const response = await checkInCorpdoc({ data });
    if (response) {
      dispatch(actionsModal.setPopup({ popup: "RequestSuccessPopup", id: 9 }));
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
        <div className={styles.NotAcceptingPopupTitle}>Send Request</div>

        <table className={styles.Table}>
          <tbody>
            <tr>
              <td className={styles.Large}>Jurisdiction</td>
              <td>{corpdocOffline?.Data?.juristdiction}</td>
            </tr>
            <tr>
              <td className={styles.Large}>Company Name</td>
              <td>{corpdocOffline?.Data?.companyName}</td>
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
          placeholder="Please, specify which information about the company you wish to receive."
          value={comment}
          onChange={(val: string) => setComment(val)}
          className={`${styles.Textarea} ${styles.Textarea1}`}
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

export default NotAcceptingPopup;
