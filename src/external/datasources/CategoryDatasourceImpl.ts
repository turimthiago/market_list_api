import { CategoryDataSource } from "src/infra/datasources/CategoryDataSource";
import { Category } from "src/domain/entities/Category";
import { Connection, Repository } from "typeorm";

export class CategoryDatasourceImpl implements CategoryDataSource {
  private repository: Repository<Category>;

  constructor(private connection: Connection) {
    this.repository = this.connection.getRepository(Category);
  }

  async findById(id: string): Promise<Category> {
    return await this.repository.findOne(id);
  }
  async save(category: Category): Promise<Category> {
    return await this.repository.save(category);
  }
  async findAll(): Promise<Category[]> {
    return await this.repository.find();
  }
}
