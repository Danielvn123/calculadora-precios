/**
 * Tipo de IVA general aplicado a las bases imponibles (21 %).
 * @constant {number}
 */
const TIPO_IVA = 0.21; // IVA general (reducido 0.10 y superreducido 0.04 descartados)

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
 * @param {number} base - Base imponible (no puede ser negativa).
 * @returns {number} Importe del IVA.
 * @throws {RangeError} Si la base es negativa.
 */
function calcularImpuesto(base) {
  if (base < 0) {
    throw new RangeError("La base no puede ser negativa");
  }
  return base * TIPO_IVA;
}

/**
 * Calcula el precio final de un pedido: subtotal, descuento e IVA.
 * @param {{precio: number, cantidad: number}[]} items - Artículos del pedido.
 * @param {number} [descuento=0] - Descuento porcentual entre 0 y 100.
 * @returns {number} Precio final con descuento e impuestos.
 */
function precioFinal(items, descuento = 0) {
  const base = aplicarDescuento(calcularSubtotal(items), descuento);
  return base + calcularImpuesto(base);
}

module.exports = {
  calcularSubtotal,
  aplicarDescuento,
  calcularImpuesto,
  precioFinal,
};
