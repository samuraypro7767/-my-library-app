"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libreria = void 0;
class Libreria {
    constructor(nombre, descripcion) {
        this.book = [];
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    AgregarLibro(nuevoLibro) {
        this.book.push(nuevoLibro);
        console.log('libro agregado');
    }
    EliminarLibro() {
        if (this.book.length > 0) {
            const libroEliminado = this.book.pop();
            console.log('Libro eliminado:');
            console.table(libroEliminado);
        }
        else {
            console.log('No hay libros para eliminar');
        }
    }
    VerLibros() {
        console.log('pila actual de libros');
        console.log(this.book);
    }
}
exports.Libreria = Libreria;
