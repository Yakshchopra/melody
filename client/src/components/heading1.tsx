import React from 'react';

const Heading1 = (props: { value: String }) => {
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Heading1;
