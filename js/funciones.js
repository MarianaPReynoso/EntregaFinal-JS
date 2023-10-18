function avisar () {
    let aviso = document.getElementById("aviso");
    let nombreCompleto = document.getElementById("nombreCompleto");
    aviso.innerHTML = "Indique su nombre completo antes de continuar";
    aviso.className = "pAviso"

    /*   if (nombreCompleto == ""){
        solicitarPrestamo.onclick = avisar;
    } else {
        aviso.innerHTML = "";
    }  */
}

function validarMonto () {
    let recordatorio = document.getElementById("recordatorio");
    var lista = document.getElementById("prestamos").value;
    document.getElementById("recordatorio").innerHTML = "Recuerde que el monto máximo es de $ " + lista;
    recordatorio.className = "text-danger parrafo"
}