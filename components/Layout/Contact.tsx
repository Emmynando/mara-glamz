import { useState, useEffect } from "react";

import Image from "next/image";
import whatsapp from "@components/components/images/whatsapp.svg";
import phone from "@components/components/images/phone.svg";
import copy from "@components/components/images/copy.svg";

import styles from "./Contact.module.css";

export default function Appointment() {
  const [copies, setCopies] = useState(false);
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopies(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [copies]);

  const copylink = (e: any) => {
    navigator.clipboard.writeText("+2349048598804");
    setCopies(true);
  };

  async function submitHandler(e: any) {
    e.preventDefault();
    const data = { mail, title, message };
    let mailCheck = "mara glamz";
    // const pattern = /\s\i/;

    let messageRegEx = new RegExp(mailCheck, "i");

    if (!messageRegEx.test(message)) {
      alert("Message should end or atleast contain 'mara glamz'");
      return;
    }

    if (mail && title && message) {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      alert("Mail Sent");
      setMail("");
      setTitle("");
      setMessage("");
      return;
    }
    return alert("fill in all fields");
  }

  return (
    <div className={styles["contact-container"]} id="contact">
      <div className={styles["schedule-container"]}>
        <div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              id="title"
              placeholder="Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <p>Ensure you end your MESSAGE with MARA GLAMZ</p>
            <button> SEND</button>
          </form>
        </div>
        <div className={styles["appointment"]}>
          <h3> Book Appointment</h3>
          <p>
            You can also reach out to us on our social media handles for prompt
            response
          </p>
          <div className={styles["appointment-links"]}>
            <Image src={whatsapp} width={20} height={20} alt="whatsapp" />
            <p> +2349048598804</p>
            <div>
              <button onClick={copylink}>
                <Image
                  src={copy}
                  width={20}
                  height={20}
                  alt="telephone"
                  style={{ cursor: "pointer" }}
                />
              </button>
              <p> {copies && "copied"}</p>
            </div>
          </div>
          <div className={styles["appointment-links"]}>
            <Image src={phone} width={20} height={20} alt="telephone" />
            <p> +2349048598804</p>
            <div>
              <button onClick={copylink}>
                <Image
                  src={copy}
                  width={20}
                  height={20}
                  alt="telephone"
                  style={{ cursor: "pointer" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
