import { IRequestOptions } from "../types/api";

export class ApiServiceBase {
  API_URL = "http://localhost:5109" as const;

  constructor() {}

  protected async get<T>(path: string, { headers }: IRequestOptions = {}) {
    try {
      const response = await fetch(`${this.API_URL}/${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return (await response.json()) as T;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  // TODO: generic
  protected async post(
    url: string,
    body: BodyInit | null | undefined,
    { headers }: IRequestOptions = {},
  ) {
    try {
      const response = await fetch(`${this.API_URL}/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body,
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      return await response.json();
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }
}
