
export class Libro {
    titulo:string = "1984"
    autor:string = "George Orwell";
    genero:string= "Ficción, Ciencia Ficción";
    idioma: string="Inglés";
    precio: number = 25000;
    formato: string = "Tapa dura";
    isbn: string = "978-0451524935";
    descripcion: string = "Novela distópica que describe una sociedad totalitaria en la que el gobierno controla todos los aspectos de la vida de los ciudadanos.";
    estado: string = "Nuevo";
    ubicacion: string =  "Biblioteca central";
    fecha:number = 1998;
    editorial: string ="Secker and Warburg";
    paginas:number = 328;
    dimensiones: string = "13.5 x 21.5 x 3.5 cm"
    peso: string = "450 gramos" 
    disponible:string = "si"

    constructor(
      titulo:string = "1984",
      autor:string = "George Orwell",
      genero:string= "Ficción, Ciencia Ficción",
      idioma: string="Inglés",
      precio: number = 25000,
      formato: string = "Tapa dura",
      isbn: string = "978-0451524935",
      descripcion: string = "Novela distópica que describe una sociedad totalitaria en la que el gobierno controla todos los aspectos de la vida de los ciudadanos.",
      estado: string = "Nuevo",
      ubicacion: string =  "Biblioteca central",
      fecha:number = 1998,
      editorial: string ="Secker and Warburg",
      paginas:number = 328,
      dimensiones: string = "13.5 x 21.5 x 3.5 cm",
      peso: string = "450 gramos" ,
      disponible:string = "si"
        ) {
        
        this.titulo = titulo;
        this.autor = autor;
        this.genero= genero ;
        this.idioma = idioma ;
        this.precio = precio;
        this.formato = formato ;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado ;
        this.ubicacion = ubicacion;
        this.fecha =  fecha;
        this.editorial = editorial ;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.disponible = disponible
      }

      Descuento(): number {
        let totalDescuento : number = 0; 
        let descuento : number = 0.2;
        if (this.precio > 50) {
        
          totalDescuento = this.precio - (this.precio * descuento);

          console.log(`Precio original: ${this.precio}`);
          console.log(`Descuento:${this.precio*descuento}`);
          console.log(`Precio con descuento: ${totalDescuento}`);

      }
      
      return totalDescuento;
    }
 

  }
