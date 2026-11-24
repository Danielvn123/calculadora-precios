# Changelog

Todos los cambios relevantes de este proyecto se documentan en este fichero.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

## [1.0.0] - 2026-11-24

### Added
- Funciones `calcularSubtotal`, `aplicarDescuento`, `calcularImpuesto` y `precioFinal`.
- Ejemplo de uso en `src/index.js`.
- Documentación de la API generada con JSDoc en `docs/api` (`npm run docs`).
- `README.md` con descripción, requisitos, instalación y uso.
- `.gitignore` y configuración de npm con JSDoc como dependencia de desarrollo.

### Changed
- El tipo de IVA se centraliza en la constante `TIPO_IVA`.

### Fixed
- `calcularImpuesto` lanza un `RangeError` si la base es negativa.

[Unreleased]: https://github.com/Danielvn123/calculadora-precios/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Danielvn123/calculadora-precios/releases/tag/v1.0.0
