import { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.get("/check", (req: Request, res: Response) => res.status(200).send());
};

export default routes;
