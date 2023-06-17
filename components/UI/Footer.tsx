import Link from "next/link";

export default function Footer() {
  return (
    <div style={{ textAlign: "center", fontWeight: "bold", padding: "0.5rem" }}>
      Developed by{" "}
      <Link
        href="https://emmychukwu.netlify.app"
        target="_blank"
        style={{ textDecoration: "underline", fontWeight: "bolder" }}
      >
        Chukwuemeka
      </Link>
    </div>
  );
}
