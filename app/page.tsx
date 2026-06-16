"use client";

import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [plan, setPlan] = useState("");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const generatePlan = () => {
    if (!topic) {
      setPlan("Please enter a topic first.");
      return;
    }

    setPlan(`
📚 Personalized Study Plan for ${topic}

Week 1: Learn ${topic} fundamentals
Week 2: Practice exercises and examples
Week 3: Build a mini project using ${topic}
Week 4: Advanced concepts and revision
`);
  };

  const askAI = () => {
    const q = question.toLowerCase();

    if (q.includes("python")) {
      setAnswer(
        "Python is a powerful programming language used for web development, automation, data science, and AI."
      );
    } else if (q.includes("html")) {
      setAnswer(
        "HTML is the standard markup language used to create the structure of web pages."
      );
    } else if (q.includes("css")) {
      setAnswer(
        "CSS is used to style web pages, including colors, layouts, fonts, and responsiveness."
      );
    } else if (q.includes("javascript")) {
      setAnswer(
        "JavaScript adds interactivity to websites such as buttons, forms, animations, and dynamic content."
      );
    } else {
      setAnswer(
        "This is a demo AI tutor response. In a production version, OpenAI API can generate personalized answers."
      );
    }
  };

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🤖 AI Personalized Learning Assistant
      </h1>

      <p style={{ textAlign: "center" }}>
        Personalized learning guidance for interns.
      </p>

      {/* Study Plan Section */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>📚 Study Plan Generator</h2>

        <input
          type="text"
          placeholder="Enter a topic (Python, HTML, AI...)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{
            padding: "10px",
            width: "70%",
            marginRight: "10px",
          }}
        />

        <button
          onClick={generatePlan}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Generate Plan
        </button>

        <pre
          style={{
            marginTop: "20px",
            whiteSpace: "pre-wrap",
          }}
        >
          {plan}
        </pre>
      </div>

      {/* AI Tutor Section */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>🤖 AI Tutor</h2>

        <input
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            padding: "10px",
            width: "70%",
            marginRight: "10px",
          }}
        />

        <button
          onClick={askAI}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Ask AI
        </button>

        <p style={{ marginTop: "15px" }}>
          <strong>Answer:</strong> {answer}
        </p>
      </div>

      {/* Progress Tracker */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>📈 Progress Tracker</h2>

        <p>Completed Lessons: 3 / 5</p>

        <progress value="60" max="100"></progress>

        <p>Progress: 60%</p>
      </div>

      {/* Weak Areas */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>🎯 Weak Area Detection</h2>

        <ul>
          <li>HTML: 90%</li>
          <li>CSS: 80%</li>
          <li>JavaScript: 40%</li>
        </ul>

        <p>
          <strong>Weak Area:</strong> JavaScript
        </p>
      </div>
    </main>
  );
}