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

    AgregarLibro(nuevoLibro: Libro ):void{
        this.book.push(nuevoLibro)
        console.log('libro agregado');
    }

    EliminarLibro():any {
        if (this.book.length > 0) {
          const libroEliminado = this.book.pop();
          console.log('Libro eliminado:');
          console.table(libroEliminado);
        } else {
          console.log('No hay libros para eliminar');
        }
      }

    VerLibros() {
        console.log('pila actual de libros');
        console.log(this.book);
    }

   
}