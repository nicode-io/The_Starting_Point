import './Chart.css'
import ChartBar from './ChartBar';


const Chart = props => {
    // Get dataPoint number values
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // Get maximum value for dataPoint numbers
    const totalMaximum = Math.max(...dataPointValues); // Spread operator mak values individuals

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart
