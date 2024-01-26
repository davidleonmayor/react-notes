TODO: hacer que la modal se abra con el contenido cuando se oprime en el boton de agregar o en la tarea con su respenctivo contenido

- posible solucion: crea componente modal que renderice el contenido de la tarea. Con un contexto global para abrir o cerrar la modal cuando se oprime el boton de agregar tarea se le pase un objeto vacio y cuando se oprime en la tarea se le pase el contenido de la tarea

# Progreso

creado componente y usando el contexto en el boton y el componente de la tarea.
Falta que al abrir la modal pueda escribir el contenido de la tarea y que se guarde en el estado global.

- [x] crear componente modal
- [x] crear contexto global
- [x] crear funcion para abrir, cerrar modal
- [ ] crear funcion para actualizar el contenido de la modal
