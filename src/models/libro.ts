class Libro {
    titulo:string = "1984"
    autor:string = "George Orwell";
    genero:string= "Ficción, Ciencia Ficción";
    idioma: string="Inglés";
    precio: number = 25000;
    formato: string = "Tapa dura";
    isbn: string = "978-0451524935";
    descripcion: string = "Novela distópica que describe una sociedad totalitaria en la que el gobierno controla todos los aspectos de la vida de los ciudadanos.";
    estado: string = "Nuevo";
    ubicacion:  string =  "Biblioteca central";
    fecha_publicacion:Date = new Date(1949, 6, 8);
    editorial: string ="Secker and Warburg";
    paginas:number = 328;
    dimensiones: string = "13.5 x 21.5 x 3.5 cm"
    peso: string = "450 gramos"
    disponible:boolean =  true;

    constructor(
        titulo:string,
        autor:string,
        genero:string,
        idioma:string,
        precio:number,
        formato:string,
        isbn:string,
        descripcion:string,
        estado:string,
        ubicacion:string,
        fecha_publicacion:Date,
        editorial:string,
        paginas:number,
        dimensiones:string,
        peso:string,
        disponible:boolean
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
        this.fecha_publicacion =  fecha_publicacion;
        this.editorial = editorial ;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.disponible = disponible;
      }

    


}