class Admin{
    nombre: string;
    cod_admin : number;
    email_admin :string;
    tel_admin :number;
    
    constructor( 
        nombre:string,
        cod_admin : number,
        email_admin :string,
        tel_admin :number
    )
    {
 
        this.nombre = nombre;
        this.cod_admin = cod_admin;
        this.email_admin = email_admin;
        this.tel_admin = tel_admin;
    }

}
