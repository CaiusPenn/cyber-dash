'use client';
import { useState, useEffect } from 'react';

export default function Survey() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userId, setUserId] = useState<number>(1); // Replace with actual user ID

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/questions'); // Adjust API endpoint as needed
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleAnswerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const questionId = questions[currentQuestionIndex].id; // Assuming each question has an ID

    try {
      await fetch('/api/submit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, questionId, answer: selectedAnswer }),
      });

      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
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
      setSelectedAnswer(answers[currentQuestionIndex - 1] || '');
    }
  };

  return (
    <div className="survey-container">
      <h1>Survey</h1>
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <form onSubmit={handleAnswerSubmit}>
          <label>
            {questions[currentQuestionIndex].question} {/* Adjust property based on your data */}
          </label>
          <div className="button-group mt-4">
            {['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'].map(answer => (
              <button
                key={answer}
                type="button"
                onClick={() => handleAnswerSelect(answer)}
                className={`p-2 rounded ${
                  selectedAnswer === answer
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-800'
                }`}
                style={{ margin: '0 5px' }} // Add spacing between buttons
              >
                {answer}
              </button>
            ))}
          </div>
          <div className="mt-4">
            {currentQuestionIndex > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="previous-button mr-2 p-2 rounded bg-gray-300 text-gray-800"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              disabled={!selectedAnswer}
              className="next-button p-2 rounded bg-blue-600 text-white"
            >
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
