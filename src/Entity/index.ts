import { Field, ObjectType } from 'type-graphql';
// import { BigBaseEntity } from 'src/componentEntity';
import { Column, Entity, BaseEntity, PrimaryColumn} from 'typeorm';


@Entity({ name: 'Product' })
@ObjectType()
export class AccountEntity extends BaseEntity{
    @Field()
    @PrimaryColumn('int')
    ID: number;  

    @Field()   
    @Column('varchar', { length: 1000, nullable: true })
    Name: string;

    @Field()
    @Column('varchar', { length: 10000, nullable: true })
    Password: string;
}