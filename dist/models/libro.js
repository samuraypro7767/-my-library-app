"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    constructor(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha, editorial, paginas, dimensiones, peso, disponible) {
        this.titulo = "1984";
        this.autor = "George Orwell";
        this.genero = "Ficción, Ciencia Ficción";
        this.idioma = "Inglés";
        this.precio = 25000;
        this.formato = "Tapa dura";
        this.isbn = "978-0451524935";
        this.descripcion = "Novela distópica que describe una sociedad totalitaria en la que el gobierno controla todos los aspectos de la vida de los ciudadanos.";
        this.estado = "Nuevo";
        this.ubicacion = "Biblioteca central";
        this.fecha = 1998;
        this.editorial = "Secker and Warburg";
        this.paginas = 328;
        this.dimensiones = "13.5 x 21.5 x 3.5 cm";
        this.peso = "450 gramos";
        this.disponible = "si";
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.formato = formato;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fecha = fecha;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.disponible = disponible;
    }
    descuento() {
        let totalDescuento = 0;
        let descuento = 0.2;
        if (this.precio > 50) {
            totalDescuento = this.precio - (this.precio * descuento);
            console.log(`Precio original: ${this.precio}`);
            console.log(`Descuento:${this.precio * descuento}`);
            console.log(`Precio con descuento: ${totalDescuento}`);
        }
        return totalDescuento;
    }
}
exports.Libro = Libro;
