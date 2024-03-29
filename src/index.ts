// Properties
const value: number = 4;

// Methods
export default function sumScoutr(value: number): string {
  // safeguard
  if (value <= 0) return "Such a looser!";

  const summedValue = value + 100;

  return `Scoutr Version ${summedValue}`;
}

console.log(sumScoutr(value));
