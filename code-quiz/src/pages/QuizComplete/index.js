import React from 'react';

const QuizComplete = () => {
  return (
    <div>
      <h1>All Done!</h1>
      <p>Your final score is XX</p>
      <form class="">
        <label class="row">
          <h3>Enter initials:</h3>
          <input type="text" name="name" />
          <div>
            <input class="btn btn-primary" type="submit" value="Submit" />
          </div>
        </label>
      </form>
    </div>
  );
};

export default QuizComplete;