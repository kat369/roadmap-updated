import "./App.css";
import Roadmap from "./Roadmap";
import { useState } from "react";

function App() {
  const data = [
    {
      topic: "Basics of HTML",
      content: [
        {
          title: "intro to A",
        },
        {
          title: "Basics of A",
        },
        {
          title: "types of A",
        },
        {
          title: "kind of A",
        },
        {
          title: "product of A",
        },
      ],
      preread: [
        {
          info: "https://roadmap.sh/",
        },
      ],
      task: [
        {
          detail:
            "To read: https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages",
        },
        {
          detail:
            "https://stackoverflow.com/questions/17253545/scripting-language-vs-programming-language https://cs.lmu.edu/~ray/notes/paradigms/",
        },
      ],
    },
    {
      topic: "Basics of HTML forms",
      content: [
        {
          title: "intro to B",
        },
        {
          title: "Basics of B",
        },
        {
          title: "types of B",
        },
        {
          title: "kind of B",
        },
        {
          title: "product of B",
        },
      ],
      preread: [
        {
          info: "https://roadmap.sh/",
        },
      ],
      task: [
        {
          detail:
            "To read: https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages",
        },
      ],
    },
    {
      topic: "Basics of HTML tags",
      content: [
        {
          title: "intro to C",
        },
        {
          title: "Basics of C",
        },
        {
          title: "types of C",
        },
        {
          title: "kind of C",
        },
        {
          title: "product of C",
        },
      ],
      preread: [
        {
          info: "https://roadmap.sh/",
        },
      ],
      task: [],
    },
    {
      topic: "Basics of CSS",
      content: [
        {
          title: "intro to D",
        },
        {
          title: "Basics of D",
        },
        {
          title: "types of D",
        },
        {
          title: "kind of D",
        },
        {
          title: "product of D",
        },
      ],
      preread: [],
      task: [
        {
          detail:
            "To read: https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages",
        },
        {
          detail:
            "https://stackoverflow.com/questions/17253545/scripting-language-vs-programming-language https://cs.lmu.edu/~ray/notes/paradigms/",
        },
        {
          detail:
            "https://stackoverflow.com/questions/17253545/scripting-language-vs-programming-language https://cs.lmu.edu/~ray/notes/paradigms/",
        },
      ],
    },
    {
      topic: "Basics of CSS properties",
      content: [
        {
          title: "intro to E",
        },
        {
          title: "Basics of E",
        },
        {
          title: "types of E",
        },
        {
          title: "kind of E",
        },
        {
          title: "product of E",
        },
      ],
      preread: [
        {
          info: "https://web.dev/learn/css/",
        },
      ],
      task: [
        {
          detail:
            "To read: https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages",
        },
      ],
    },
    {
      topic: "Basics of CSS Boxmodel",
      content: [
        {
          title: "intro to F",
        },
        {
          title: "Basics of F",
        },
        {
          title: "types of F",
        },
        {
          title: "kind of F",
        },
        {
          title: "product of F",
        },
      ],
      preread: [
        {
          info: "https://github.com/",
        },
      ],
      task: [
        {
          detail:
            "To read: https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages",
        },
        {
          detail:
            "https://stackoverflow.com/questions/17253545/scripting-language-vs-programming-language https://cs.lmu.edu/~ray/notes/paradigms/",
        },
      ],
    },
  ];

  const [content, setcontent] = useState();

  {
    var classinfo = content ? content.val : {};
  }

  return (
    <div className="container card">
      <div className="row">
        <div className="col-8">
          {content ? (
            <div>
              <div>{classinfo.topic}</div>

              <div className="top">Content</div>
              {classinfo.content.map((cont) => {
                return <div>{cont.title}</div>;
              })}

              {classinfo.preread == 0 ? (
                <div className="top">No Pre-read Available</div>
              ) : (
                <div className="top">Pre-read</div>
              )}

              {classinfo.preread.map((cont) => {
                return <div>{cont.info}</div>;
              })}

              {classinfo.task == 0 ? (
                <div className="top">No Task</div>
              ) : (
                <div className="top">Task</div>
              )}
              {classinfo.task.map((cont) => {
                return <div>{cont.detail}</div>;
              })}
            </div>
          ) : (
            <div>No Session Detail Available </div>
          )}
        </div>
        <div className="col-4 content">
          {data.map((val, index) => {
            return <Roadmap val={val} index={index} setcontent={setcontent} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
