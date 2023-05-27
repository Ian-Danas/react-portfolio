import React from "react";
import "./style.css";




export default function Card(props) {
  return (
    <section className="Card">
      <div className="card ">
        <img className="card-img-top" src={props.pic} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <a target = '_blank' href={props.link} className="btn btn-primary"> Github</a>
          <a target = '_blank' href={props.deployed} className="btn btn-primary">Deployed</a>
        </div>
      </div>
    </section>
  );
}
