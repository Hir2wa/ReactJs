import { useState, useEffect, useCallback } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("0");
  const [evaluated, setEvaluated] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const operators = ["÷", "x", "-", "+"];
  const isOperator = (value) => operators.includes(value);

  const formatExpression = (expr) => {
    return expr.replace(/x/g, "*").replace(/÷/g, "/");
  };

  const handleNumber = (value) => {
    if (evaluated) {
      setExpression(value);
      setDisplay(value);
      setEvaluated(false);
    } else {
      const lastNumber = expression.split(/[÷x\-+]/).pop();
      if (value === "." && lastNumber.includes(".")) {
        return;
      }

      if (display === "0" && value !== ".") {
        setDisplay(value);
        setExpression(value);
      } else {
        const lastChar = expression[expression.length - 1];
        if (isOperator(lastChar)) {
          setDisplay(value);
          setExpression(expression + value);
        } else {
          setDisplay(display + value);
          setExpression(expression + value);
        }
      }
    }
  };

  const handleOperator = (value) => {
    if (expression === "" && lastResult !== null) {
      setExpression(lastResult + value);
      setDisplay(lastResult.toString());
      setEvaluated(false);
      return;
    }

    if (expression === "") return;

    const lastChar = expression[expression.length - 1];
    if (isOperator(lastChar)) {
      setExpression(expression.slice(0, -1) + value);
    } else {
      setExpression(expression + value);
    }

    const currentNumber = expression.split(/[÷x\-+]/).pop();
    setDisplay(currentNumber || display);
    setEvaluated(false);
  };

  const handleEquals = () => {
    if (expression === "") return;

    try {
      const formattedExpr = formatExpression(expression);
      const result = evaluate(formattedExpr);

      if (!isFinite(result)) {
        throw new Error("Invalid operation");
      }

      const roundedResult = Math.round(result * 100000000) / 100000000;
      setDisplay(roundedResult.toString());
      setExpression("");
      setLastResult(roundedResult);
      setEvaluated(true);
    } catch (error) {
      setDisplay("Error");
      setExpression("");
      setLastResult(null);
      setEvaluated(false);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setExpression("");
    setLastResult(null);
    setEvaluated(false);
  };

  const handlePercent = () => {
    if (expression === "") return;

    try {
      const lastNumber = expression.split(/[÷x\-+]/).pop();
      const percentValue = parseFloat(lastNumber) / 100;

      if (isNaN(percentValue)) return;

      const newExpression =
        expression.slice(0, -lastNumber.length) + percentValue;
      setExpression(newExpression);
      setDisplay(percentValue.toString());
    } catch (error) {
      setDisplay("Error");
      setExpression("");
    }
  };

  const handleSignChange = () => {
    if (display === "0" || display === "Error") return;

    if (evaluated && lastResult !== null) {
      const newResult = -lastResult;
      setDisplay(newResult.toString());
      setLastResult(newResult);
      return;
    }

    const lastNumber = expression.split(/[÷x\-+]/).pop();
    if (lastNumber) {
      const newNumber = -parseFloat(lastNumber);
      const newExpression = expression.slice(0, -lastNumber.length) + newNumber;
      setExpression(newExpression);
    }
  };

  const handleClick = (value) => {
    // switch (value) {
    //   case "AC":
    //     handleClear();
    //     break;
    //   case "=":
    //     handleEquals();
    //     break;
    //   case "%":
    //     handlePercent();
    //     break;
    //   case "+/-":
    //     handleSignChange();
    //     break;
    //   case "0":
    //   case "1":
    //   case "2":
    //   case "3":
    //   case "4":
    //   case "5":
    //   case "6":
    //   case "7":
    //   case "8":
    //   case "9":
    //   case ".":
    //     handleNumber(value);
    //     break;
    //   case "+":
    //   case "-":
    //   case "x":
    //   case "÷":
    //     handleOperator(value);
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleKeyPress = useCallback();
  // (event) => {
  //   const key = event.key;

  //   if (key >= "0" && key <= "9") {
  //     handleClick(key);
  //   } else if (key === ".") {
  //     handleClick(".");
  //   } else if (key === "+" || key === "-") {
  //     handleClick(key);
  //   } else if (key === "*") {
  //     handleClick("x");
  //   } else if (key === "/") {
  //     event.preventDefault();
  //     handleClick("÷");
  //   } else if (key === "Enter" || key === "=") {
  //     event.preventDefault();
  //     handleClick("=");
  //   } else if (key === "Escape" || key === "c" || key === "C") {
  //     handleClick("AC");
  //   } else if (key === "%") {
  //     handleClick("%");
  //   } else if (key === "Backspace") {
  //     if (!evaluated && expression.length > 0) {
  //       const newExpression = expression.slice(0, -1);
  //       setExpression(newExpression);
  //       setDisplay(newExpression || "0");
  //     }
  //   }
  // },
  // [expression, evaluated, lastResult]

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="grid grid-rows-4 items-center justify-center font-bold text-2xl m-20">
      <main>
        <div className="bg-[#7A7B88] w-full h-[60px] text-end text-white text-5xl pr-2">
          {display}
        </div>
        <section className="flex flex-row">
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("AC")}
          >
            AC
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("+/-")}
          >
            &plusmn;
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("%")}
          >
            %
          </button>
          <button
            className="bg-[#F38636] w-[115px] h-[130px] border border-[#7A7B88] text-white"
            onClick={() => handleClick("÷")}
          >
            &divide;
          </button>
        </section>
        <section className="flex flex-row">
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="bg-[#F38636] w-[115px] h-[130px] border border-[#7A7B88] text-white"
            onClick={() => handleClick("x")}
          >
            &times;
          </button>
        </section>
        <section className="flex flex-row">
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="bg-[#F38636] w-[115px] h-[130px] border border-[#7A7B88] text-white"
            onClick={() => handleClick("-")}
          >
            &minus;
          </button>
        </section>
        <section className="flex flex-row">
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="bg-[#F38636] w-[115px] h-[130px] border border-[#7A7B88] text-white"
            onClick={() => handleClick("+")}
          >
            +
          </button>
        </section>
        <section className="flex flex-row">
          <button
            className="bg-[#DBDBDB] w-[230px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="bg-[#DBDBDB] w-[115px] h-[130px] border border-[#7A7B88]"
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className="bg-[#F38636] w-[115px] h-[130px] border border-[#7A7B88] text-white"
            onClick={() => handleClick("=")}
          >
            =
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
