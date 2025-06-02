# torre-de-hanoi
Juego de la torres de Hanoi, para practicar Recursividad, cien por ciento operativo

*Elementos clave:
Selector de discos (<select id="diskCount">): Permite elegir entre 3 y 6 discos para jugar.

Botones Iniciar y Reiniciar: Para comenzar una nueva partida o reiniciarla.

Contador de movimientos (<span id="moveCounter">): Muestra cuántos movimientos hizo el jugador.

Tres torres (<div class="tower" id="towerA|B|C">): Representan los postes donde se colocan los discos.

Estos elementos están organizados para que el usuario pueda controlar el juego fácilmente y ver su progreso.

3. styles.css
Define el aspecto visual:

El cuerpo usa una fuente simple y centra el contenido.

Las torres son rectángulos verticales con un borde visible y fondo claro.

Los discos tienen diferente ancho según su tamaño, con colores distintos para facilitar la identificación.

Los discos tienen un cursor "grab" para indicar que pueden arrastrarse.

Este CSS ayuda a que el juego sea visualmente claro, con discos diferenciados y torres bien visibles.

4. script.js
Variables principales:
towers: Selecciona las tres torres del DOM.

startBtn, resetBtn: Botones para controlar el inicio y reinicio.

diskSelect: Selector para la cantidad de discos.

moveCounter: Elemento para mostrar los movimientos.

totalDisks: Número total de discos a jugar (inicialmente 3).

moves: Contador de movimientos realizados (inicialmente 0).

Funciones principales:
a) createDisks(n)
Limpia las torres (elimina discos anteriores).

Crea n discos en la torre A, de mayor a menor tamaño.

Cada disco es un <div> con atributo data-size que indica su tamaño.

Los discos se hacen arrastrables (draggable = true) y se les agrega el evento para iniciar el arrastre.

b) onDragStart(e)
Controla el inicio del arrastre de un disco.

Solo permite arrastrar el disco que esté arriba en su torre (como una pila).

Usa e.dataTransfer para almacenar el tamaño del disco que se está moviendo.

c) onDrop(e)
Controla la acción de soltar un disco en una torre.

Verifica que el disco que se va a colocar sea más pequeño que el disco superior actual en la torre destino (para respetar las reglas).

Si la jugada es válida, mueve el disco a la torre destino.

Incrementa el contador de movimientos y actualiza la pantalla.

Llama a la función checkVictory para verificar si el juego terminó.

d) updateMoveCounter()
Actualiza el texto visible con la cantidad actual de movimientos.

e) checkVictory()
Verifica si todos los discos están en la torre C.

Comprueba que estén ordenados de mayor a menor de abajo hacia arriba.

Si es así, muestra una alerta felicitando al jugador y diciendo cuántos movimientos usó.

f) startGame()
Lee la cantidad de discos seleccionada.

Resetea el contador de movimientos.

Crea la configuración inicial del juego con la cantidad de discos seleccionada.

Eventos:
Al hacer click en Iniciar o Reiniciar se llama a startGame para comenzar o reiniciar.

Cada torre tiene eventos para permitir arrastrar y soltar discos (dragover y drop).

Los discos tienen evento para iniciar el arrastre.

5. Flujo de uso
El usuario selecciona la cantidad de discos.

Presiona "Iniciar" para crear la torre inicial con discos ordenados.

Usa el mouse para arrastrar discos y soltarlos en otra torre.

El juego valida cada movimiento: sólo el disco superior puede moverse y no se puede poner un disco grande sobre uno pequeño.

Se actualizan y muestran los movimientos realizados.

Cuando todos los discos están en la torre C ordenados, se muestra una felicitación.

6. Aspectos importantes para destacar
El juego usa drag & drop para hacerlo interactivo y visual.

Se respeta la lógica de las Torres de Hanoi (reglas clásicas).

El diseño es responsive y sencillo, ideal para entender visualmente la solución recursiva.

Se puede elegir entre diferentes niveles de dificultad con la cantidad de discos.

Se validan movimientos para evitar errores.

Se muestra el progreso en tiempo real para motivar al jugador.

**
