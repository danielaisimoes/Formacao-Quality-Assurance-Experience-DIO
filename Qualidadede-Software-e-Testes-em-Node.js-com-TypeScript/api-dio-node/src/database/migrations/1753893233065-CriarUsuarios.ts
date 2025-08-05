import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarUsuarios1753893233065 implements MigrationInterface {
    name = 'CriarUsuarios1753893233065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'string',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }
}
