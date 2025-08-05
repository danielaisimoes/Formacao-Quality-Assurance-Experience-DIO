import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("usuarios")
export class Usuario {
    @PrimaryColumn()
    id!: string

    @Column()
    name!: string

    @Column()
    email!: string
}