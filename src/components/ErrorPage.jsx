import React from "react";

const ErrorPage = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h1>🎡</h1>
      <h3>Woopsie Error </h3>

      <p className="mt-3">Sorry, an unexpected error has occured</p>
    </section>
  );
};

export default ErrorPage;
