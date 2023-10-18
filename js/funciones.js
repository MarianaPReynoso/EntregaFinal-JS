//aca enevnto para mensaje debajo de nombre


function validarMonto () {
    let recordatorio = document.getElementById("recordatorio");
    var lista = document.getElementById("prestamos").value;
    document.getElementById("recordatorio").innerHTML = "Recuerde que el monto máximo es de $ " + lista;
    recordatorio.className = "text-danger parrafo"
}

/* function Prestamo (nombre, montoMaximo) {
    this.nombre = nombre;
    this.monto = montoMaximo;
} */