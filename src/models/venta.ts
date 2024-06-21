class venta{
    cod_venta: number;
    fecha: Date;
    cantidad : number;
    sub_total : number;
    constructor( 
        cod_venta:number, 
        fecha:Date,
        cantidad : number,
        sub_total : number
    )
    {
 
        this.cod_venta = cod_venta;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.sub_total = sub_total;
    }

}