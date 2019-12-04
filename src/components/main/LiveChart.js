import React, { Component } from "react";
import { Label, LineChart, BarChart, Line, Bar, Brush, CartesianGrid, ReferenceLine,
  XAxis, YAxis, Tooltip, Highlight } from "recharts";

  
  
  
  
  class LiveChart extends Component {
    
    constructor(props) {
      super(props);
      const data = [
        { name: '1', uv: 6.11 },
        { name: '2', uv: 0.39 },
        { name: '3', uv: -1.37 },
        { name: '4', uv: 1.16 },
        { name: '5', uv: 1.29 },
        { name: '6', uv: 0.09 },
        { name: '7', uv: 0.53 },
        { name: '8', uv: 2.52 },
        { name: '9', uv: 0.79 },
        { name: '10', uv: 2.94 },
        { name: '11', uv: 4.3 },
        { name: '12', uv: 7.41 },
        { name: '13', uv: -7.1 },
        { name: '14', uv: -1.17 },
        { name: '15', uv: -1.86 }
      ];
      // const data = props.data;
      console.log("This is the data being passed in as a prop in the LiveChart component", this.props.dataChart);
      const initialState = {
        data,
        barIndex : 'uv',
        left : 0,
        right : 0
      };
    this.state = initialState;
  }
  
  handleChangeData(){  
        
		// shift
    this.setState( ( { data : cdata, left = 0 } ) => {
    	return { 
      	data : cdata.concat( { name : (cdata.length+1)+'', uv : 0} ), 
        animation : true, 
        left : left - 45
        };
    } );  

		// insert
    setTimeout( () => {
    	this.setState( ( { data : cdata } ) => {
    	  cdata[ cdata.length - 1 ].uv = parseInt(Math.random()*10 - 5, 10);
      	return { data : cdata.slice(), animation : true }
      } ); 
    }, 1200 );
  };

  render() {
    const { data, barIndex,animation, left, right } = this.state;

    return (
      <div className="highlight-bar-charts">
 
        <p>Bar Example</p>
          <BarChart 
            width={800} height={250} barGap={5} 
            data={data} 
            margin={{ top: 20, right: 60, bottom: 0, left: 0 }} 
            isAnimationActive={animation}>
          <XAxis dataKey="name" padding={{left: left, right: right}} tick={true} domain={['dataMin -5', 'dataMax + 5']}/>
            <YAxis />
            <CartesianGrid />
            <Bar 
              barSize={50}
              dataKey={barIndex} 
              fill="#ff7300" 
              isAnimationActive={animation}
              animationEasing={'linear'}
              animationDuration={1000}/>
            <ReferenceLine type="horizontal" value={0} stroke="#666" />   
          </BarChart>


        <p>Line Example</p>
          <LineChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <CartesianGrid stroke='#f5f5f5'/>
            <XAxis dataKey="name" padding={{left: left, right: -300}} tick={true} domain={['dataMin -5', 'dataMax + 5']}/>
            <YAxis/>
            <Tooltip />
            <Line type='natural' dataKey={barIndex}  dot={false} stroke='#ff7300' isAnimationActive={animation} animationEasing={'linear'} animationDuration={1000}/>
          </LineChart> 

      </div>
    );
  }
}

export default LiveChart;
