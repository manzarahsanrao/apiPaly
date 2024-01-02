import React from "react";
import style from "./card.module.css";

const Card = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className={style.card}>
        <div className={style.id}>
          id: <span className={style.span}> {data.id}</span>
        </div>
        <div className={style.firstName}>
          firstName: <span className={style.span}> {data.firstName}</span>
        </div>
        <div className={style.email}>
          Email: <span className={style.span}>{data.email} </span>
        </div>
        <div className={style.role}>
          Role: <span className={style.span}>{data.role} </span>
        </div>
        <div className={style.active}>
          Active:{" "}
          <span className={data.isBlockedByAdmin ? style.blue : style.red}>
            {String(data.isBlockedByAdmin)}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
