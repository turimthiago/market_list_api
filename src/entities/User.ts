import { v4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  public readonly id: string;
  @Column()
  public name: string;
  @Column()
  public email: string;
  @Column()
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!this.id) {
      this.id = v4();
    }
  }
}
