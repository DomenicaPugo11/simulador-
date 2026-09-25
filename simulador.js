//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
    let ctxIngresos=document.getElementById("txtIngresos");
    let ingresosStr=ctxIngresos.value;
    let ingresos=parseFloat(ingresosStr);

    let ctxEgresos=document.getElementById("txtEgresos");
    let egresosStr=ctxEgresos.value;
    let egresos=parseFloat(egresosStr);

    let valorDisponible=calcularDisponible(ingresos,egresos);
    let spValorDisponible=document.getElementById("spnDisponible");
    spValorDisponible.textContent=valorDisponible;

    let capacidadPago=calcularCapacidadPago(valorDisponible);
    let spCapacidadPago=document.getElementById("spnCapacidadPago");
    spCapacidadPago.textContent=capacidadPago;

    let ctxMonto=document.getElementById("txtMonto");
    let montoStr=ctxMonto.value;
    let monto=parseInt(montoStr);
    let ctxPlazoAnios=document.getElementById("txtPlazo");
    let plazoAniosStr=ctxPlazoAnios.value;
    let plazoAnios=parseInt(plazoAniosStr);
    let ctxTasa=document.getElementById("txtTasaInteres");
    let tasaStr=ctxTasa.value;
    let tasa=parseInt(tasaStr);

    let interesSimple=calcularInteresSimple(monto,tasa,plazoAnios);
    let spInteresValor=document.getElementById("spnInteresPagar");
    spInteresValor.textContent=interesSimple;
}