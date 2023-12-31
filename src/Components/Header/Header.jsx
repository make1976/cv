import React from 'react'
import { data } from "../../Data/data";
import "./Header.css";

export const Header = () => {
  return (
    <header className="Header">
      <img src={data.image} alt="image" className="mary_img" />
      <div className="header-elements">
        <p href="">{data.name}</p>
        <p href="">{data.profession}</p>
        <p href="">{data.phone}</p>
        <p href="">{data.email}</p>
        <p href="">{data.address}</p>
      </div>
    </header>
  )
};

