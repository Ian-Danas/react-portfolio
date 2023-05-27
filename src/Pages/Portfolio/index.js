import React from "react";
import "./style.css";
import Card from "../../components/Card";

export default function Home() {
  return (
    <main className="Portfolio">
      <h2>portfolio</h2>
      <section className = 'projects'>
        <Card
          name="Cosmic Daily"
          pic="http://placekitten.com/200/300"
          link="https://github.com/Ian-Danas"
        />
        <Card
          name="MesoAmerican Musuem"
          pic="http://placekitten.com/200/300"
          link="https://github.com/Ian-Danas"
        />
        <Card
          name="Finn Hub"
          pic="http://placekitten.com/200/300"
          link="https://github.com/Ian-Danas"
        />
        <Card
          name="Tech Blog"
          pic="http://placekitten.com/200/300"
          link="https://github.com/Ian-Danas"
        />
        <Card
          name="Social Network"
          pic="http://placekitten.com/200/300"
          link="https://github.com/Ian-Danas"
        />
        <Card
          name="Employee Tracker"
          pic="http://placekitten.com/200/300"
          link="https://github.com/Ian-Danas"
        />
      </section>
    </main>
  );
}
