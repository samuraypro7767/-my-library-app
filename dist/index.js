"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libro_1 = require("./models/libro");
const libreria_1 = require("./models/libreria");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promptSync = (0, prompt_sync_1.default)();
const almacen = new libreria_1.Libreria('fantasia', 'libros de fantasia');
function AgregarLibro() {
    const titulo = promptSync("digite el título del libro: ");
    const autor = promptSync("digite el autor del libro: ");
    const genero = promptSync("digite el género del libro: ");
    const idioma = promptSync("digite el idioma del libro: ");
    const precio = parseFloat(promptSync("digite el precio del libro: "));
    const formato = promptSync("digite el formato del libro: ");
    const isbn = promptSync("digite el ISBN del libro: ");
    const descripcion = promptSync("digite la descripción del libro: ");
    const estado = promptSync("digite el estado del libro: ");
    const ubicacion = promptSync("digite la ubicación del libro: ");
    const fecha = parseInt(promptSync("digite la fecha de publicación del libro (año): "));
    const editorial = promptSync("digite la editorial del libro: ");
    const paginas = parseInt(promptSync("digite el número de páginas del libro: "));
    const dimensiones = promptSync("digite las dimensiones del libro: ");
    const peso = promptSync("digite el peso del libro (kg): ");
    const disponible = promptSync("¿El libro está disponible? (sí/no): ");
    const nuevoLibro = new libro_1.Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha, editorial, paginas, dimensiones, peso, disponible);
    almacen.AgregarLibro(nuevoLibro);
    console.log(`El libro ${titulo} ha sido agregado a la librería.`);
}
function ElimarLibro() {
}
function MostrarLibros() {
}
function MenuPrincipal() {
    let menu;
    menu = 'Menu libreria\n\n';
    menu += '1: agregar  libro\n';
    menu += '2: Eliminar libro\n';
    menu += '3: Mostrar pila de libros\n';
    let codigo = parseInt(promptSync(menu));
    return codigo;
}
function EjecutarMenuPrincipal() {
    let codigoIngresado = MenuPrincipal();
    switch (codigoIngresado) {
        case 1:
            AgregarLibro();
            EjecutarMenu();
            break;
        case 2:
            ElimarLibro();
            EjecutarMenu();
            break;
        case 3:
            MostrarLibros();
            EjecutarMenu();
            break;
        default:
            false;
            break;
    }
}
function MenuValidacion() {
    let menu = 'Desea continuar en el menu\n\n';
    menu += '1: si\n';
    menu += '2: no\n\n';
    menu += 'Elija una opcion: ';
    let codigo = parseInt(promptSync(menu));
    return codigo;
}
function EjecutarMenu() {
    let continuar = true;
    while (continuar) {
        let codigo = MenuValidacion();
        switch (codigo) {
            case 1:
                EjecutarMenuPrincipal();
                break;
            case 2:
                alert('Salio del menu');
                continuar = false;
                break;
            default:
                alert('Opcion no valida. Intente de nuevo.');
                break;
        }
    }
}
EjecutarMenuPrincipal();
