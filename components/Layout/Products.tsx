import Image from "next/image";
import useWindowSize from "@components/components/Hooks/useWindowSize";
import zikel from "@components/components/images/zikel.png";
import vee from "@components/components/images/vee beauty.png";
import airspun from "@components/components/images/airspun.png";
import candid from "@components/components/images/candid-glow.jpg";
import stayMate from "@components/components/images/stay-mate.jpg";

import styles from "./Products.module.css";

export default function Products() {
  const { windowWidth } = useWindowSize();
  const BREAKPOINT = 768;
  const checkWindow = windowWidth <= BREAKPOINT;
  return (
    <div className={styles.product}>
      <h3> Brands</h3>
      <div className={styles["product-container"]}>
        <Image
          src={zikel}
          width={checkWindow ? 50 : 80}
          height={checkWindow ? 50 : 80}
          alt="telephone"
        />
        <Image
          src={vee}
          width={checkWindow ? 50 : 80}
          height={checkWindow ? 50 : 80}
          alt="telephone"
        />
        <Image
          src={airspun}
          width={checkWindow ? 50 : 80}
          height={checkWindow ? 50 : 80}
          alt="telephone"
        />
        <Image
          src={candid}
          width={checkWindow ? 50 : 80}
          height={checkWindow ? 50 : 80}
          alt="telephone"
        />
        <Image
          src={stayMate}
          width={checkWindow ? 50 : 80}
          height={checkWindow ? 50 : 80}
          alt="telephone"
        />
      </div>
    </div>
  );
}
