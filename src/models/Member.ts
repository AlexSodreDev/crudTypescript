import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('member')
class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default Member
