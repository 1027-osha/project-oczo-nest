import { Column, Entity, PrimaryGeneratedColumn } from "typeorm/browser";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;
    @Column('text')
    locationName: string;
    @Column('text')
    locationAdress: string;
    @Column('array')
    locationLatLng: number[];
}
