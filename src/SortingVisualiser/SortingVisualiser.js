import React, { useState, useEffect } from 'react'
import './SortingVisualiser.css';


//Geist-UI
import {Grid,Button,Spacer,Row,Col,Slider} from '@geist-ui/react'

function SortingVisualiser() {

  const [array, setarray] = useState([]);
  const [array_size, setarray_size] = useState(50)
  useEffect(() => {
    console.log(array)
    
  }, [array])


  function randomize(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const resetArray = (e) => {
    
    console.log(e)
    let newarr = [], sz;

    if(e=="") sz=100;
    else sz = e;

    setarray_size(sz)

    for (let i = 0; i < sz; i++) {
      newarr[i] = randomize(5, 600);
    }
    setarray(newarr);
    
  }



  return (
    <Grid.Container gap={2} justify="center" alignItems="center">
      {/* <Grid xs={24} md={24}> */}
      <Row align="middle" justify="center" gap={40} style={{ marginBottom: '15px' , textAlign:'center'}}><h1>SORTING VISUALISER </h1></Row>
      {/* </Grid> */}
      
      <Row gap={.8} style={{ marginBottom: '15px' }}>
    <Col><Button size="small" type="secondary" ghost>Bubble Sort</Button> </Col>
    <Col><Button size="small" type="secondary" ghost>Insertion Sort</Button></Col>
    <Col><Button size="small" type="secondary" ghost>Selection Sort</Button></Col>
  </Row>
  <Row  style={{ marginBottom: '15px' }} gap={.8}>
    <Col><Button size="small" type="secondary" ghost>Merge Sort</Button> </Col>
    <Col><Button size="small" type="secondary" ghost>Quick Sort</Button></Col>
    <Col><Button size="small" type="secondary" ghost>Heap Sort</Button></Col>
  </Row>

    <Row  style={{ marginBottom: '15px' }} gap={20}>
    <Button 
      className='button-gradient'
      size="small" type="secondary"  onClick={(e)=>resetArray(50)} shadow  ghost>Generate</Button> 
  </Row>
    <Row gap={20} style={{ width: '50%' }}>
      <Slider value={array_size} 
      min={5} max={100}
      onChange={resetArray} />
    </Row>        
      

      <Grid 
      className="number_container">
        {array.map((val, idx) => {
          return <div style={{height:`${val}px`}} className="number_bar" key={idx}></div>
        })}
      </Grid>
    </Grid.Container>
  )
}

export default SortingVisualiser
