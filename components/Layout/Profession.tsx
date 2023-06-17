import Image from "next/image";
import useWindowSize from "@components/components/Hooks/useWindowSize";
import prof1 from "@components/components/images/prof_1.jpeg";
import prof2 from "@components/components/images/prof_2.jpeg";
import prof3 from "@components/components/images/prof_3.jpeg";
import prof4 from "@components/components/images/prof_4.jpeg";

import styles from "./Profession.module.css";

export default function Profession() {
  const { windowWidth } = useWindowSize();
  const BREAKPOINT = 768;
  const checkWindow = windowWidth <= BREAKPOINT;

  return (
    <div className={styles["prof"]}>
      <div className={styles["prof-container"]}>
        <h3> Professional service</h3>
        <div className={styles["read-more"]}>
          <p>
            Mara Glamz is a leading brand in make-overs, headties, handfan and
            designing other aesthetically accessories. We cover areas mostly in
            the eastern part(Anambra, Abia and Imo) and AkwaIbom state.{" "}
            <button>Read More...</button>
          </p>
        </div>
      </div>
      <div className={styles["prof-img"]}>
        <Image
          src={prof1}
          width={checkWindow ? 60 : 100}
          height={checkWindow ? 100 : 120}
          alt="make-up"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={prof2}
          width={checkWindow ? 60 : 100}
          height={checkWindow ? 100 : 120}
          alt="make-up"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={prof3}
          width={checkWindow ? 60 : 100}
          height={checkWindow ? 100 : 120}
          alt="make-up"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={prof4}
          width={checkWindow ? 60 : 100}
          height={checkWindow ? 100 : 120}
          alt="make-up"
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
