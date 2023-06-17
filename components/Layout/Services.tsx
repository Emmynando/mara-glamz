import Image from "next/image";
import sub from "@components/components/images/subscription.png";
import headtie from "@components/components/images/scarf.png";
import rings from "@components/components/images/rings.png";
import event from "@components/components/images/event.png";
import styles from "./Services.module.css";

const items = [
  {
    id: 1,
    title: "Bridal",
    paragraph:
      "Make up services for bridal showers and bridal event, covering brides, members of the bridal trains, families and friends",
    img: rings,
  },
  {
    id: 2,
    title: "Special Events",
    paragraph:
      "Make up services for special ocassions such as birthdays, parties, meetings and lots more",
    img: event,
  },
  {
    id: 3,
    title: "Head-Tie",
    paragraph: "We also provide styled headties knot in  variations",
    img: headtie,
  },
  {
    id: 4,
    title: "Subcription",
    paragraph:
      "Make-up that runs for a durtaion of time,be it weekly, bi-weekly or bi-monthly",
    img: sub,
  },
];

export default function Services() {
  return (
    <div className={styles["service-container"]}>
      <div className={styles["service-text"]}>
        <h4>Services for Every Events</h4>
        <p>Be the Center of Attraction</p>
      </div>
      <div className={styles["event-container"]}>
        {items.map((item) => (
          <div className={styles["event-card"]} key={item.id}>
            <Image src={item.img} width={20} height={20} alt={item.title} />
            <h5> {item.title}</h5>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
