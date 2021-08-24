import "./App.css";
import ProfileSolution from "./components/ProfileSolution/ProfileSolution";

function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      {isLoggedIn && (
        <ProfileSolution username="FoobarTheBoneless" showAddresses={true} />
      )}
    </div>
  );
}

export default App;
