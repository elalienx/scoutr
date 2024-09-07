// Node modules
import { SyntheticEvent } from "react";

// Project files
import CandidatePlaceholder from "assets/placeholder-candidate.png";
import CandidateFallback from "assets/broken-linked-candidate.png";
import CompanyPlaceholder from "assets/placeholder-company.png";
import CompanyFallback from "assets/broken-linked-company.png";
import "./image-thumbnail.css";

interface Props {
  /** The source of the image. */
  src: string;

  /** Optional CSS classes for styling. */
  className?: string;

  /** The description for accebility readers. */
  alt?: string;

  /** The type of placeholder to use. Defaults to company as its the most used. */
  profile?: "candidate" | "company";
}

/** Provides an image with a placeholder. */
export default function ImageThumbnail(item: Props) {
  const { src, className, alt, profile = "company" } = item;

  // Properties
  const Placeholder = profile === "company" ? CompanyPlaceholder : CandidatePlaceholder;
  const Fallback = profile === "company" ? CompanyFallback : CandidateFallback;
  const Source = src || Placeholder;

  // Methods
  function onError(event: SyntheticEvent<HTMLImageElement, Event>) {
    event.currentTarget.src = Fallback;
  }

  return (
    <img
      alt={alt}
      className={`image-thumbnail ${className}`}
      loading="lazy"
      src={Source}
      onError={(event) => onError(event)}
      // @ts-ignore
      // fetchpriority in lowercase is the correct way to write this atribute (https://github.com/facebook/react/issues/25682)
      fetchpriority="low"
    />
  );
}
