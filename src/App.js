import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Davidsito!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          alert("hey!");
        }}
      >
        {" "}
        click me{" "}
      </button>
    </div>
  );
}
