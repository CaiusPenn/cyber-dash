'use client'
import { useState } from 'react';

export default function Survey() {
  const questions = [
    'What is your name?',
    'How old are you?',
    'What is your favorite color?',
    'What is your occupation?',
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [userId, setUserId] = useState<number>(1); // Replace with actual user ID

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAnswer(event.target.value);
  };

  const handleAnswerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Update answers state
    const newAnswers = [...answers, currentAnswer];
    setAnswers(newAnswers);

    try {
      // Send answer to API route
      await fetch('/api/submit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, question: questions[currentQuestionIndex], answer: currentAnswer }),
      });

      // Move to the next question or finish the survey
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(''); // Clear the input field for the next question
      } else {
        alert('Survey complete! Thank you for your answers.');
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('Error submitting survey. Please try again.');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentAnswer(answers[currentQuestionIndex - 1] || ''); // Restore previous answer
    }
  };

  return (
    <div className="survey-container">
      <h1>Survey</h1>
      {currentQuestionIndex < questions.length ? (
        <form onSubmit={handleAnswerSubmit}>
          <label>
            {questions[currentQuestionIndex]}
            <input
              type="text"
              name="answer"
              value={currentAnswer}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 mt-1"
            />
          </label>
          <div className="button-group mt-4">
            {currentQuestionIndex > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="previous-button mr-2 p-2 rounded bg-gray-300 text-gray-800"
              >
                Previous
              </button>
            )}
            <button type="submit" className="next-button p-2 rounded bg-blue-600 text-white">
              {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Survey Complete</h2>
          <p>Thank you for completing the survey!</p>
          <p>Your answers: {answers.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
