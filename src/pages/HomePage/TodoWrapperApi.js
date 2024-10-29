import React, { useState, useEffect } from "react";
import { TodoForm } from "../../features/todo/TodoForm";
import { Todo } from "../../features/todo/Todo";
import { EditTodoForm } from "../../features/todo/EditTodoForm";
import axios from "axios";

export const TodoWrapperApi = () => {
  const [todos, setTodos] = useState([]);
  const urlApi = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchTodos = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const response = await axios.get(`${urlApi}/task/${userId}`);
        setTodos(response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };
    fetchTodos();
  }, [urlApi]);

  const addTodo = async (task) => {
    const userId = localStorage.getItem("userId");
    try {
      const newTodo = {
        title: "teste",
        userId,
        completed: true,
      };
      const response = await axios.post(`${urlApi}/task`, newTodo);
      console.log(response);
      setTodos([...todos, response.data]);
      console.log("sucesso ao adicionar tarefa");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      await axios.put(`${urlApi}/todos/${id}`, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("Erro ao alternar conclusão da tarefa:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${urlApi}/task/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = async (task, id) => {
    try {
      const updatedTodo = {
        ...todos.find((todo) => todo.id === id),
        task,
        isEditing: false,
      };
      await axios.put(`${urlApi}/task/${id}`, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("Erro ao editar tarefa:", error);
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
