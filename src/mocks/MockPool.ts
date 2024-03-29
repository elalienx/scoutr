// Project files
import { Pool } from "pg";
import DatabaseCredentials from "../types/DatabaseCredentials";

export default class MockPool implements Pool {
  public totalCount = 0;
  public idleCount = 0;
  public waitingCount = 0;

  private credentials: DatabaseCredentials;

  constructor(credentials: DatabaseCredentials) {
    this.credentials = credentials;
  }

  public connect(): <void> {
    console.log(`Connecting with username: ${this.credentials.user}`);
  }
}
