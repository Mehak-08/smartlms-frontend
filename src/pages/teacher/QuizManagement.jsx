import { useState } from "react";

export default function QuizManagement() {
  const [quizzes, setQuizzes] = useState([
    {
      title: "DSA Quiz 1",
      questions: 10
    }
  ]);

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState("");

  const addQuiz = () => {
    if (!title || !questions) return;

    setQuizzes([
      ...quizzes,
      {
        title,
        questions
      }
    ]);

    setTitle("");
    setQuestions("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Quiz Management</h1>

      <div className="border rounded-xl p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Create Quiz</h2>

        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />

        <input
          type="number"
          placeholder="Number of Questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />

        <button
          onClick={addQuiz}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Create Quiz
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Quizzes</h2>

        <div className="grid gap-4">
          {quizzes.map((quiz, index) => (
            <div key={index} className="border rounded-xl p-4 shadow">
              <h3 className="text-xl font-bold">{quiz.title}</h3>
              <p>{quiz.questions} Questions</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}