import React from 'react';
import './calculator.css';

const handleClick = function (e) {
  let input = e.target.id;
  let display = document.getElementById("display");
  if (display.value === "0") {
    display.value = input;
    return;
  }
  display.value += input;
}

const handleOperators = function (e) {
  let display = document.getElementById("display");
  const lastCharacter = display.value.slice(display.value.length - 1);
  const operators = ["+", "-", "/", "*"];

  if (operators.includes(lastCharacter)) {
    return;
  }
  if (display.value !== "0") {
    display.value += e.target.id;
  }
}

const handleClearScreen = function () {
  document.getElementById("display").value = 0;
}

const handleEqualTo = function () {
  let display = document.getElementById("display");
  display.value = eval(display.value);
}

const button = function (id, text, onClickEvent) {
  return (<button id={id} onClick={onClickEvent}>{text}</button>)
}

const row1 = function () {
  return (<div className="row1">
    {button("+", "+", handleOperators)}
    {button("-", "-", handleOperators)}
    {button("*", "X", handleOperators)}
    {button("/", "/", handleOperators)}
  </div>)
}

const row2 = function () {
  return (<div className="row2">
    {button("7", "7", handleClick)}
    {button("8", "8", handleClick)}
    {button("9", "9", handleClick)}
  </div>)
}

const row3 = function () {
  return (<div className="row3">
    {button("4", "4", handleClick)}
    {button("5", "5", handleClick)}
    {button("6", "6", handleClick)}
  </div>)
}

const equalTo = function () {
  return (<div className="equalTo">
    {button("=", "=", handleEqualTo)}
  </div>)
}

const row2_3 = function () {
  return (<div className="row2-3">
    <div>
      {row2()}
      {row3()}
    </div>
    {equalTo()}
  </div>)
}

const row4 = function () {
  return (<div className="row4">
    {button("1", "1", handleClick)}
    {button("2", "2", handleClick)}
    {button("3", "3", handleClick)}
  </div>)
}

const zero = function () {
  return (<div className="zero">
    {button("0", "0", handleClick)}
  </div>)
}

const decimal = function () {
  return (<div className="decimal">
    {button(".", ".", handleClick)}
  </div>)
}

const row5 = function () {
  return (<div className="row5">
    {zero()}
    {decimal()}
  </div>)
}

const clearDisplayButton = function () {
  return (<div className="clearDisplayButton">
    {button("AC", "AC", handleClearScreen)}
  </div>)
}

const row4_5 = function () {
  return (<div className="row4-5">
    <div>
      {row4()}
      {row5()}
    </div>
    {clearDisplayButton()}
  </div>)
}

const Calculator = function () {
  return (
    <div className="calculator">
      <input id="display" value="0" readOnly />
      <div className="button-panel">
        {row1()}
        {row2_3()}
        {row4_5()}
      </div>
    </div>
  )
}

export default Calculator;