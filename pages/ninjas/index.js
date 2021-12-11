import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
import React from "react";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { ninjas: data } };
};
function index({ ninjas }) {
  return (
    <div>
      <h1>
        Straight from the Mountains of Iga, these ninjas will blast you with
        their shurkken coding
      </h1>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default index;
