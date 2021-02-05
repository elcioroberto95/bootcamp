import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUsers1612558276094 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name:'users',
        columns:[
          {
            name:'id',
            type:'varchar',
            isPrimary:true,
            generationStrategy:'uuid',
            default:'uuid_generate_v4()',
          },
          {
            name:'name',
            type:'varchar',

          },
          {
            name:'email',
            type:'varchar',
            isUnique:true,
          },
          {
            name:'date',
            type:'timestamp with time zone',


          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
