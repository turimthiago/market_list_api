import { Category } from "src/domain/entities/Category";
import { CategoryRepository } from "src/domain/repositories/CategoryRepository";
import { Connection, Repository, Timestamp } from "typeorm";
import { CategoryDataSource } from "../datasources/CategoryDataSource";

export class CategoryDatabaseRepository implements CategoryRepository {
  constructor(private datasource: CategoryDataSource) {}

  async findById(id: string): Promise<Category> {
    return await this.datasource.findById(id);
  }
  async save(category: Category): Promise<Category> {
    return await this.datasource.save(category);
  }
  async findAll(): Promise<Category[]> {
    return await this.datasource.findAll();
  }
}
