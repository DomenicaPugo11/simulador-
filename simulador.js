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
}