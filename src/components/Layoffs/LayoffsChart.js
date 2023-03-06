import React from "react";
import Chart from "../Chart/Chart";

const LayoffsChart = (props) => {
    const chartDataPoints = [
        { label: 'Mon', value: 0 },
        { label: 'Tue', value: 0 },
        { label: 'Wed', value: 0 },
        { label: 'Thu', value: 0 },
        { label: 'Fri', value: 0 },
        { label: 'Sat', value: 0 },
        { label: 'Sun', value: 0 },
        // { label: 'Sep', value: 0 },
        // { label: 'Oct', value: 0 },
        // { label: 'Nov', value: 0 },
        // { label: 'Dec', value: 0 },
    ];

    for(const layoff of props.layoffs) {
        const layOffMonth = layoff.date.getDay()-1;
        chartDataPoints[layOffMonth].value += layoff.count;
    }
    return <Chart dataPoints={chartDataPoints} />;
};

export default LayoffsChart;