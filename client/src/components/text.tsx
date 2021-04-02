import React from 'react';

const Text = (props: { value: String }) => {
  return (
    <div>
      <p>{props.value}</p>
    </div>
  );
};

export default Text;
