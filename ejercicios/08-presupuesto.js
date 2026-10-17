// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 08
// Presupuesto estudiantil
// Declara const presupuestoTexto="150", const transporteTexto="25.50", const alimentacionTexto="40". Convierte cada valor y calcula saldoDisponible después de ambos gastos.
const presupuestoTexto = "150";
const transporteTexto = "25.50";
const alimentacionTexto = "40";

const presupuesto = Number(presupuestoTexto);
const transporte = Number(transporteTexto);
const alimentacion = Number(alimentacionTexto);

const saldoDisponible = presupuesto - transporte - alimentacion;

console.log(`Saldo disponible: S/ ${saldoDisponible.toFixed(2)}`);
// TODO: escribe aquí tu solución.
