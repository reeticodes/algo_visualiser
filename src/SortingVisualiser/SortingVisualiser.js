import React, { useState, useEffect } from 'react'
import './SortingVisualiser.css';
import { mergeSort, randomize,tester } from './SortingAlgos';
//Geist-UI
import {Grid,Button,Spacer,Row,Col,Slider} from '@geist-ui/react'


// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


function SortingVisualiser() {

  const [array, setarray] = useState([]);
  const [array_size, setarray_size] = useState(50)
  useEffect(() => {

  }, [array])


  const resetArray = (e) => {
    setarray([])
    setarray_size(0)
    setTimeout(() => {
      let newarr = [], sz;
    
    if(e==="") sz=100;
    else sz = e;

    setarray_size(sz)

    for (let i = 0; i < sz; i++) {
      newarr[i] = randomize(5, 600);
    }
    setarray(newarr);
    }, 50);

    
    
  }

  const mergeSortAnimate = () =>{
    let animations = mergeSort(array);

    // 1,2,3
    //change color, revert color, change color,
    //cc,rc,cc,cc,rc,cc,cc,rc,cc,cc,rc,cc,cc,rc,cc,
    //0 ,1 , 2, 3, 4, 5, 6, 7, 8, 9,

    for(let i = 0; i<animations.length; i++){
      const arrayBars = document.getElementsByClassName('number_bar');

      const isColorChange = i%3!==2;
      if(isColorChange){
        const[barOneIdx,barTwoIdx] = animations[i];
        const barOnStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
        const color = i%3==0 ? 'red' : barOnStyle.backgrounColor==='green' ? 'green' : 'turquoise'
        //const color = i%3==0 ?'red': 'turquoise';
        setTimeout(() => {
          barOnStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i*1);
      }
      else{
        setTimeout(() => {
          const [barOneIdx,newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.backgrounColor = 'green';
          barOneStyle.height = `${newHeight}px`
          
        }, i*1);
      }
    }


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
    <Col>
    <Button
      onClick={mergeSortAnimate}
      size="small" type="secondary" ghost>Merge Sort</Button> 
    </Col>
    <Col><Button size="small" type="secondary" ghost>Quick Sort</Button></Col>
    <Col><Button size="small" type="secondary" ghost>Heap Sort</Button></Col>
  </Row>

    <Row  style={{ marginBottom: '15px' }} gap={20}>
    <Button 
      className='button-gradient'
      size="small" type="secondary"  onClick={(e)=>resetArray(50)} shadow  ghost>Generate</Button> 
  </Row>
      <Row  style={{ marginBottom: '15px' }} gap={20}>
    <Button 
      onClick={tester(array)}
      className='button-gradient'
      size="small" type="secondary"   shadow  ghost>TEST ALGORITHM</Button> 
  </Row>
    <Row gap={20} style={{ width: '50%' }}>
      <Slider value={array_size} 
      min={5} max={100}
      onChange={resetArray} />
    </Row>        
      

      <Grid 
      className="number_container">
        {array.map((val, idx) => {
          return <div className="number_bar" style={{height:`${val}px`,}}  key={idx}></div>
        })}
      </Grid>
    </Grid.Container>
  )
}

export default SortingVisualiser


