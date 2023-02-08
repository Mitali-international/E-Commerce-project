import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

import { useDispatch, useSelector } from "react-redux";

import { toggle } from "@/Store/slices/globalSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleMenuButton = (event) => {
    event.preventDefault();
    dispatch(toggle());
  };

  return (
    <div
      className={`${
        isSidebarOpen
          ? `${styles.sidebar} ${styles.show_sidebar}`
          : `${styles.sidebar}`
      }`}
    >
      <nav className="px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <a>Categories</a>
          </li>
          <li
            className="text-primary-red cursor-pointer"
            onClick={handleMenuButton}
          >
            <a>
              <FaTimes />
            </a>
          </li>
        </ul>
      </nav>
      <hr className="text-secondary font-bold" />
      <div className="px-6 text-xl">
        <ul className="grid gap-4 pt-2">
          <li className="py-2 space-x-2 flex items-center cursor-pointer">
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
            <a>Honey</a>
          </li>
          <li className="py-2 space-x-2 flex items-center cursor-pointer">
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
            <a>Male enhancement</a>
          </li>
          <li className="py-2 space-x-2 flex items-center cursor-pointer">
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
            <a>Female enhancement</a>
          </li>
          <li className="py-2 space-x-2 flex items-center cursor-pointer">
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
            <a>Rolling Paper</a>
          </li>
          <li className="py-2 space-x-2 flex items-center cursor-pointer">
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
            <a>Condoms</a>
          </li>
          <li className="py-2 space-x-2 flex items-center cursor-pointer">
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
            <a>Pills</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
