import { Libro } from "./models/libro";
import { Libreria } from "./models/libreria";
import PromptSync from "prompt-sync";

const promptSync = PromptSync();
const libreria = new Libreria('accion','libros de accion');
const libros: Libro[] = [];


function AgregarLibro(): void {

  const titulo: string = promptSync("Ingrese el título del libro: ");
  const autor: string = promptSync("Ingrese el autor del libro: ");
  const genero: string = promptSync("Ingrese el género del libro: ");
  const idioma: string = promptSync("Ingrese el idioma del libro: ");
  const precio: number = parseFloat(promptSync("Ingrese el precio del libro: "));
  const formato: string = promptSync("Ingrese el formato del libro: ");
  const isbn: string = promptSync("Ingrese el ISBN del libro: ");
  const descripcion: string = promptSync("Ingrese la descripción del libro: ");
  const estado: string = promptSync("Ingrese el estado del libro: ");
  const ubicacion: string = promptSync("Ingrese la ubicación del libro: ");
  const fecha_publicacion: number = parseInt(promptSync("Ingrese la fecha de publicación del libro (año): "));
  const editorial: string = promptSync("Ingrese la editorial del libro: ");
  const paginas: number = parseInt(promptSync("Ingrese el número de páginas del libro: "));
  const dimensiones: string = promptSync("Ingrese las dimensiones del libro: ");
  const peso: string = promptSync("Ingrese el peso del libro (kg): ");
  const disponible: string = promptSync("¿El libro está disponible? (sí/no): ");
  
  const nuevoLibro = new Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso, disponible);
  libreria.AgregarLibro(nuevoLibro);
  console.log(`El libro "${titulo}" ha sido agregado a la librería.`);
}


function EliminarLibro():any {
  libreria.EliminarLibro();
  console.log(`El libro ha sido eliminado de la librería.`);
}

function MostrarLibros() {
  libreria.VerLibros();
}
  




function MenuPrincipal(): number {
  let menu: string = 'Menu libreria\n\n';
  menu += '1: Agregar libro\n';
  menu += '2: Eliminar libro\n';
  menu += '3: Mostrar pila de libros\n';
  // menu += '4: Mostrar descuento de libros\n';
  menu += '5: Salir del menú\n';

  const codigo: number = parseInt(promptSync(menu));
  return codigo;
}

function EjecutarMenuPrincipal(): void {
  let codigoIngresado: number;
  do {
    codigoIngresado = MenuPrincipal();
    switch (codigoIngresado) {
      case 1:
        AgregarLibro();
        break;
      case 2:
        EliminarLibro();
        break;
      case 3:
        MostrarLibros();
        break;
      case 5:
        console.log("Saliendo del programa");
        break;
      default:
        console.log("Opción no válida");
    }
  } while (codigoIngresado !== 5);
}

EjecutarMenuPrincipal();
