import { Libro } from "./libro";

export class Libreria {
    nombre: string
    descripcion: string
    book: Libro [] = []
    constructor  (
        nombre:string,
        descripcion:string,
    ){
        this.nombre = nombre
        this.descripcion = descripcion
    }

    AgregarLibro(nuevoLibro: any){
        this.book.push(nuevoLibro)
        console.log('libro agregado');
    }

    EliminarLibros() {

        let libroEliminado = this.book.pop()
        console.log('libro eliminado:');
        console.table(libroEliminado);
    }

    VerLibros() {
        console.log('pila actual de libros');
        console.table(this.book);
    }

}