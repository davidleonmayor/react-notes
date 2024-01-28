TODO: hacer que la modal se abra con el contenido cuando se oprime en el boton de agregar o en la tarea con su respenctivo contenido

- posible solucion: crea componente modal que renderice el contenido de la tarea. Con un contexto global para abrir o cerrar la modal cuando se oprime el boton de agregar tarea se le pase un objeto vacio y cuando se oprime en la tarea se le pase el contenido de la tarea

# Progreso

ERROR: las funcionalidades se ejecutan bien pero, al oprimir el boton cerrar del modal, independientemente siempre crea una nueva tarea.

- [x] crear componente modal
- [x] crear contexto global
- [x] crear funcion para abrir, cerrar modal
- [x] crear funcion para actualizar el contenido de la modal // se actualiza al pasarle el contenido de la tarea al componente modal
