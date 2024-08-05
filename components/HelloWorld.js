"use client";

function HelloWorld() {
  function onClickHandler() {
    alert("Hello world");
  }
  return <button onClick={onClickHandler}>Press me</button>;
}

export default HelloWorld;
