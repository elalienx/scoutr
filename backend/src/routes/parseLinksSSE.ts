// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import etlProcess from "../extract-profile-sse/etlProcess";
import ResultsAPI from "../types/ResultsAPI";

export default async function parseLinksSSE(request: Request, response: Response, database: Client) {
  console.log("📡 Connected");

  // Headers
  response.setHeader("Content-Type", "text/event-stream");
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Connection", "keep-alive");

  const assignment_id = Number(request.params.assignment_id);
  const links: string[] = request.body.links;
  let result: ResultsAPI = { data: [], message: "Error: Cannot parse links", status: 500 };

  try {
    for (const link of links) {
      const { candidate, report } = await etlProcess(link, assignment_id, database);

      result = { data: { candidate, report }, message: "Ok", status: 200 };
      response.status(result.status).send(result);
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log("🏁 Completed transfer");
    response.end();
  }
}
