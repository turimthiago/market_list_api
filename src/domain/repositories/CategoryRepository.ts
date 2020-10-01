import { Category } from "../entities/Category";

export interface CategoryRepository{
    findById(id: string): Promise<Category>;
    save(category: Category): Promise<Category>;
    findAll(): Promise<Array<Category>>;
}