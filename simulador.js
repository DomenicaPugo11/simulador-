//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function validarInput(input) {

    let mensaje = input.nextElementSibling;

    mensaje.textContent = "";

    if (input.value.trim() == "") {

        mensaje.textContent = "Este campo no puede estar vacío.";

        return false;
    }

    if (!/^\d+$/.test(input.value)) {

        mensaje.textContent = "Solo se permiten números.";

        return false;
    }

    if (input.value.length > 5) {

        mensaje.textContent = "Máximo 5 caracteres.";

        return false;
    }

    return true;
}


function validarTodosLosInputs() {
    
    let ingresos = document.getElementById("txtIngresos");
    let egresos = document.getElementById("txtEgresos");
    let monto = document.getElementById("txtMonto");
    let plazo = document.getElementById("txtPlazo");
    let tasa = document.getElementById("txtTasaInteres");

    let validoIngresos = validarInput(ingresos);
    let validoEgresos = validarInput(egresos);
    let validoMonto = validarInput(monto);
    let validoPlazo = validarInput(plazo);
    let validoTasa = validarInput(tasa);

    if (
        validoIngresos == false ||
        validoEgresos == false ||
        validoMonto == false ||
        validoPlazo == false ||
        validoTasa == false
    ) {

        return false;
    }

    return true;
}



function calcular(){

    if (validarTodosLosInputs() == false) {
        return;
    }

    let ctxIngresos=document.getElementById("txtIngresos");
    let ingresosStr=ctxIngresos.value;
    let ingresos=parseFloat(ingresosStr);

    let ctxEgresos=document.getElementById("txtEgresos");
    let egresosStr=ctxEgresos.value;
    let egresos=parseFloat(egresosStr);

    let valorDisponible=calcularDisponible(ingresos,egresos);
    let spValorDisponible=document.getElementById("spnDisponible");
    spValorDisponible.textContent=valorDisponible.toFixed(2);

    let capacidadPago=calcularCapacidadPago(valorDisponible);
    let spCapacidadPago=document.getElementById("spnCapacidadPago");
    spCapacidadPago.textContent=capacidadPago.toFixed(2);

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
    spInteresValor.textContent=interesSimple.toFixed(2);

    let totalPagar=calcularTotalPagar(monto,interesSimple);
    let spTotalPagar=document.getElementById("spnTotalPrestamo");
    spTotalPagar.textContent=totalPagar.toFixed(2);

    let cuotaMensual=calcularCuotaMensual(totalPagar,plazoAnios);
    let spCuotaMensual=document.getElementById("spnCuotaMensual");
    spCuotaMensual.textContent=cuotaMensual.toFixed(2);

    let analizarcredito=aprobarCredito(capacidadPago,cuotaMensual);
    if (analizarcredito==true){
        let spAprobarCredito=document.getElementById("spnEstadoCredito");
        spAprobarCredito.textContent="CREDITO APROBADO";
    }else {
        let spAprobarCredito=document.getElementById("spnEstadoCredito");
        spAprobarCredito.textContent="CREDITO RECHAZADO";
    }
}