export default interface DatabaseCredentials {
  /** The IP address for the database. Is typically localhost when using Docker, as Docker manages the networking internally. */
  host: string;

  /** The port number to connect to the host. */
  port: number;

  /** The name of the database. */
  database: string;

  /** The admin credential. */
  user: string;

  /** The admin password. */
  password: string;
}
