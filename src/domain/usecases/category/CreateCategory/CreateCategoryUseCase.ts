import { Category } from "../../../entities/Category";
import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { CategoryDTO } from "../../../../external/models/CategoryDTO";

export class CreateCategoryUseCase {
  constructor(private repository: CategoryRepository) {}

  async execute(data: CategoryDTO): Promise<Category> {
    const category = new Category(data);
    return await this.repository.save(category);
  }
}
