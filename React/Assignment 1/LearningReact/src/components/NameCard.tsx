import { useState } from 'react'

function NameCard({ //PROPS
  name = "Joshua", 
  favLanguage = "JavaScript", 
  yearsCoding = 10
}) {
    const [visible, setVisible] = useState(false);
    const className = visible ? "" : "hidden";

  return ( //COMPONENT
    <div>
      <h1>Name: {name}</h1>
      <h2>Favorite Language: {favLanguage}</h2>
      <button
        type="button"
        onClick={() => setVisible((visible) => !visible)}
      >See More</button>
      <h2 className={className}>Years Coding: {yearsCoding}</h2>
    </div>
  );
}

export default NameCard