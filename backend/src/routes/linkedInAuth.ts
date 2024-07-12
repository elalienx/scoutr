// Node modules
import type { Request, Response } from "express";
import getAuth from "../auth/getAuth";

export default async function linkedInAuth(request: Request, response: Response): Promise<void> {
  const { email, password } = request.params;
  const messageBad = "Error: Can't generate auth";
  const statusGood = 200;
  console.log("getLinkedInAuth email and password", email, password);

  try {
    await getAuth(email, password);

    response.status(statusGood).send("All good");
  } catch (error) {
    console.error(error);
    response.status(statusGood).send(messageBad);
  }
}
