import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { data } from "./data/data";

import './App.css';

const options = {
  legend: {
    display: false,
    position: "bottom"
  },
  rotation: 20,
  plugins: {
    datalabels: {
      color: '#FFF',
      font: {
        size: 16,
        weight: "bold"
      },
      formatter: function(value) {
        if (value === 0) return ""; // don't show the datalabel
        return value + " ฿";
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <h1>Spending</h1>
      <section className="spending-chart">
        <Doughnut data={data} options={options} />
        <div className="amount-saved-text">
          <p className="label-save-up-to">save up to</p>
          <p className="label-amount-saved">3500 ฿</p>
        </div>
      </section>
    </div>
  );
}

export default App;
