
import HomePage from "./pages/HomePage";
import GradientBackground from "./components/GradientBackground";

function App() {
  return (
    <>
      <GradientBackground />
      <div className="relative z-10">
        <HomePage />
      </div>
    </>
  );
}

export default App;
