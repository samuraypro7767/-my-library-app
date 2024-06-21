"use strict";
class Libro {
    constructor(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso, disponible) {
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
        this.fecha_publicacion = new Date(1949, 6, 8);
        this.editorial = "Secker and Warburg";
        this.paginas = 328;
        this.dimensiones = "13.5 x 21.5 x 3.5 cm";
        this.peso = "450 gramos";
        this.disponible = true;
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
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.disponible = disponible;
    }
}