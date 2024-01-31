import React, { useState } from 'react';
import '../assets/css/ChessQuiz.css';

const ChessQuiz = () => {
  const initialQuestions = [
    {
        id: 1,
        text: '1/10 How many squares are there on a standard chessboard?',
        options: [
          { text: '64', isCorrect: true, isSelected: false },
          { text: '56', isCorrect: false, isSelected: false },
          { text: '72', isCorrect: false, isSelected: false },
          { text: '48', isCorrect: false, isSelected: false },
        ],
        correctAnswer: '64',
      },
      {
        id: 2,
        text: '2/10 What is the name of the standard opening move for a pawn?',
        options: [
          { text: 'Pawn to E4', isCorrect: true, isSelected: false },
          { text: 'Pawn to D4', isCorrect: false, isSelected: false },
          { text: 'Pawn to A3', isCorrect: false, isSelected: false },
          { text: 'Pawn to H5', isCorrect: false, isSelected: false },
        ],
        correctAnswer: 'Pawn to E4',
      },
      {
        id: 3,
        text: '3/10 Which piece has an L-shaped movement?',
        options: [
          { text: 'Bishop', isCorrect: false, isSelected: false },
          { text: 'Rook', isCorrect: false, isSelected: false },
          { text: 'Knight', isCorrect: true, isSelected: false },
          { text: 'Queen', isCorrect: false, isSelected: false },
        ],
        correctAnswer: 'Knight',
      },
      {
        id: 4,
        text: '4/10 What is the value of a knight in chess?',
        options: [
          { text: '3', isCorrect: false, isSelected: false },
          { text: '5', isCorrect: false, isSelected: false },
          { text: '9', isCorrect: false, isSelected: false },
          { text: '3.5', isCorrect: true, isSelected: false },
        ],
        correctAnswer: '3.5',
      },
      {
        id: 5,
        text: '5/10 How many players are there on each side in a standard chess game?',
        options: [
          { text: '1', isCorrect: false, isSelected: false },
          { text: '2', isCorrect: false, isSelected: false },
          { text: '3', isCorrect: false, isSelected: false },
          { text: '16', isCorrect: true, isSelected: false },
        ],
        correctAnswer: '16',
      },
      {
        id: 6,
        text: '6/10 Which chess piece can only move diagonally?',
        options: [
          { text: 'Rook', isCorrect: false, isSelected: false },
          { text: 'Bishop', isCorrect: true, isSelected: false },
          { text: 'Pawn', isCorrect: false, isSelected: false },
          { text: 'King', isCorrect: false, isSelected: false },
        ],
        correctAnswer: 'Bishop',
      },
      {
        id: 7,
        text: '7/10 In chess notation, what does "O-O" represent?',
        options: [
          { text: 'Draw', isCorrect: false, isSelected: false },
          { text: 'Checkmate', isCorrect: false, isSelected: false },
          { text: 'Castling kingside', isCorrect: true, isSelected: false },
          { text: 'Stalemate', isCorrect: false, isSelected: false },
        ],
        correctAnswer: 'Castling kingside',
      },
      {
        id: 8,
        text: '8/10 What is the maximum number of moves required to checkmate an opponent in chess?',
        options: [
          { text: '1', isCorrect: false, isSelected: false },
          { text: '2', isCorrect: false, isSelected: false },
          { text: '3', isCorrect: false, isSelected: false },
          { text: 'It varies', isCorrect: true, isSelected: false },
        ],
        correctAnswer: 'It varies',
      },
      {
        id: 9,
        text: '9/10 Which chess piece can jump over other pieces?',
        options: [
          { text: 'Rook', isCorrect: false, isSelected: false },
          { text: 'Knight', isCorrect: true, isSelected: false },
          { text: 'Bishop', isCorrect: false, isSelected: false },
          { text: 'Pawn', isCorrect: false, isSelected: false },
        ],
        correctAnswer: 'Knight',
      },
      {
        id: 10,
        text: '10/10 What is the name of the move in chess where the king and rook are moved simultaneously?',
        options: [
          { text: 'En passant', isCorrect: false, isSelected: false },
          { text: 'Pawn promotion', isCorrect: false, isSelected: false },
          { text: 'Castling', isCorrect: true, isSelected: false },
          { text: 'Fianchetto', isCorrect: false, isSelected: false },
        ],
        correctAnswer: 'Castling',
      },
    // Define your questions here
    // ...
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (selectedOption) => {
    const updatedQuestions = questions.map((question, index) => {
      if (index === currentQuestion) {
        const updatedOptions = question.options.map((option) => ({
          ...option,
          isSelected: option.text === selectedOption,
        }));
        return {
          ...question,
          options: updatedOptions,
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestions(initialQuestions);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const calculateScore = () => {
    const correctAnswers = questions.filter((question) =>
      question.options.find((option) => option.isSelected && option.isCorrect)
    );

    return correctAnswers.length;
  };

  return (
    <div className="quiz-container">
      <h1>Chess Quiz</h1>
      {showResults ? (
        <div className="result-container">
          <p className="result">Your Score: {calculateScore()} out of {questions.length}</p>
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question">{questions[currentQuestion].text}</div>
          <ul className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className={`${
                  option.isSelected ? (option.isCorrect ? 'correct' : 'incorrect') : ''
                }`}
                onClick={() => handleOptionSelect(option.text)}
              >
                {option.text}
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button className="button" onClick={handleNextQuestion}>
              Next Question
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChessQuiz;


