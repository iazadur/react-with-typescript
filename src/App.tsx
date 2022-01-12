import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

// const user = [
//   {
//     name:"md azadur",
//     age:90,
//     url:"",
//     note:"hello this is note for yours"
//   }
// ]

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "md azadur",
      age: 90,
      url: "",
      note: "hello this is note for yours"
    }
  ])
  // setPeople(user)

  return (
    <div className="App">
      {/* {
        people.map((u, id) => <List people={u} key={id}/>)
      } */}
      <h1>invite you for the page</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
