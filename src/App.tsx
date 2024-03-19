import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Plot from "react-plotly.js";

function App() {
  const data: any = [
    {
      type: "scatter",
      mode: "lines+markers",
      x: [1, 2, 3, 4, 5],
      y: [2.02825, 1.63728, 6.83839, 4.8485, 4.73463],
      hovertemplate:
        "<i>Price</i>: $%{y:.2f}" + "<br><b>X</b>: %{x}<br>" + "<b>%{text}</b>",
      text: ["Text A", "Text B", "Text C", "Text D", "Text E"],
      showlegend: false,
    },
    {
      x: [1, 2, 3, 4, 5],
      y: [3.02825, 2.63728, 4.83839, 3.8485, 1.73463],
      hovertemplate: "Price: %{y:$.2f}<extra></extra>",
      showlegend: false,
    },
  ];

  const layout = {
    title: "Set hover text with hovertemplate",
  };

  return (
    <div className="App">
      <Plot data={data} layout={layout} style={{width: '100%', height: '500px'}}></Plot>
    </div>
  );
}

export default App;
