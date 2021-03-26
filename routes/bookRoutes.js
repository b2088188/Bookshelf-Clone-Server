import { Router } from "express";
const router = Router();
import { getBooks } from "../controllers/bookController.js";

router.route("/").get(getBooks);

export default router;
