import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <section className="Card">
      <a href={props.link}>
        <img
          src={props.pic}
          alt="code on computer screen"
        />
      </a>
      <h4>{props.name}</h4>
    </section>
  );
}
