import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useRef, useEffect } from "react";
import Loading from "../../Loader";
import ChartWrapper from "./wrapper";

const ChartComponent = () => {

    const chartData = useRef(null);
    const loading = useRef(true);
    
    useEffect(() => {
      
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GME&outputsize=compact&apikey=${process.env.REACT_APP_ALPHA_API}`
      )
      .then((res) => {
          let array = [];

          let dataArray = Object.values(res.data["Time Series (Daily)"]);
          for (let i = 30; i > 0; i--) {
              array.push(parseFloat(dataArray[i]["4. close"]));
          }

          chartData.current = array;
          console.log("array: ", array);
        //   for (let i = 0; i < 30; i++) {
        //       array
        //   }
        
        // for (let i = 10; i < 30; i++) {
        //   if (i === 10 || i === 11) {
        //     array.push(
        //       parseFloat(
        //         res.data["Time Series (Daily)"][`2020-12-${i}`]["1. open"]
        //       )
        //     );
        //   }
        //   if (i >= 14 && i <= 18) {
        //     array.push(
        //       parseFloat(
        //         res.data["Time Series (Daily)"][`2020-12-${i}`]["1. open"]
        //       )
        //     );
        //   }
        // }
        // chartData.current = array[0];
        // console.log("chart data: ", chartData);
      });
        loading.current = false;
  });     
    if (!loading) {
     return (
    <>
          <Row>
              
              <Col style={{ height: "100vh" }}>{chartData && <ChartWrapper chartData={chartData} />} </Col>
              
      </Row>
    </>
  );
    } else {
        return <div>Test</div>
}
 
};

export default ChartComponent;
