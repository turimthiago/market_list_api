import { v4 } from "uuid";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { ItemMarketList } from "./ItemMarketList";

@Entity("market_lists")
export class MarketList {
  @PrimaryColumn()
  public readonly id: string;
  @Column()
  public name: string;
  @Column({type: "time with time zone"}) 
  public dhRegistro : Date;
  @OneToMany((type) => ItemMarketList, (item) => item.list)
  public items: ItemMarketList[];

  constructor(props: Omit<MarketList, "id">, id?: string) {
    Object.assign(this, props);

    if (!this.id) {
      this.id = v4();
    }
  }
}
