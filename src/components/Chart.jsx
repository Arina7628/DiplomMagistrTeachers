import React,{ Component } from "react";
import Plot from "react-plotly.js";

export class Chart extends Component {
  render() {
    return (
      <div>
        <Plot
        data={[
          {type: 'bar',
            x: ['2017', '2018', '2019', '2020', '2021'],
            y: [74,29,62,78,48]}
        ]}
        />
      </div>
    )
  }
}

export default Chart;