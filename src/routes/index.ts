import { Router, Request, Response, NextFunction } from "express";
import needle from "needle";
import apicache from "apicache";
import url from "url";

const router = Router();

// Initialize cache
const cache = apicache.middleware;

router.get(
  "/",
  cache("2 minutes"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Env Variables - read at request time to ensure dotenv has loaded
      const API_BASE_URL: string = process.env.API_BASE_URL || "";
      const API_KEY_NAME: string = process.env.API_KEY_NAME || "";
      const API_KEY_VALUE: string = process.env.API_KEY_VALUE || "";

      // using the url search params
      const params = new URLSearchParams({
        [API_KEY_NAME]: API_KEY_VALUE,
        ...(url.parse(req.url, true).query as Record<string, string>),
      });

      // make the request and put the response in apiRes
      const apiRes = await needle("get", `${API_BASE_URL}?${params}`);
      const data = apiRes.body;

      // Log the request to public API
      if (process.env.NODE_ENV !== "production") {
        console.log(`REQUEST: ${API_BASE_URL}?${params}`);
      }

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
