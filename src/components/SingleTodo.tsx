import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
}

const SingleTodo = ({ todo, todos, setTodos, index }: Props) => {
  const [edit, setedit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  //start functions
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo: Todo) => {
    if (!edit && !todo.isDone) {
      setedit(!edit);
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    todiId: number
  ) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === todiId ? { ...todo, todo: editTodo } : todo
      )
    );
    setedit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos-single"
          onSubmit={(e) => handleSubmit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              value={editTodo}
              ref={inputRef}
              onChange={(e) => seteditTodo(e.target.value)}
              className="todos-single-text"
            />
          ) : todo.isDone ? (
            <s className="todos-single-text">{todo.todo}</s>
          ) : (
            <span className="todos-single-text">{todo.todo}</span>
          )}

          <div>
            <span className="icon" onClick={() => handleEdit(todo)}>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
