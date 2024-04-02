// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import etlProcess from "../extract-transform/etlProcess";
import packageResults from "../extract-transform/package-results/packageResults";

export default async function parseLinks(request: Request, response: Response, database: Client) {
  const assignment_id = Number(request.params.assignment_id);
  const links: string[] = request.body.links;

  try {
    const etl = await Promise.all(links.map((link) => etlProcess(link, assignment_id, database)));
    const candidates = etl.map((item) => item.candidate);
    const reports = etl.map((item) => item.report);
    const results = packageResults(candidates, reports);

    response.status(200).send(results);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
