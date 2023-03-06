import React, {useState} from "react";
import Layoffs from "./components/Layoffs/Layoffs";
import NewLayoff from "./components/NewLayoff/NewLayoff";
const DUMMY_DATA = [{
  company: "Sleep",
  location: "New York City",
  "count": 8,
  "country": "United States",
  date: new Date("2023-02-07")
}, {
  "company": "Breakfast",
  "location": "Sao Paulo",
  "count": 1,
  "country": "Brazil",
  "date": new Date("2023-02-07")
}];
function App() {
  const [layoffs, setLayoffs] = useState(DUMMY_DATA);

  const addLayoffHandler = layoff => {
    // console.log("IN App js")
    // console.log(layoff);
    setLayoffs(prevLayoffs => {
      return [layoff, ...layoffs];
    });
  };
  return (
    <div>
      <NewLayoff onAddLayoff={addLayoffHandler} />
      <Layoffs items={layoffs}/>
    </div>
  );
}

export default App;