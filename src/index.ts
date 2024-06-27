import { Libro } from "./models/libro";
import { Libreria } from "./models/libreria";
import PromptSync from "prompt-sync";

const promptSync = PromptSync();
const libreria = new Libreria('accion','libros de accion');


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
function ElimarLibro():any {
  libreria.EliminarLibro();
  console.log(`El libro ha sido eliminado de la librería.`);
}
function MostrarLibros():void {
  libreria.VerLibros();
}

function Descuento(): void {
}


function MenuPrincipal(): number {
  let menu:string
  menu = 'Menu libreria\n\n'
  menu += '1: agregar  libro\n'
  menu += '2: Eliminar libro\n'
  menu += '3: Mostrar pila de libros\n'
  menu += '4: Mostrar descuento de libros\n'
  menu += '5: salir del menu\n'
 
  let codigo:number = parseInt(promptSync(menu))

  return codigo
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
  } while (codigoIngresado!== 5 );
}



EjecutarMenuPrincipal();
