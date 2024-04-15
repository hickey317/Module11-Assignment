import React from 'react';

function DisplayComponent({ data }) {
  return (
    <div>
      <h2>Joke</h2>
      {data.setup ? <p>{data.setup}</p> : null}
      {data.delivery ? <p>{data.delivery}</p> : <p>{data.joke}</p>}
    </div>
  );
}

export default DisplayComponent;
