import { Libro } from "./models/libro";
import { Libreria } from "./models/libreria";
import PromptSync from "prompt-sync";

const promptSync = PromptSync();
const almacen = new Libreria ('fantasia','libros de fantasia')
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

  const nuevoLibro = new Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha, editorial, paginas, dimensiones, peso, disponible);
  almacen.AgregarLibro(nuevoLibro);
  console.log(`El libro ${titulo} ha sido agregado a la librería.`)
}



AgregarLibro();