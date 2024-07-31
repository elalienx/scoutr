// Project files
import ImageMobile from "assets/assignments-hero-mobile.avif";
import ImageDesktop from "assets/assignments-hero.avif";
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
          Scoutr revolutionizes your LinkedIn scouting experience, providing concise summaries of
          professionals presented in a easy table format.
        </p>
      </div>
      <div className="media">
        <picture>
          <source srcSet={ImageDesktop} width="280" height="240" media="(min-width: 700px)" />
          <source srcSet={ImageMobile} width="154" height="132" />
          {/* shared atrributes like className, alt, and fetchpriority, and fallback in case browser does not support AVIF */}
          <img
            alt="A woman and a man sitting on a table looking at a laptop"
            className="image"
            src={ImageHero}
            width="371"
            height="318"
            // @ts-ignore
            // fetchpriority in lowercase is the correct way to write this atribute (https://github.com/facebook/react/issues/25682)
            fetchpriority="high"
          />
        </picture>
      </div>
    </header>
  );
}
