import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Liechtenstein: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Liechtenstein
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.Paragraph}>
          The Liechtenstein Foundation is a legal entity without participants
          which is provided by the income of it’s founder and which serves to
          achieve its goal. Contributions donated by the founder, cease to be
          his property at the time of transfer and becomes the property of fund.
        </p>

        <p className={styles.Paragraph}>
          The intentions of founder are set forth in the foundation’s
          documentation (Act on the Foundation, Statutes, Statutory Provisions,
          Mandatory Provisions, etc.). The main task of Foundation Council is
          the implementation of founder’s intentions, conducted on
          administrative basis.
        </p>

        <h2 className={styles.Subtitle}>Initial contribution</h2>

        <p className={styles.Paragraph}>
          The minimum capital (share capital) must be CHF 30,000 or equivalent
          amount in any other legal currency.
        </p>

        <h2 className={styles.Subtitle}>Governing Bodies</h2>

        <p className={styles.Paragraph}>
          The supreme body of fund is Council of the Fund which conducts
          economic activity of fund in accordance with the statutes, Articles of
          Association, Mandatory Regulations. Foundation documents can provide
          opportunities for activities of other subsidiary bodies, for example:
          curators, trustees or family advisors to obtain information about the
          activities of Foundation Council or to restrict these activities by
          using the right to give instructions, check or inflict veto.
        </p>

        <h2 className={styles.Subtitle}>Beneficiaries</h2>

        <p className={styles.Paragraph}>
          The beneficiaries who are entitled to receive profits and/or assets
          are appointed either by the founder or in accordance with provisions
          established in the Charters - by another body. In addition to receive
          the benefits by beneficial owner, these persons or body are also
          determined in accordance with provisions established in the Charters
          and/or Statutory Regulations which sets forth the conditions or amount
          of benefits received by the beneficial owner. Statutory regulations
          which as a rule are integral part of the Charters and often take
          precedence over them- should not be deposited in the State Register.
          They may be subject to cancellation or non-cancellation as well as
          amended or remain unchanged. Allowable amendments may also be made due
          to the occurrence of certain circumstances, for example, the founder’s
          death, which must remain unchanged. As a rule, the executive bodies
          must within certain limits fulfill will of the founder. If there are
          certain preconditions, according with the law and Charters, the
          benefit received by beneficial owner should not be subject to arrest
          by creditor.
        </p>

        <h2 className={styles.Subtitle}>Taxation</h2>

        <p className={styles.Paragraph}>
          Assets donated by persons, permanently residing abroad are not subject
          to the gift tax applicable in Liechtenstein. The taxation law in force
          in Liechtenstein does not consider the distribution of benefits
          received by the beneficial owner - recipient, permanently resident
          abroad, the subject of taxation. In essence, a tax levied on capital,
          constituting 1% of the constituent fund and available reserves (net
          assets) is subject to recovery and should not be less than 1,000 Swiss
          francs annually.
        </p>

        <h2 className={styles.Subtitle}>The main use of fund</h2>

        <p className={styles.Paragraph}>
          The Liechtenstein Foundation is an ideal tool for regulating
          inheritance rights. Therefore, especially recommended for complex
          property and family models, this foundation allows to plan property
          for future generations with virtually no limit, even in the absence of
          descendants unlike the rules provided for the preparation of a will.
          In practice, a foundation can be viewed as evidence of the growing
          demand for long-term family protection. <br /> In the same way, a
          foundation is a suitable tool for preserving family businesses. For
          example, an enterprise’s activities within a foundation can prevent
          its possible separation or even liquidation. Specific example: if
          capital with the exception of capital assigned to an enterprise, is
          insufficient to meet the needs of descendants or to pay possible
          property taxes, the only solution is often debt that threatens the
          means of subsistence or even can cause liquidation of a company.{' '}
          <br /> In addition, the fund of Liechtenstein can also be used as a
          structure for storing assets. Likewise by managing its own securities,
          the fund can be used to exercise significant participation in other
          companies as a holding company. Liechtenstein Foundation as a parent
          company can perform certain financial functions within the group. It
          should be noted that, depending on which country this concerns, the
          distribution of dividends and interest payments made by foreign
          subsidiaries to the fund are likely to be taxed. In the absence of
          double taxation agreements, claims for these taxes are usually not
          possible. In practice, however, the absence of double taxation
          agreements is not necessarily a disadvantage, because as a result the
          official exchange of information between states in most agreements
          aren’t carried out.
        </p>
      </div>
    </>
  );
};

export default Liechtenstein;
