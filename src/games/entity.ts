import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsHexColor, IsJSON } from 'class-validator'

@Entity()
    export class Game extends BaseEntity {
        @PrimaryGeneratedColumn()
        id?: number

        @IsString()
        @Column('text')
        name: string

        @IsHexColor()
        @Column('text')
        color: string

        @IsJSON()
        @Column('json')
        board: string[][]

    }