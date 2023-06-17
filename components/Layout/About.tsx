import Image from "next/image";
import landingImg1 from "@components/components/images/IMG_1.jpeg";
import landingImg2 from "@components/components/images/IMG_2.jpeg";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]}>
      <div className={styles.about}>
        <div className={styles.textz}>
          <h1> Making Your Face Extra Pretty</h1>
          <p>
            Number One make-over brand in South East and Akwa Ibom
            {/* Mara Glamz is a leading brand in make-overs, headties, handfan and
            designing other aesthetically accessories. We cover areas mostly in
            the eastern part(Anambra, Abia and Imo) and AkwaIbom state. */}
          </p>
          <button onClick={() => window.location.replace("#contact")}>
            {" "}
            Book Now
          </button>
        </div>

        <div className={styles["image-container"]}>
          <Image
            src={landingImg1}
            width={150}
            height={200}
            alt="make-up"
            priority
          />
          <Image
            src={landingImg2}
            width={150}
            height={200}
            alt="make-up"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default About;
