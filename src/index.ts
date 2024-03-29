const result = sumScoutr(6);

export default function sumScoutr(value: number): string {
  const summedValue = value + 100;

  return `Scoutr Version ${summedValue}`;
}

console.log(result);
