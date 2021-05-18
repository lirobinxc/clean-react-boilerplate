import React from 'react';
import './App.scss';

const App = () => {
  return (
    <>
      <h1>{process.env.NODE_ENV} mode</h1>
      <div className="funk">
        <p>Oh yea!</p>
      </div>
    </>
  );
};

/* PROPTYPES */
// App.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default App;
