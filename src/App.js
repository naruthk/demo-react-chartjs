import { Doughnut } from 'react-chartjs-2';

import { data } from "./data/data";

import './App.css';

const options = {
  legend: {
    position: "bottom"
  }
}

function App() {
  return (
    <div className="App">
      <h1>Interactive Chart using Chart.js</h1>

      <Doughnut data={data} options={options} />
    </div>
  );
}

export default App;
