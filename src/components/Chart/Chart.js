import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={maxValue}
          label={dataPoint.label}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
