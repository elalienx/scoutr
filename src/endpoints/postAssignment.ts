// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

export default async function postAssignment(request: Request, response: Response, database: Client) {
  const { assignment_name, company_name, company_image_url } = request.body;
  const values = [assignment_name, company_name, company_image_url];
  const query = `INSERT INTO assignments (
    assignment_name, 
    company_name, 
    company_image_url
  ) 
  VALUES ($1, $2, $3)`;
  const message = "Postgres added new assignment";

  try {
    await database.query(query, values);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
