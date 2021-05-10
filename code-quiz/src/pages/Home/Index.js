import React from 'react';

const Home = () => {

    return (
            <div className="flex-row justify-space-between">
                <div className={`col-12 mb-3`}>
                   <h1>Coding Quiz Challenge</h1>
                   <p>Try to answer the following code-related questions within the time limit.
                       Keep in mind that incorrect answers will penalize your score/time by ten seconds!
                   </p>
                </div>
                <button class="btn btn-primary">Start Quiz</button>
            </div>
    );
};

export default Home;
