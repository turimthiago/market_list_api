import { getConnection } from "typeorm";
import { Category } from "../../entities/Category";
import { CategoryDatabaseRepository } from "../../../infra/repositories/CategoryDatabaseRepository";
import { CreateCategoryUseCase } from "./CreateCategory/CreateCategoryUseCase";
import { CategoryDatasourceImpl } from "src/external/datasources/CategoryDatasourceImpl";

const datasource = new CategoryDatasourceImpl(getConnection().getRepository(Category));
const repostitory = new CategoryDatabaseRepository(datasource);

const converter = new CategoryConverter();

const createCategoryUseCase = new CreateCategoryUseCase(repostitory);
const categoryController = new CategoryController(
  createCategoryUseCase,
  converter 
);

export { categoryController, createCategoryUseCase };
