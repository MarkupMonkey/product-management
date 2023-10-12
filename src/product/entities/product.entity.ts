import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('decimal', {
    precision: 8,
    scale: 2,
  })
  price: number;

  @Column()
  photo: string;

  @Column({ length: 255 })
  description: string;

  @Column({ length: 50 })
  category: string;


}