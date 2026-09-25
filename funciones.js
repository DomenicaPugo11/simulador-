//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

 function calcularDisponible(ingresos,egresos){
    let valorDisponible=ingresos-egresos;
    if (valorDisponible<0){
        return 0;
    }else{
        return valorDisponible;
    }
 }

 function calcularCapacidadPago(montoDisponible){
    let capacidadPago=(montoDisponible*50)/100;
    return capacidadPago;
 }