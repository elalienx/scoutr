// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import query from "../sql/insertAssignment";
import ResultsAPI from "../types/ResultsAPI";

export default async function postAssignment(request: Request, response: Response, database: Client): Promise<void> {
  const { assignment_name, company_name, company_image_url } = request.body;
  const messageGood = "Assignment saved with id ";
  const messageBad = "Error: Cannot save data";
  let result: ResultsAPI = { data: [], message: messageBad, status: 500 };

  try {
    const { rows } = await database.query(query, [assignment_name, company_name, company_image_url]);
    const assigment = rows[0];

    result.data = assigment;
    result.message = messageGood + assigment.id;
    result.status = 200;
  } catch (error) {
    console.error(error);
  } finally {
    response.status(result.status).send(result);
  }
}
