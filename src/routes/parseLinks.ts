// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import etlProcess from "../extract-profile/etlProcess";
import packageResults from "../extract-profile/load/packageResults";
import ResultsAPI from "../types/ResultsAPI";

export default async function parseLinks(request: Request, response: Response, database: Client) {
  const assignment_id = Number(request.params.assignment_id);
  const links: string[] = request.body.links;
  const messageBad = "Error: Cannot parse links";
  let result: ResultsAPI = { data: [], message: messageBad, status: 500 };

  try {
    const etl = await Promise.all(links.map((link) => etlProcess(link, assignment_id, database)));
    const candidates = etl.map((item) => item.candidate);
    const reports = etl.map((item) => item.report);

    result = packageResults(candidates, reports);
  } catch (error) {
    console.error(error);
  } finally {
    response.status(result.status).send(result);
  }
}
