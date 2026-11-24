/**
 * Calcula el subtotal de una lista de artículos.
 * @param {{precio: number, cantidad: number}[]} items - Artículos del pedido.
 * @returns {number} Suma de precio por cantidad de todos los artículos.
 */
function calcularSubtotal(items) {
  return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}

/**
 * Aplica un descuento porcentual a un importe.
 * @param {number} importe - Importe original.
 * @param {number} porcentaje - Descuento entre 0 y 100.
 * @returns {number} Importe con el descuento aplicado.
 */
function aplicarDescuento(importe, porcentaje) {
  return importe * (1 - porcentaje / 100);
}

/**
 * Calcula el IVA de una base imponible.
 * @param {number} base - Base imponible.
 * @returns {number} Importe del IVA.
 */
function calcularImpuesto(base) {
  return base * 0.21;
}

module.exports = { calcularSubtotal, aplicarDescuento, calcularImpuesto };
