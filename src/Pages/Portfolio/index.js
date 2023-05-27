import React from "react";
import "./style.css";
import Card from "../../components/Card";
import cosmicDaily from '../../assets/cosmic.JPG'
import meso from '../../assets/meso.JPG'
import cons from '../../assets/cons.jpg'
import p1 from '../../assets/project1-placeholder.jpg'
import p2 from '../../assets/project2 placeholder.jpg'


export default function Home() {
  return (
    <main className="Portfolio">
      <h2>portfolio</h2>
      <section className = 'projects'>
        <Card
          name="Cosmic Daily"
          pic={cosmicDaily}
          link="https://github.com/Ian-Danas"
          deployed = "https://ian-danas.github.io/Cosmic-Daily/"
        />
        <Card
          name="MesoAmerican Musuem"
          pic={meso}
          link="https://github.com/fevercatdream/mesoamerican-museum"
          deployed = 'https://mysterious-stream-999999.herokuapp.com/'
        />
        <Card
          name="Finn Hub"
          pic={cons}
          link="https://github.com/Ian-Danas"
          deployed="https://github.com/Ian-Danas"
        />
        <Card
          name="Tech Blog"
          pic={p1}
          link="https://github.com/Ian-Danas"
          deployed = 'https://iandanas-techblog.herokuapp.com/'
        />
        <Card
          name="Social Network"
          pic={p2}
          link="https://github.com/Ian-Danas/social-network-api"
          deployed = "https://github.com/Ian-Danas/social-network-api"
        />
        <Card
          name="Employee Tracker"
          pic={p1}
          link="https://github.com/Ian-Danas/Employee-Tracker"
          deployed = "https://github.com/Ian-Danas/Employee-Tracker"
        />
      </section>
    </main>
  );
}
