import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useWindowSize from "@components/components/Hooks/useWindowSize";
import cancelz from "@components/components/images/cancel.svg";
import hamburger from "@components/components/images/hamburger.svg";
import styles from "./NavBar.module.css";
import { useState } from "react";

export default function NavBar() {
  const { windowWidth } = useWindowSize();
  const BREAKPOINT = 768;
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isHamburger, setIsHamburger] = useState(true);
  const [isCancel, setIsCancel] = useState(false);
  const checkWindow = windowWidth <= BREAKPOINT && isCancel;

  function setFixed() {
    console.log(window.scrollY);
  }

  function setHamburger() {
    setIsCancel(true);
    setIsHamburger(false);
  }

  function setCancel() {
    setIsHamburger(true);
    setIsCancel(false);
  }

  function getWindow() {
    window.location.replace("#contact");
  }
  return (
    <>
      <nav className={styles.nav}>
        <h1>Mara Glamz</h1>
        <span className={styles["icon-hamburger"]} onClick={setHamburger}>
          {isHamburger && (
            <Image src={hamburger} width={40} height={40} alt="make-up" />
          )}
        </span>
        {windowWidth > 768 && (
          <ul>
            <div className={styles["mobile-icon"]}>
              <span className={styles["icon-hamburger"]} onClick={setHamburger}>
                {isHamburger && (
                  <Image src={hamburger} width={20} height={20} alt="make-up" />
                )}
              </span>
              <span className={styles["icon-cancel"]}>
                {isCancel && (
                  <Image src={cancelz} width={20} height={20} alt="make-up" />
                )}
              </span>
            </div>
            <li className={currentRoute === "/" ? "active" : ""}>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={{}}>About Us</Link>
            </li>
            <li className={currentRoute === "/error" ? "active" : ""}>
              <Link href={"/error"}>Gallery</Link>
            </li>
            <li>
              <button onClick={getWindow}>Book Appointment</button>
            </li>
          </ul>
        )}
        {checkWindow && (
          <ul className={styles["mobile-ul"]}>
            <div className={styles["mobile-icon"]}>
              <span className={styles["icon-cancel"]}>
                {isCancel && (
                  <Image
                    src={cancelz}
                    width={20}
                    height={20}
                    alt="make-up"
                    onClick={setCancel}
                  />
                )}
              </span>
            </div>
            <li className={currentRoute === "/" ? "active" : ""}>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={{}}>About Us</Link>
            </li>
            <li className={currentRoute === "/error" ? "active" : ""}>
              <Link href={"/error"}>Gallery</Link>
            </li>
            <li>
              <button onClick={() => window.location.replace("#contact")}>
                Book Appointment
              </button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
