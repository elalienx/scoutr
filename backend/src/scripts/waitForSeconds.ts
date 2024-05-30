export default async function waitForSeconds(seconds: number) {
  const secondToMiliseconds = 1000;

  await new Promise((resolve) => setTimeout(resolve, seconds * secondToMiliseconds));
}
