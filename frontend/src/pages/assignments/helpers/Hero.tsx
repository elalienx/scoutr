// Project files
import ImageHero from "assets/assignments-hero.png";
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
          Scoutr revolutionizes your LinkedIn scouting experience, providing
          concise summaries of professionals presented in a easy table format.
        </p>
      </div>
      <div className="media">
        <img
          className="image"
          src={ImageHero}
          alt="A woman and a man sitting on a table looking at a laptop"
        />
      </div>
    </header>
  );
}
