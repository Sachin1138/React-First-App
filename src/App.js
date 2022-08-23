// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Answer from "./components/Answer";

function App() {
  let info = [
    {
      name: "Sachin",
      place: "India",
      infox: {
        a: 1,
        b: 2
      }
    },
    { name: "Ajay", place: "USA" },
    { name: "Prajakta", place: "UK" },
    { name: "Ganesh", place: "Africa" },
    { name: "Gaurav", place: "Uganda" },
    { name: "Sourabh", place: "Brazil" },
    { name: "Sandy", place: "Algeria" },
    { name: "Steve", place: "Russia" },
    { name: "Thomas", place: "India" }
  ];
  // let u1 = "Sachin",
  //   u2 = "Ajay",
  //   u3 = "Prajakta";
  return (
    <div className="App">
      <Hello></Hello>
      <h1>New:1</h1>

      {info.map(user => (
        <div key={user.name}>
          <Answer {...user} />
        </div>
      ))}
    </div>
  );
}

export default App;
