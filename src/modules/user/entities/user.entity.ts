import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column({
        type: 'varchar',
        name: 'name_user',
        nullable: false,
        comment: 'Nombre del usuario',
    })
    name_user: string;

    @Column({
        type: 'varchar',
        name: 'lastname_user',
        nullable: false,
        comment: 'Apellido del usuario',
    })
    lastname_user: string;

    @Column({
        type: 'varchar',
        name: 'mail_user',
        nullable: false,
        comment: 'Correo electronico del usuario',
    })
    mail_user: string;

    @Column({
        type: 'varchar',
        name: 'password_user',
        nullable: false,
        comment: 'Contraseña del usuario',
    })
    password_user: string;
}