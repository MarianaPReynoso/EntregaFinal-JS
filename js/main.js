let pidieronPrestamo = [
    {id: 1, alias: "Virginia Castro", tipo: "Préstamo Básico", numCuotas: 24},
    {id: 2, alias: "Fernando Arabia", tipo: "Préstamo Premium", numCuotas: 36},
    {id: 3, alias: "Josefina Perez", tipo: "Préstamo Premium", numCuotas: 36},
    {id: 4, alias: "Alma Zulema", tipo: "Préstamo Simple", numCuotas: 12},
    {id: 5, alias: "Oliver Gomez", tipo: "Préstamo Simple", numCuotas: 24}
];

const ingresonWeb = ["Virginia Castro", "Fernando Arabia", "Marisol Lopez", "José Guzman", "Josefina Perez", "Jimena Galli", "Alma Zulema", "Oliver Gomez"];

localStorage.setItem("lista", JSON.stringify(pidieronPrestamo));
pidieronPrestamo = localStorage.getItem("lista");
pidieronPrestamo = JSON.parse(pidieronPrestamo);


document.getElementById("opciones").addEventListener("change", function(e) {
    if(this.value == "1") {
        document.getElementById("tipos").innerHTML = document.getElementById("tipoPrestamo").innerHTML;
        document.getElementById("montos").innerHTML = document.getElementById("montoPrestamo").innerHTML;        
        document.getElementById("cantCuotas").innerHTML = document.getElementById("numeroCuotas").innerHTML;
    } else if(this.value == "2") {
        document.getElementById("tipos").style.display = "none";
        document.getElementById("montos").style.display = "none";
        document.getElementById("cantCuotas").style.display = "none";
    }
})

const TNA = 138;
const TEA = 268;
const CFTEA = 376;
const maximoSolicitado = 3000000;
const tipoPrestamo = new Prestamo ("Préstamo Básico", 1000000);
const tipoPrestamo2 = new Prestamo ("Préstamo Medio", 2000000);
const tipoPrestamo3 = new Prestamo ("Préstamo Premium", 3000000);
let interesCuota; 

let formularioPrestamo = document.getElementById("formularioPrestamo");

const validarCuotas = () => {
    let opcionCuota = document.getElementById("opcionCuota").value;
    let valorPrestamo = parseInt(document.getElementById("saldoPrestamo").value);
    let resultado2 = document.getElementById("resultado2");

    if(opcionCuota == "12"){
        resultado2.innerHTML = interesCuota = 30;
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

    resultado2.innerHTML = "¡Los datos se enviaron correctamente!";
    resultado2.className = "text-success parrafo";

    alert(`Su préstamo de $${valorPrestamo} será devuelto en ${opcionCuota} cuotas con un interés del ${interesCuota}%. Cada cuota tendrá un valor de $${valorCuota.toFixed(2)}`)
    formularioPrestamo.onsubmit();
}

formularioPrestamo.addEventListener("submit", (e) => {
    e.preventDefault()
    validarCuotas()
});

const numeDeCuotas = pidieronPrestamo.find(item => item.numCuotas == 12);
console.log(numeDeCuotas);

ingresonWeb.forEach(item => {
    console.log(item);
})
