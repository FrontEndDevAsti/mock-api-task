import { Toaster } from "sonner";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
