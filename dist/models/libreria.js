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
    EliminarLibros() {
        let libroEliminado = this.book.pop();
        console.log('libro eliminado:');
        console.table(libroEliminado);
    }
    VerLibros() {
        console.log('pila actual de libros');
        console.table(this.book);
    }
}
exports.Libreria = Libreria;
