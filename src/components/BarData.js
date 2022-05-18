import React from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

import { VictoryBar, VictoryAxis, VictoryChart, VictoryTheme } from 'victory'

import '../App.css'

import { Container, Row, Col } from 'react-grid-system'

const data = [
    {
        name: 'USA',
        UserTime: 40,
        ConversionRate: 24,
    },
    {
        name: 'Canada',
        UserTime: 30,
        ConversionRate: 13,
    },
    {
        name: 'India',
        UserTime: 20,
        ConversionRate: 8,
    },
    {
        name: 'Germany',
        UserTime: 27,
        ConversionRate: 39,
    },
    {
        name: 'UK',
        UserTime: 95,
        ConversionRate: 48,
    },
]

export default class BarData extends React.Component {
    render() {
        return (
            <div>
                {/*
                <h1>Country statistics</h1>
                <ResponsiveContainer>
                    <Row className="DataMetricsStyle">
                         
                    <VictoryChart
                    height={200}
  width={200}
    domainPadding={{x: 40}}
  >
    <VictoryBar
     
      data={[
        { experiment: "USA", expected: 3.75, actual: 3.21 },
        { experiment: "Canada", expected: 3.75, actual: 3.38 },
        { experiment: "India", expected: 3.75, actual: 2.05 },
        { experiment: "Germany", expected: 3.75, actual: 3.71 }
      ]}
      x="experiment"
      y={(d) => (d.actual / d.expected) * 100}
    />
    <VictoryAxis
      label="experiment"
      style={{
        axisLabel: { padding: 30 }
      }}
    />
    <VictoryAxis dependentAxis
      label="percent yield"
      style={{
        axisLabel: { padding: 40 }
      }}
    />
</VictoryChart> 
<VictoryChart height={800} width={800}
          domainPadding={{ x: 100, y: [0, 20] }}
          scale={{ x: "time" }}
        >
          <VictoryBar
            
            data={[
              { x: new Date(1986, 1, 1), y: 2 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 5 },
              { x: new Date(2016, 1, 1), y: 4 }
            ]}
          />
        </VictoryChart>
                    </Row>
                </ResponsiveContainer>*/}
            </div>
        )
    }
}
