let ingresaronWeb = [
    {id: 1, alias: "Virginia Castro", pidioPrestamo: "SI"},
    {id: 2, alias: "Fernando Arabia", pidioPrestamo: "SI"},
    {id: 3, alias: "Lucía Costa", pidioPrestamo: "NO"},
    {id: 4, alias: "Jorge Rojas", pidioPrestamo: "NO"},
    {id: 5, alias: "Josefina Perez", pidioPrestamo: "SI"},
    {id: 6, alias: "Esteban Allasia", pidioPrestamo: "NO"},
    {id: 7, alias: "Alma Zulema", pidioPrestamo: "SI"},
    {id: 8, alias: "Oliver Gomez", pidioPrestamo: "SI"}
];

document.getElementById("opciones").addEventListener("change", function(e) {
    if(this.value == "1") {
        document.getElementById("tipos").innerHTML = document.getElementById("tipoPrestamo").innerHTML;
        document.getElementById("montos").innerHTML = document.getElementById("montoPrestamo").innerHTML;        
        document.getElementById("cantCuotas").innerHTML = document.getElementById("numeroCuotas").innerHTML;
        document.getElementById("tipos").style.display ="block";
        document.getElementById("montos").style.display ="block";
        document.getElementById("cantCuotas").style.display ="block";
    } else if(this.value == "2") {
        document.getElementById("tipos").style.display = "none";
        document.getElementById("montos").style.display = "none";
        document.getElementById("cantCuotas").style.display = "none";
    }
})

const TNA = 138;
const TEA = 268;
const CFTEA = 376;
let interesCuota; 

let formularioPrestamo = document.getElementById("formularioPrestamo");

const validarCuotas = () => {
    let opcionCuota = document.getElementById("opcionCuota").value;
    let valorPrestamo = parseInt(document.getElementById("saldoPrestamo").value);

    if(opcionCuota == "12"){
        interesCuota = 30;
    } else if (opcionCuota.value == "24"){
        interesCuota = 40;
    } else {
        interesCuota = 50;
    }

    let cuotaPura = valorPrestamo / opcionCuota;
    let interesPrestamo = interesCuota / opcionCuota;
    let tnaCuota = TNA / opcionCuota;
    let teaCuota = TEA / opcionCuota;
    let cfteaCuota = CFTEA / opcionCuota;

    let interesPorCuota = (cuotaPura * interesPrestamo) / 100;
    let interesTnaCuota = (cuotaPura * tnaCuota) / 100;
    let interesTeaCuota = (cuotaPura * teaCuota) / 100;
    let interesCfteaCuota = (cuotaPura * cfteaCuota) / 100;

    let valorCuota = cuotaPura + interesPorCuota + interesTnaCuota + interesTeaCuota + interesCfteaCuota;

    Swal.fire({
        icon: 'info',
        title: 'Información importante:',
        text: `Su préstamo de $${valorPrestamo} será devuelto en ${opcionCuota} cuotas con un interés del ${interesCuota}%. Cada cuota tendrá un valor de $${valorCuota.toFixed(2)}`,
        confirmButtonColor:'rgb(247, 142, 44)',
    }) 

    let nombre = document.querySelector("#nombreCompleto");
    let prestamo = document.querySelector("#prestamos");

    const datosUsuario = {nombre:nombre.value, prestamo:prestamo.value, monto: valorPrestamo, cuotas:opcionCuota};
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario)); 
    nombre.value = "";
    prestamo.value ="";
    opcionCuota.value = "";
}

formularioPrestamo.addEventListener("submit", (e) => {
    e.preventDefault()
    validarCuotas()
});

const tipo = ingresaronWeb.find(item => item.pidioPrestamo == "NO");
console.log(tipo);


fetch("json/clientes.json")
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data);
})