// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

export default async function postCandidate(request: Request, response: Response, database: Client) {
  const candidate = request.body;
  const values = [
    candidate.assignment_id,
    candidate.linked_in_url,
    candidate.candidate_name,
    candidate.candidate_job_title,
    candidate.candidate_image_url,
    candidate.company_name,
    candidate.company_duration_in_months,
    candidate.company_image_url,
    candidate.notes,
    candidate.relevance,
    candidate.contact_status,
    candidate.contact_date,
  ];
  const query = `INSERT INTO candidates (
        assignment_id,
        linked_in_url,
        candidate_name,
        candidate_job_title,
        candidate_image_url,
        company_name,
        company_duration_in_months,
        company_image_url,
        notes,
        relevance,
        contact_status,
        contact_date
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
  const message = "Postgres added new debug candidate";

  try {
    await database.query(query, values);
    response.status(200).send({ message });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
