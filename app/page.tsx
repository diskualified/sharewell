import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <nav className="flex gap-4">
        <Link href={"/green"}>Go to Green</Link>
        <Link href={"/red"}>Go to Red</Link>
        <Link href={"/blue"}>Go to Blue</Link>
      </nav>
    </>
  );
};

export default HomePage;
