import { Field, ObjectType } from 'type-graphql';
// import { BigBaseEntity } from 'src/componentEntity';
import { Column, Entity, BaseEntity  } from 'typeorm';


@Entity({ name: 'login' })
@ObjectType()
export class AccountEntity extends BaseEntity{
    @Column('int')
    @Field()
    ID: string;

    @Column('varchar', { length: 1000, nullable: true })
    @Field()
    Name: string;

    @Column('varchar', { length: 10000, nullable: true })
    @Field()
    password: string;
}