import { createBrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import VoiceToTextPage from "./Pages/VoiceToTextPage";
import SpeechReader from "./Pages/SpeechReader";

// Define the routes for the application using createBrowserRouter
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/voicetotext",
    element: <VoiceToTextPage />,
  },
  {
    path: "/speechreader",
    element: <SpeechReader />,
  },
]);
export default routes;
