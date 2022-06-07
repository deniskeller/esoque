import React from "react";
import { BaseContainer, BaseText, BaseTitle } from "@base/index";
import Image from "next/image";
import styles from "./Complaints.module.scss";
import Breadcrumbs from "@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs";

import ComplaintsForm from "@content/forms/ComplaintForm/ComplaintsForm";

const Complaints = () => {
  return (
    <BaseContainer>
      <div className={styles.Wrapper}>
        <div className={styles.Breadcrumbs}>
          <Breadcrumbs roorHref="/" rootPathName="Home" />
        </div>
        <BaseTitle className={styles.Title}>
          <span>Complaints Procedure</span>
        </BaseTitle>
        <div className={styles.WrapperContent}>
          <div className={styles.List}>
            <div className={styles.BlockImage}>
              <Image src={"/images/landing/esoque/imgEsoque2.png"} layout={"fill"} alt={"Unicorn image"} priority />
            </div>
            <div className={styles.ListItem}>
              {" "}
              <BaseText className={styles.ListItemText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae laoreet odio. Phasellus suscipit
                tincidunt enim, et volutpat risus commodo et. Ut cursus laoreet massa, vitae malesuada enim iaculis ut.
                Pellentesque sed nisl ultrices, tincidunt ante finibus, rutrum diam. Ut non euismod turpis. Aenean eros
                orci, interdum ut consequat nec, aliquam non justo. Curabitur lacinia scelerisque semper. Ut non
                accumsan mi. Ut justo felis, pulvinar at urna et, bibendum aliquam felis.
              </BaseText>
            </div>
            <div className={styles.ListItem}>
              <BaseText className={styles.ListItemText}>
                Suspendisse a auctor tellus. Fusce tristique tellus dolor, nec semper enim ultricies eget. Vivamus
                tempor risus non est vulputate, at volutpat metus venenatis. In nec ipsum et est consectetur venenatis.
                Sed eget condimentum nisl. Fusce pulvinar, lacus eu fermentum hendrerit, diam tortor tincidunt elit,
                vitae malesuada mi velit vitae erat. Nam ut nunc sit amet ipsum malesuada luctus sit amet in dui. Nullam
                fringilla blandit nulla, non volutpat velit pellentesque ut. Morbi efficitur ex nec nisl venenatis
                aliquam sit amet eu magna. Phasellus molestie posuere augue, quis suscipit turpis. Nullam ut nulla
                vestibulum, tempus urna eget, molestie magna. Pellentesque posuere venenatis dolor et sagittis.
              </BaseText>
            </div>
          </div>
        </div>
        {/* Form */}
        <ComplaintsForm />
      </div>
    </BaseContainer>
  );
};

export default Complaints;
