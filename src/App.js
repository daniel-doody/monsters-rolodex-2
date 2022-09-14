import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [currentState, updateFunction]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  // Nothing goes inside this array because we don't ever want it to re-render. We only want it to run onMount,
  // so we pass no dependencies.

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((element) => {
      return element.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  // filter through these monsters whenever either the Monsters Array changes, or whenever the Search Field changes

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="page-title"> Dan's Rolodex of Monsters</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder="Search our monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// const CounterApp = () => {
//   const initialCount = () => {
//     return 10;
//   };
//   const [currentValue, setCount] = useState(() => initialCount());
//   const [theme, setTheme] = useState("Blue");

//   const decrementCount = () => {
//     setCount((prevCount) => prevCount - 5);
//     setCount((prevCount) => prevCount - 5);
//   };

//   const incrementCount = () => {
//     setCount((prevCount) => prevCount + 5);
//     setTheme("Orange");
//   };

//   const changeColor = () => {
//     setTheme(() => (theme = "Red"));
//   };
//   return (
//     <div>
//       <button onClick={decrementCount}> - </button>
//       <span> {currentValue} </span>
//       <span> {theme} </span>
//       <button onClick={incrementCount}> + </button>
//       <button onClick={changeColor}> Change Color</button>
//     </div>
//   );
// };

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((element) => {
//       return element.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="page-title"> Dan's Rolodex of Monsters</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange}
//           className="monsters-search-box"
//           placeholder="Search our monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
// export default CounterApp;

////////////////////////////////////////////////////

class NewClass extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return this.setState(
      (state, props) => {
        // shallow merge
        return;
      },
      () => {
        // update the console.. runs only after the state is fully updated.
        console.log(this.state);
      }
    );
  }
}

class NewClass2 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return;
  }
}

// React uses key value to identify when something needs to re-render. otherwise
// it will have to re - render everything
// unique to react -> only framework that needs keys in the html

// fetching API syntax:
// componentDidMount() {
//   fetch("link")
//   .then(response callback)
//   .then (return setState -> merge the API information into our local object)
// }
// Whenever we have a class component that needs to fetch API data ->
// we want to put that inside our componentDidMount lifecycle method

// Order of functions that React runs:  1-2-3-2
// 1 -> Constructor: (initializes state)
// 2 -> Render: (determines what to show)
// 3 -> componentDidMount: (data gets pulled to complete a re-rendering with new API data)

// Search bar-> event.target.value gives you what has been typed so far

// Speed Optimization -> we like to move our function methods to outside of the render, into the Class->
// this allows us to only call the function 1x, rather than calling the function everytime the page re-renders.

// Functional Components vs. Class Components:
// Functions only run through once, don't have same lifecycle method behavior that classes do
// Functional components: Pure vs. Impure...
// Pure functions will return the same output everytime they are called, Impure functions rely on dynamic
// arguments that may change , therefore the output when the function is called will not always be the same.
// Impure Function Side Effects: Altering a variable outside of the functions scope.

// UseState -> creates two variables, [currentState, setState]
// useEffect -> triggers Side Effects -> takes two arguments (callbackFunction, arrayOfDependencies)
// the callback is going to be the Effect that we want to happen inside of our functional component
// the Array of Dependencies is most likely going to be one of our useState values, or a prop
// You only run the Callback Function if one of the values in the Dependency Array has changed
// Push to GitHub after each component is updated
