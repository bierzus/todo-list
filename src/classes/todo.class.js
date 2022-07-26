export class Todo {

    // Para recuperar el metodo de abajo porque el localstorage no almacena metodos solo propiedades del objeto!!!
    static fromJson( { id, tarea, completado, creado } ) {
        
        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;

    }

    constructor( tarea ) {

        this.tarea = tarea;

        this.id = new Date().getTime(); // 1234552256
        this.completado = false;
        this.creado = new Date();

    }

    imprimirClase() {
        return `Todo (${this.id}): ${this.tarea}`;
    }

}