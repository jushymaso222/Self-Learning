import { useState } from 'react'
import "./NameCard.css"
import avatar from '../assets/avatar.png';
import type Developer from '../types/types';

function NameCard({ //PROPS
  name = "Unknown", 
  favLanguage = "Unknown", 
  yearsCoding = 0,
  bio = "None"
}: Developer) {
    const [visible, setVisible] = useState(false);

  return ( //COMPONENT
    <div className="card">
      <img src={avatar} alt="Avatar" className="cardIcon"></img>
      <h1 className="cardName">{name}</h1>
      <h2 className="cardText">Favorite Language: {favLanguage}</h2>
      <h2 className="cardText">Years Coding: {yearsCoding}</h2>
      <div className="center">
        <button
        type="button"
        onClick={() => setVisible((visible) => !visible)}
        className="cardButton"
      >{visible ? "See Less" : "See More"}</button>
      </div>
      <p className={visible ? "cardBio" : "hidden"}>{bio}</p>
    </div>
  );
}

export default NameCard