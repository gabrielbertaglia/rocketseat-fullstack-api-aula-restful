import type { Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(1, { message: "Name must be 1 or more characters" }),
  price: z
    .number({ required_error: "Price is required" })
    .positive({ message: "Price must be positive" }),
});

export class ProductsController {
  index(request: Request, response: Response) {
    console.log(request, response);
    const { page, limit } = request.query;
    response.send(`Page ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const { name, price } = bodySchema.parse(request.body);

    // if(!name) {
    //   throw new AppError("Nome do produto é obrigatório")
    // }

    // throw new Error("Erro ao tentar criar um produto!")
    // throw new AppError("Erro ao tentar criar um produto!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
