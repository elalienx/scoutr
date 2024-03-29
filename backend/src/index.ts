const value: number = 5;

export default function sumScoutr(value: number): string {
  const summedValue = value + 100;

  return `Scoutr Version ${summedValue}`;
}

console.log(sumScoutr(value));
