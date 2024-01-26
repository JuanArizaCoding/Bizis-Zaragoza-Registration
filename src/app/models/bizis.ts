export class Bizis {
    id: string;
    title: string;
    anclajesDisponibles: number;
    bicisDisponibles: number;
    icon: string;
    coordinates: number[];
    lastUpdated: Date;

    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : null;
        this.title = obj && obj.title ? obj.title : null;
        this.anclajesDisponibles =
        obj && obj.anclajesDisponibles ? obj.anclajesDisponibles : null;
        this.bicisDisponibles =
        obj && obj.bicisDisponibles ? obj.bicisDisponibles : null;
        this.icon = obj && obj.icon ? obj.icon : null;
        this.coordinates =
        obj && obj.geometry && obj.geometry.coordinates
            ? [obj.geometry.coordinates[1], obj.geometry.coordinates[0]]
            : [];
        this.lastUpdated = obj && obj.lastUpdated ? obj.lastUpdated : null;
    }
}  