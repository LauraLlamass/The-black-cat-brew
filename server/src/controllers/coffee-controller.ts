import { Request, Response } from "express";
import {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
} from "../services/coffee-service";

export function getCoffees(_req: Request, res: Response) {
  try {
    const data = getAllCoffees();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

export function getCoffee(req: Request, res: Response) {
  try {
    const coffee = getCoffeeById(req.params.id);

    if (!coffee) {
      res.status(404).json({ message: "Coffee not found" });
      return;
    }

    res.status(200).json(coffee);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

export function postCoffee(req: Request, res: Response) {
  try {
    const { name, origin, intensity, acidity, notes, description, image, amazonUrl } =
      req.body;

    if (
      !name ||
      !origin ||
      !intensity ||
      !acidity ||
      !notes ||
      !description ||
      !image ||
      !amazonUrl
    ) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const newCoffee = createCoffee({
      name,
      origin,
      intensity,
      acidity,
      notes,
      description,
      image,
      amazonUrl,
    });

    res.status(201).json(newCoffee);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

export function patchCoffee(req: Request, res: Response) {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ message: "Request body is empty" });
      return;
    }

    const updatedCoffee = updateCoffee(req.params.id, req.body);

    if (!updatedCoffee) {
      res.status(404).json({ message: "Coffee not found" });
      return;
    }

    res.status(200).json(updatedCoffee);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}

export function removeCoffee(req: Request, res: Response) {
  try {
    const deletedCoffee = deleteCoffee(req.params.id);

    if (!deletedCoffee) {
      res.status(404).json({ message: "Coffee not found" });
      return;
    }

    res.status(200).json({
      message: "Coffee deleted successfully",
      coffee: deletedCoffee,
    });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
}