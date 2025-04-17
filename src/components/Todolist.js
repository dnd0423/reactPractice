import React, { useState } from "react";

function Todolist(props) {
  // 할일 목록을 저장하는 상자
  const [todoList, setTodoList] = useState([]);

  // 새로 추가할 할일 목록을 저장하는 상자
  const [newTodo, setNewTodo] = useState("");

  // 새로운 할일 추가하는 함수
  const addNewTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, newTodo]);
      setNewTodo(""); // 입력 필드를 비워주는 것
    }
  };

  // 할일을 삭제하는 함수(slice 사용)
  const deleteTodo = (index) => {
    // 선택한 할 일을 제외한 새로운 목록 만들기
    const updatedList = [
      ...todoList.slice(0, index), // index 이전의 할일들을 따로 분리해서 todoList에 담기
      ...todoList.slice(index + 1), // index 이후의 순서로 할일들을 가져옴
    ];
    setTodoList(updatedList);
  };

  return (
    <div>
      <h1 style={props.style}>To Do List </h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>추가</button>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
