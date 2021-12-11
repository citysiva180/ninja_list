import Head from "next/head";
import React from "react";

function about() {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninja"></meta>
      </Head>
      <div>
        <h1>This would be the About page</h1>
        <p>some dope article</p>
      </div>
    </>
  );
}

export default about;
