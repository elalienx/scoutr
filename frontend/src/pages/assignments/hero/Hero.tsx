// Project files
import ImageHero from "assets/assignments-hero.avif";
import "./hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="content">
        <h1>
          Meet
          <br />
          Scoutr
        </h1>
        <span className="subtitle">Your LinkedIn Headhunter Companion</span>
        <p>
          Scoutr revolutionizes your LinkedIn scouting experience, providing concise summaries of
          professionals presented in a easy table format.
        </p>
      </div>
      <div className="media">
        {/* fetchPriority so the hero image gets downloaded before the company logos in the assigment cards */}
        <img
          className="image"
          src={ImageHero}
          alt="A woman and a man sitting on a table looking at a laptop"
          // @ts-ignore
          // fetchpriority in lowercase is the correct way to write this atribute (https://github.com/facebook/react/issues/25682)
          fetchpriority="high"
        />
      </div>
    </header>
  );
}
