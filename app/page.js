"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { InputData } from "@/Data/paragraph";
import UserTypings from "@/components/UserTypings";
import ReactCodeMirror from "@uiw/react-codemirror";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { isKeyboardCodeAllowed } from "@/utils/helpers";

export default function Home() {
  const ranIndex = Math.floor(Math.random() * InputData.length);
  const Category = Math.floor(
    Math.random() * InputData[ranIndex].CategoryData.length
  );
  const text = InputData[ranIndex].CategoryData[Category].code;
  const [startTime, setStartTime] = useState(0);
  const [openIndex, setOpenIndex] = useState("");
  const [typeData, setTypeData] = useState(text);
  const [typed, setTyped] = useState("");
  const totalTyped = useRef(0);
  // var x = new Date(startTime);
  // var y = new Date();
  // let seconds = Math.abs(x.getTime() - y.getTime()) / 1000;
  // console.log(seconds);
  let interval;
  const keydownHandler = useCallback(({ key, code }) => {
    // if (startTime === 0) {
    //   interval = setInterval(() => {
    //     setStartTime((pev) => pev + 1);
    //   }, 1000);
    // }

    switch (key) {
      case "Backspace":
        setTyped((prev) => prev.slice(0, -1));
        totalTyped.current -= 1;
        break;
      case "Shift":
        break;
      case "Enter":
        setTyped((prev) => prev.concat("\n"));
        break;
      default:
        setTyped((prev) => prev.concat(key));
        totalTyped.current += 1;
    }
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  const tryAgainBtnHandler = () => {
    const ranIndex = Math.floor(Math.random() * InputData.length);
    const Category = Math.floor(
      Math.random() * InputData[ranIndex].CategoryData.length
    );
    const text = InputData[ranIndex].CategoryData[Category].code;
    setStartTime(0);
    setOpenIndex("");
    setTypeData(text);
    setTyped("");
    clearInterval(interval);
    totalTyped.current = 0;
  };
  return (
    <main className=" h-screen w-screen bg-slate-900 ">
      <div className="  grid grid-cols-4">
        <div className=" col-span-1  h-screen overflow-y-auto">
          {InputData.map((item) => {
            return (
              <div className="  " key={item.id}>
                <p
                  onClick={() => setOpenIndex(openIndex ? "" : item.id)}
                  className=" capitalize p-3 border-b-2  border-sky-700 hover:bg-slate-600 cursor-pointer bg-slate-800 transition-all duration-500 "
                >
                  {item.CategoryTitle}
                </p>
                {item?.CategoryData.map((codeData, k) => {
                  return (
                    <p
                      key={k}
                      onClick={() => setTypeData(codeData.code)}
                      className={` p-3 pl-5 border-b-2  border-sky-700 hover:bg-slate-800 cursor-pointer transition-all duration-500  ${
                        openIndex === item.id ? "  " : " hidden"
                      }`}
                    >
                      {codeData.title}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className=" col-span-3 ">
          <div className="">
            <div className=" relative ">
              <ReactCodeMirror
                value={typeData}
                height="88vh"
                theme={githubDark}
                extensions={[javascript({ jsx: true })]}
                className=" text-gray-200 text-xl "
              />
              <UserTypings
                className=" absolute inset-0 "
                words={typeData}
                userInput={typed}
              />
            </div>
          </div>
          <div className=" border-t-2 border-sky-500  p-4 ">
            <ul className=" grid grid-cols-5 ">
              <li className="">
                <p>Time Left:</p>
                <span>
                  <b>{startTime}</b>s
                </span>
              </li>
              <li className="">
                <p>Mistakes:</p>
                <span>0</span>
              </li>
              <li className="">
                <p>WPM:</p>
                <span>{Math.floor(typed.length / 5)}</span>
              </li>
              <li className="">
                <p>CPM:</p>
                <span>0</span>
              </li>
              <li>
                <p
                  onClick={tryAgainBtnHandler}
                  className="  p-3 border-2 border-sky-500 rounded-lg text-center hover:bg-gray-800 cursor-pointer"
                >
                  Try Again
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
