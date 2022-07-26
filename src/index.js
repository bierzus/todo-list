
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/components';

import './styles.css';


export const todoList = new TodoList();

// todoList.todos.forEach( ( todo ) => crearTodoHtml( todo ) );
todoList.todos.forEach( crearTodoHtml ); // Equivale a lo anterior!!!!!!

todoList.cargarLocalStorage();

/* const newTodo = new Todo( 'Aprender JavaScript' );
todoList.nuevoTodo( newTodo ); */

console.log( 'todos', todoList.todos );