import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProduct1617669654015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'image_url',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'description',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
