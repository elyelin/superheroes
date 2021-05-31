import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
