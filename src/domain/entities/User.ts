import { v4 } from "uuid";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

import bcrypt from "bcryptjs";
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

  @BeforeInsert()
  @BeforeUpdate()
  private hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
