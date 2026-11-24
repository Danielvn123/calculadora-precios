const { calcularSubtotal, aplicarDescuento } = require("./precios");

const pedido = [
  { precio: 10, cantidad: 2 },
  { precio: 5.5, cantidad: 3 },
];

const subtotal = calcularSubtotal(pedido);
console.log("Subtotal:", subtotal);
console.log("Con 10% de descuento:", aplicarDescuento(subtotal, 10));
