export interface Producto {
    id_articulo?: number; // El ID es opcional al crear
    nombre: string;
    descripcion: string;
    precio: number;
    foto: string; // <-- CAMBIO: de 'image' a 'foto'
}