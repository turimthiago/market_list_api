import { Category } from "src/domain/entities/Category";
import { User } from "src/domain/entities/User";
import { CategoryDTO } from "src/external/models/CategoryDTO";

export interface CategoryDataSource {
  findById(id: string): Promise<Category>;
  save(category: Category): Promise<Category>;
  findAll(): Promise<Array<Category>>;
}
