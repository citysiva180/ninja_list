import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFoundPage() {
  const router = useRouter();
  useEffect(() => {
    // console.log("something... ");
    setTimeout(() => {
      // router.go()
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>You got lost</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go Back to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
