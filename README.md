# Torres de Hanoi Interactivo

Este proyecto es una implementación interactiva del clásico juego de las Torres de Hanoi, desarrollado con HTML, CSS y JavaScript.

---

## Descripción

El juego simula las Torres de Hanoi con reglas clásicas:

- Mover discos de una torre a otra.
- Solo mover un disco a la vez.
- No colocar un disco grande sobre uno más pequeño.
- El objetivo es trasladar todos los discos de la torre A a la torre C, manteniendo el orden.

Este proyecto incluye:

- Elección del número de discos (3 a 6).
- Botones para iniciar y reiniciar el juego.
- Contador de movimientos.
- Interfaz drag & drop para mover discos.
- Validación automática de movimientos y victoria.

---

## Archivos

- `index.html` — estructura del juego y controles.
- `styles.css` — estilos visuales.
- `script.js` — lógica del juego e interactividad.

---

## Explicación del código

### 1. Estructura general

- **Selector de discos:** Permite elegir la cantidad de discos con un menú desplegable.
- **Botones:** `Iniciar` para comenzar y `Reiniciar` para reiniciar la partida.
- **Contador de movimientos:** Muestra cuántas jugadas se han realizado.
- **Tres torres:** Representan las varillas donde se colocan los discos.

---

### 2. CSS (styles.css)

- Define el diseño limpio y sencillo del juego.
- Las torres son contenedores verticales con borde.
- Los discos tienen tamaños y colores diferentes según su tamaño.
- Los discos se muestran con cursor de "agarre" para indicar que se pueden arrastrar.

---

### 3. Lógica (script.js)

#### Variables principales

- `totalDisks`: Número de discos (3 a 6).
- `moves`: Contador de movimiento


