import { Request, Response, json } from "express";
import { CategoryConverter } from "../converters/CategoryConverter";
import { CreateCategoryUseCase } from "../../domain/usecases/category/CreateCategory/CreateCategoryUseCase";

export class CategoryController {
  constructor(
    private createCategoryUseCase: CreateCategoryUseCase,
    private converter: CategoryConverter
  ) {}

  async post(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    try {
      const category = await this.createCategoryUseCase.execute({
        name,
        description,
      });
      return response.status(201).json(this.converter.fromEntity(category));
    } catch (e) {
      return response.status(400).json({ message: "Erro inesperado." });
    }
  }
}
