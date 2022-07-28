import React, { useRef } from "react";
import "./style.css";

// use this interface to declaer props and their properties types...
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SyntheticEvent) => void;
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputRef}
        placeholder="Enter a task"
        className="input-box"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;

// alternate

// const InputFeild:React.FC<Props> = ({ todo, setTodo }) => {
//     return (
//       <form className="input">
//         <input type="input" placeholder="Enter a task" className="input-box" />
//         <button className="input-submit" type="submit">
//           Go
//         </button>
//       </form>
//     );
//   };

//   export default InputFeild;
