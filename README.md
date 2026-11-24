# Calculadora de precios

Pequeña librería en JavaScript para calcular el precio de un pedido: subtotal, descuentos e impuestos.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

    git clone git@github.com:Danielvn123/calculadora-precios.git
    cd calculadora-precios
    npm install

## Uso

Ejecutar el ejemplo:

    node src/index.js

Usar las funciones en otro fichero:

    const { calcularSubtotal, aplicarDescuento } = require("./src/precios");

## Funciones

- `calcularSubtotal(items)`: suma precio por cantidad de cada artículo.
- `aplicarDescuento(importe, porcentaje)`: aplica un descuento porcentual.
- `calcularImpuesto(base)`: calcula el IVA (21 %) de una base imponible.
- `precioFinal(items, descuento)`: calcula subtotal, descuento e IVA en un solo paso.

## Licencia

Proyecto educativo del módulo MP0614.
