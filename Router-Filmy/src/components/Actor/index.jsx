import React from 'react';

export const Actor = ({ name, as }) => {
  return (
    <div>
      <p>{name}</p>
      <p>as {as}</p>
    </div>
  );
};
