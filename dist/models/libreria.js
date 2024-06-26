"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Libreria {
    constructor(nombre, direccion, tel, book) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.tel = tel;
        this.book = book;
    }
    AgregarLibro() {
        let nuevoLibro = {
            titulo: prompt('titulo'),
            autor: prompt('autor'),
            genero: prompt('genero'),
            idioma: prompt('idioma'),
            precio: prompt('precio'),
            formato: prompt('formato'),
            isbn: prompt('isbn'),
            drescripcion: prompt('drescripcion'),
            estado: prompt('estado'),
            ubicacion: prompt('ubicacion'),
            fecha: prompt('fecha'),
            editorial: prompt('editorial'),
            paginas: prompt('paginas'),
            dimensiones: prompt('dimensiones'),
            peso: prompt('peso')
        };
        this.book.push(nuevoLibro);
        console.table(this.book);
    }
}
