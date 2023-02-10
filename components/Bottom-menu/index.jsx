import React from "react";

import styles from "./style.module.css";

const BottomMenu = () => {
  return (
    <nav className={`${styles.bottom_container} bg-secondary padding_inside`}>
      <ul className="h-full w-full flex justify-between items-center text-primary text-lg">
        <li className="">
          <a href="/" className="">
            <span className={`${styles.bottom_home}`}></span>
            <span>Home</span>
          </a>
        </li>
        <li className="">
          <a href="/">
            <span className={`${styles.bottom_about}`}></span>
            <span>About</span>
          </a>
        </li>
        <li className="">
          <a href="/">
            <span className={`${styles.bottom_store}`}></span>
            <span>Store</span>
          </a>
        </li>
        <li className="">
          <a href="/">
            <span className={`${styles.bottom_account}`}></span>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;
