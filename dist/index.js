"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libro_1 = require("./models/libro");
const libreria_1 = require("./models/libreria");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promptSync = (0, prompt_sync_1.default)();
const libreria = new libreria_1.Libreria('accion', 'libros de accion');
function AgregarLibro() {
    const titulo = promptSync("Ingrese el título del libro: ");
    const autor = promptSync("Ingrese el autor del libro: ");
    const genero = promptSync("Ingrese el género del libro: ");
    const idioma = promptSync("Ingrese el idioma del libro: ");
    const precio = parseFloat(promptSync("Ingrese el precio del libro: "));
    const formato = promptSync("Ingrese el formato del libro: ");
    const isbn = promptSync("Ingrese el ISBN del libro: ");
    const descripcion = promptSync("Ingrese la descripción del libro: ");
    const estado = promptSync("Ingrese el estado del libro: ");
    const ubicacion = promptSync("Ingrese la ubicación del libro: ");
    const fecha_publicacion = parseInt(promptSync("Ingrese la fecha de publicación del libro (año): "));
    const editorial = promptSync("Ingrese la editorial del libro: ");
    const paginas = parseInt(promptSync("Ingrese el número de páginas del libro: "));
    const dimensiones = promptSync("Ingrese las dimensiones del libro: ");
    const peso = promptSync("Ingrese el peso del libro (kg): ");
    const disponible = promptSync("¿El libro está disponible? (sí/no): ");
    const nuevoLibro = new libro_1.Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso, disponible);
    libreria.AgregarLibro(nuevoLibro);
    console.log(`El libro "${titulo}" ha sido agregado a la librería.`);
}
function ElimarLibro() {
    libreria.EliminarLibro();
    console.log(`El libro ha sido eliminado de la librería.`);
}
function MostrarLibros() {
    libreria.VerLibros();
}
function Descuento() {
}
function MenuPrincipal() {
    let menu;
    menu = 'Menu libreria\n\n';
    menu += '1: agregar  libro\n';
    menu += '2: Eliminar libro\n';
    menu += '3: Mostrar pila de libros\n';
    menu += '4: Mostrar descuento de libros\n';
    menu += '5: salir del menu\n';
    let codigo = parseInt(promptSync(menu));
    return codigo;
}
function EjecutarMenuPrincipal() {
    let codigoIngresado;
    do {
        codigoIngresado = MenuPrincipal();
        switch (codigoIngresado) {
            case 1:
                AgregarLibro();
                break;
            case 2:
                ElimarLibro();
                break;
            case 3:
                MostrarLibros();
                break;
            case 4:
                Descuento();
                break;
            case 5:
                console.log("Saliendo del programa");
                break;
            default:
                alert("opcion no valida");
        }
    } while (codigoIngresado !== 5);
}
EjecutarMenuPrincipal();
