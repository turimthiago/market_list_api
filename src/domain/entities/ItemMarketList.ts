import { v4 } from "uuid";
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { MarketList } from "./MarketList";
import { Category } from "./Category";

@Entity("item_market_list")
export class ItemMarketList {
  @PrimaryColumn()
  public readonly id: string;
  @Column()
  public name: string;
  @Column()
  public checked: boolean;
  @ManyToOne((type) => MarketList, (list) => list.items)
  public list: MarketList;
  @ManyToOne((type) => Category)
  @JoinColumn({ name: "category_id", referencedColumnName: "id" })
  public category: Category;
}
