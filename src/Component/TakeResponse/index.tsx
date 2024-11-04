"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const TakeResponse = ({
  setPreserveData,
}: {
  setPreserveData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [page, setPage] = useState(true);
  const [activeQuantity, setActiveQuantity] = useState(6);
  const [activePage, setActivPage] = useState(140);
  const [activeSize, setActivSize] = useState("Long Notebook (29.7*21 cm)");
  const [activeBinding, setActivBinding] = useState("Spiral");
  const [activeRuling, setActivRuling] = useState("Ruled");
  const inputData1 = [{ name: "Pages", value1: "140", value2: "172" }];
  const inputData2 = [
    {
      name: "Size",
      value1: "Long Notebook (29.7*21 cm)",
      value2: "Short Notebook (24*18 cm)",
    },
  ];
  const inputData3 = [
    { name: "Binding", value1: "Spiral", value2: "Center Stapled" },
  ];
  const inputData4 = [{ name: "Ruling", value1: "Ruled", value2: "Unruled" }];
  const active = true;

  const handleQuantityChange = (quantity: any) => {
    setActiveQuantity(quantity);
  };
  const handlePage = (value: any) => {
    setActivPage(value);
  };
  const handleSize = (value: any) => {
    setActivSize(value);
  };
  const handleBinding = (value: any) => {
    setActivBinding(value);
  };
  const handleRuling = (value: any) => {
    setActivRuling(value);
  };

  return (
    <div>
      <div className={styles.width_resize}>
        <div className={styles.width_resize_left}>
          <img
            src={
              "https://cdn11.bigcommerce.com/s-g34rj6mm5p/images/stencil/1280x1280/products/3783/7607/49793P0001__82366.1680888330.jpg?c=1"
            }
            alt="notbook"
          />
        </div>
        <div className={styles.width_resize_right}>
          <div className={styles.item_parent}>
            {inputData1.map((item, index) => {
              return (
                <>
                  <p key={index} className={styles.specs_name}>
                    {item.name}
                  </p>
                  <div className={`${styles.animation}`}>
                    <div className={styles.switch_animation}>
                      <div
                        onClick={() => handlePage(140)}
                        className={`${styles.text} ${
                          activePage === Number(item.value1)
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value1}
                      </div>
                      <div
                        onClick={() => handlePage(172)}
                        className={`${styles.text} ${
                          activePage === Number(item.value2)
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value2}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.item_parent}>
            {inputData2.map((item, index) => {
              return (
                <>
                  <p key={index} className={styles.specs_name}>
                    {item.name}
                  </p>
                  <div className={`${styles.animation}`}>
                    <div className={styles.switch_animation}>
                      <div
                        onClick={() => handleSize(item.value1)}
                        className={`${styles.text} ${
                          activeSize === item.value1
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value1}
                      </div>
                      <div
                        onClick={() => handleSize(item.value2)}
                        className={`${styles.text} ${
                          activeSize === item.value2
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value2}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.item_parent}>
            {inputData3.map((item, index) => {
              return (
                <>
                  <p key={index} className={styles.specs_name}>
                    {item.name}
                  </p>
                  <div className={`${styles.animation}`}>
                    <div className={styles.switch_animation}>
                      <div
                        onClick={() => handleBinding(item.value1)}
                        className={`${styles.text} ${
                          activeBinding === item.value1
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value1}
                      </div>
                      <div
                        onClick={() => handleBinding(item.value2)}
                        className={`${styles.text} ${
                          activeBinding === item.value2
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value2}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.item_parent}>
            {inputData4.map((item, index) => {
              return (
                <>
                  <p key={index} className={styles.specs_name}>
                    {item.name}
                  </p>
                  <div className={`${styles.animation}`}>
                    <div className={styles.switch_animation}>
                      <div
                        onClick={() => handleRuling(item.value1)}
                        className={`${styles.text} ${
                          activeRuling === item.value1
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value1}
                      </div>
                      <div
                        onClick={() => handleRuling(item.value2)}
                        className={`${styles.text} ${
                          activeRuling === item.value2
                            ? styles.active
                            : styles.inactive
                        }`}
                      >
                        {item.value2}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.quantity_parent}>
            <p className={styles.text_count}>Quantity</p>
            <div
              onClick={() => handleQuantityChange(6)}
              className={`${styles.quantity_rounded} ${
                activeQuantity === 6 ? styles.active : styles.inactive
              }`}
            >
              6
            </div>
            <div
              onClick={() => handleQuantityChange(12)}
              className={`${styles.quantity_rounded} ${
                activeQuantity === 12 ? styles.active : styles.inactive
              }`}
            >
              12
            </div>
            <div
              onClick={() => handleQuantityChange(18)}
              className={`${styles.quantity_rounded} ${
                activeQuantity === 18 ? styles.active : styles.inactive
              }`}
            >
              18
            </div>
          </div>
          <button
            onClick={() =>
              setPreserveData({
                page: activePage,
                size:activeSize,
                binding: activeBinding,
                ruling: activeRuling,
                quantity: activeQuantity,
              })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mt-6"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeResponse;
