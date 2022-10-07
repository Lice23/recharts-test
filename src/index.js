import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, LabelList, LineChart, Legend, Line } from 'recharts';

const evoData = [
  {
    name: 'jan.-22',
    uv: 29,
    pv: 4,
    amt: 27,
  },
  {
    name: 'fev.-22',
    uv: 30,
    pv: 6,
    amt: 28,
  },
  {
    name: 'mar.-22',
    uv: 32,
    pv: 6,
    amt: 30,
  },
  {
    name: 'abr.-22',
    uv: 35,
    pv: 6,
    amt: 30,
  },
  {
    name: 'mai.-22',
    uv: 35,
    pv: 6,
    amt: 30,
  },
  {
    name: 'jun.-22',
    uv: 36,
    pv: 4,
    amt: 30,
  },
  {
    name: 'jul.-22',
    uv: 34,
    pv: 8,
    amt: 37,
  },
];

class EvoPipeline extends React.Component {
  render () {
    return (
      <ResponsiveContainer width="100%" height="100%" className={"chart"}>
        <AreaChart
          width={500}
          height={400}
          data={evoData}
          margin={{
            top: 50,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
              <tspan fontSize="20">Evolução da Pipeline</tspan>
          </text> */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="linear" dataKey="uv" stackId="1" stroke="#4472C4" strokeWidth={4} fill="#C7D4ED">
          </Area>
          <Area type="linear" dataKey="pv" stackId="1" stroke="#FF0000" strokeWidth={4} fill="#FFB2B2">
          </Area>
          <Area type="linear" dataKey="amt" stackId="1" stroke="#A5A5A5" strokeWidth={4} fill="#E4E4E4">
            <LabelList dataKey="uv" position="top" fill="#4472C4" />
            <LabelList dataKey="pv" position="top" offset={20} fill="#FF0000" />
            <LabelList dataKey="amt" position="top" offset={35} fill="#A5A5A5" />
          </Area>
          <Legend/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

const econData = [
  {
    name: 'jan.-22',
    fte: 172068.44,
    exec: 132753.44,
    hours: 3359.36
  },
  {
    name: 'fev.-22',
    fte: 168492.29,
    exec: 126833.11,
    hours: 2329.23
  },
  {
    name: 'mar.-22',
    fte: 174276.59,
    exec: 133674.58,
    hours: 3402.65
  },
  {
    name: 'abr.-22',
    fte: 159785.39,
    exec: 124757.03,
    hours: 3189.36
  },
  {
    name: 'mai.-22',
    fte: 168059.03,
    exec: 131583.34,
    hours: 3344.12
  },
  {
    name: 'jun.-22',
    fte: 162779.42,
    exec: 127480.79,
    hours: 3238.72
  },
  {
    name: 'jul.-22',
    fte: 155081.28,
    exec: 126882.05,
    hours: 3095.65
  }
]

class EconChart extends React.Component {
  render() {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });


    return (
    <ResponsiveContainer width="100%" height="100%" className={"chart"}>
      <LineChart 
        width={500}
        height={400}
        data={econData}
        margin={{
          top: 50,
          right: 30,
          left: 0,
          bottom: 0,
        }} 
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value, name, props) => {
          if(name.localeCompare("fte") === 0) {
            return [formatter.format(value), "Custos FTE (R$)"];
          }
          if(name.localeCompare("exec") === 0) {
            return [formatter.format(value), "Custos de execução (R$)"];
          }
          if(name.localeCompare("hours") === 0) {
            return [value, "Horas FTE"];
          }

          return null;
        }}/>
        <Legend />
        <Line type="linear" dataKey="fte" stroke="#ED7D31" strokeWidth={4}></Line>
        <Line type="linear" dataKey="exec" stroke="#A5A5A5" strokeWidth={4}></Line>
        <Line type="linear" dataKey="hours" stroke="#4472C4" strokeWidth={4}></Line>
      </LineChart>
    </ResponsiveContainer>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div>
      <h2 className="title">Evolução da Pipeline</h2>
      <EvoPipeline />
    </div>
    <div>
      <h2 className="title">Economia de Custos e Horas</h2>
      <EconChart />
    </div>
  </div>
  
);