import React, { useEffect, useState } from "react";
import SlidShowStyle from "./SlidShow.module.css";
import { allPicsArray } from "./imgAllPicsArray";
import main_main from "../img/main_main.png";

function SlidShow() {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    let x = setInterval(() => {
      if (temp === 4) {
        setTemp((pre) => (pre = 0));
      } else if (temp < 4) {
        setTemp((pre) => pre + 1);
      }
    }, 2000);
    return () => clearInterval(x);
  }, [temp]);

  return (
    <div className={SlidShowStyle.main}>
      <div className={SlidShowStyle.mainimg}>
        <div className={SlidShowStyle.phone}>
          <img src={main_main} alt="main_main" />
        </div>
        <div className={SlidShowStyle.opac}>
          <img
            className={SlidShowStyle.images}
            src={allPicsArray[temp]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SlidShow;
