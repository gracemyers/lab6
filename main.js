import AreaChart from './AreaChart.js';
import StackedAreaChart from './StackedAreaChart.js';

d3.csv("unemployment.csv", d3.autoType).then(data => {
    let Data = data 
    data.map(function(d){
        d.total = d['Agriculture'] + d['Business services'] + d['Construction'] + d['Education and Health'] + d['Finance'] + d['Government'] + d['Information'] + d['Leisure and hospitality'] + d['Manufacturing'] + d['Mining and Extraction'] + d['Other'] + d['Self-employed'] + d['Transportation and Utilities'] + d['Wholesale and Retail Trade'];
            return d;
        })
       

    const stackedAreaChart = StackedAreaChart(".main-chart");

    stackedAreaChart.update(Data);

    const areaChart = AreaChart(".area-chart");

    areaChart.update(Data);

    areaChart.on("brushed", (range)=>{
        stackedAreaChart.filterByDate(range); 
    })
})