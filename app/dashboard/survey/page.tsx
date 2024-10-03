'use client';
import { useState, useEffect } from 'react';
import Page from "./ui"

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
          
          <Page/>
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
