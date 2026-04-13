import { Router } from "express";
import {
  getCoffees,
  getCoffee,
  postCoffee,
  patchCoffee,
  removeCoffee,
} from "../controllers/coffee-controller";

const router = Router();

router.get("/", getCoffees);
router.get("/:id", getCoffee);
router.post("/", postCoffee);
router.patch("/:id", patchCoffee);
router.delete("/:id", removeCoffee);

export default router;