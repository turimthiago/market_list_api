import { Convert } from "src/commons/Converter";
import { Category } from "src/domain/entities/Category";
import { CategoryDTO } from "../models/CategoryDTO";

export class CategoryConverter implements Convert<Category, CategoryDTO> {
  fromEntity(entity: Category): CategoryDTO {
    const { name, description } = entity;
    return { name, description };
  }
  fromList(entityList: Category[]): CategoryDTO[] {
    return entityList.map((i) => this.fromEntity(i));
  }
}
