import "./App.css";
import Welcome from "./Welcome";

function App() {
	return (
		<div className="App">
			<Welcome children="Welcome 1" />
            <Welcome>Saya adalah content</Welcome>
		</div>
	);
}

export default App;
