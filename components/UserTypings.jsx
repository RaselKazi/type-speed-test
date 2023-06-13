import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
export default function UserTypings({ userInput, words, className = "" }) {
  const typedCharacters = userInput.split("");
  const myTheme = createTheme({
    theme: "light",
    settings: {
      background: "#ffffff00",
      foreground: "#ffffff",
      caret: "#fff",
      selection: "#fff",
      selectionMatch: "#fff",
      lineHighlight: "#ffffff00",
      gutterBackground: "#ffffff00",
      gutterForeground: "#ffffff00",
    },
  });
  return (
    <div className={`${className}`}>
      <ReactCodeMirror
        value={`${userInput}`}
        theme={myTheme}
        extensions={[javascript({ jsx: true })]}
        options={{
          lineNumbers: true,
          readOnly: true, // Make the editor read-only
        }}
        className=" absolute  text-xl "
      />
      {/* {typedCharacters.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={char}
          expected={words[index]}
        />
      ))}
      <div className="inline-block bg-yellow-500 w-[1.5px] h-4 animate-pulse"></div> */}
    </div>
  );
}
const Character = ({ actual, expected }) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={`
      
      ${!isCorrect && !isWhiteSpace && "text-red-500"} 
      ${isCorrect && !isWhiteSpace && " text-gray-200"} 
      ${!isCorrect && isWhiteSpace && "bg-red-500/50"}`}
    >
      {expected}
    </span>
  );
};
