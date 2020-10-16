import React from "react";

const Loader = () => {
  return (
    <div>
      <span class="spinner-grow spinner-grow-sm" role="status"></span>
      <span className="sr-only">Loading...</span>
      <span className="text-secondary mr-3">Loading...</span>
    </div>
  );
};

export default Loader;
