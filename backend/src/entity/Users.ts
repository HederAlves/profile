import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("users")
export class users {

    @PrimaryGeneratedColumn() id: Text;
    @Column() name: string
    @Column() password: string
    @Column() email: string
    @Column() phone: number
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;
}
