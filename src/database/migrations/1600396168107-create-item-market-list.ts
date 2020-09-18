import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class createItemMarketList1600396168107 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "market_list_items",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "checked",
            type: "boolean",
          },
        ],
      })
    );

    await queryRunner.addColumn(
      "market_list_items",
      new TableColumn({
        name: "category_id",
        type: "varchar",
      })
    );

    await queryRunner.createForeignKey(
      "market_list_items",
      new TableForeignKey({
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
      })
    );

    await queryRunner.addColumn(
      "market_list_items",
      new TableColumn({
        name: "market_list_id",
        type: "varchar",
      })
    );

    await queryRunner.createForeignKey(
      "market_list_items",
      new TableForeignKey({
        columnNames: ["market_list_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "market_lists",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //const table = await queryRunner.getTable("market_list_items");
    // const fk = table.foreignKeys.find(fk => fk.columnNames.indexOf("category_id") !== -1);

    await queryRunner.dropTable("market_list_items");
  }
}
