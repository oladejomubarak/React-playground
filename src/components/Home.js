//import { render } from "@testing-library/react";
import React from "react";
import ReactDOM  from "react-dom";
import "../pages/home/styles/style.css";

function Home(){
  const name = "Mubarak";
  const num = Math.floor(Math.random() * 150);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    ReactDOM.render(
      <div>
      <h1 className="heading" contentEditable = "true" spellCheck= "false">Hello {name}!</h1>
      <p>Your lucky number is {num}</p>
      <p>Copyright {year}</p>
    </div>,
    document.getElementById("root")

    )
   

  )
 
}

export default Home