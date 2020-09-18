import { v4 } from "uuid";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  public readonly id: string;
  @Column()
  public name: string;
  @Column()
  public description: string;

  constructor(props: Omit<Category, "id">, id?: string) {
    Object.assign(this, props);

    if (!this.id) {
      this.id = v4();
    }
  }
}
