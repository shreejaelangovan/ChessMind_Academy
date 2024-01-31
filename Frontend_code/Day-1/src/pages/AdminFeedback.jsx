import React, { useState, useEffect } from 'react';
import '../assets/css/AdminFeedback.css'; // Make sure to import your CSS file
import AdminSidebar from '../components/AdminSidebar';

const AdminFeedback = () => {
  const [feedbackList, setFeedbackList] = useState(() => {
    const storedFeedback = localStorage.getItem('feedbackList');
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : [
          { id: 1, name: 'Albert', email: 'albert@example.com', message: 'Great website!', answer: '' },
          { id: 2, name: 'Jake', email: 'jake@example.com', message: 'Found a bug.', answer: '' },
          { id: 3, name: 'Smitha', email: 'smitha@example.com', message: 'Great website!', answer: '' },
          { id: 4, name: 'Aryan', email: 'aryan@example.com', message: 'Found a bug.', answer: '' },
          { id: 5, name: 'Lalli', email: 'lalli@example.com', message: 'Great website!', answer: '' },
          // Add more feedback as needed
        ];
  });
  
  
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    console.log(feedbackList); // Log the feedbackList to console
  }, [feedbackList]);;

  const handleEditAnswer = (feedbackId, currentAnswer) => {
    setEditingAnswerId(feedbackId);
    setNewAnswer(currentAnswer);
  };

  const handleSaveAnswer = (feedbackId) => {
    setFeedbackList((prevFeedback) =>
      prevFeedback.map((feedback) =>
        feedback.id === feedbackId ? { ...feedback, answer: newAnswer } : feedback
      )
    );
    setEditingAnswerId(null);
  };

  const handlePostAnswer = (feedbackId) => {
    setFeedbackList((prevFeedback) =>
      prevFeedback.map((feedback) =>
        feedback.id === feedbackId ? { ...feedback, answer: newAnswer } : feedback
      )
    );
    alert('Answer posted successfully!');
  };

  const handleCancelEdit = () => {
    setEditingAnswerId(null);
  };

  return (
    <>
      <div className='feedback-page'>
        <AdminSidebar />
        <h2>Feedback Page</h2>
        <table className='feedback-list'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.map((feedback) => (
              <tr key={feedback.id} className='feedback-box'>
                <td>{feedback.id}</td>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.message}</td>

                {editingAnswerId === feedback.id ? (
                  <td className='edit-form'>
                    <textarea
                      placeholder='Type your answer...'
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                    />
                  </td>
                ) : (
                  <td>{feedback.answer}</td>
                )}

                <td className='feedback-actions'>
                  {editingAnswerId === feedback.id ? (
                    <>
                      <button onClick={() => handleSaveAnswer(feedback.id)}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditAnswer(feedback.id, feedback.answer)}>
                        Edit
                      </button>
                      <button onClick={() => handlePostAnswer(feedback.id)}>Post</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminFeedback;
