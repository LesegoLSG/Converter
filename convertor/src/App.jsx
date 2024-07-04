import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      {/* Provide the routes to the RouterProvider */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
