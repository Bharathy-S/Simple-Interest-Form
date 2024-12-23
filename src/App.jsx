// import { useState } from 'react';
// import './App.css'
// import { TextField, Stack, Button } from '@mui/material';


// function App() {

// // creating 4 states to handle form datas
// //all form datas are digits, we initialize 0 in useState
//  const [interest, setInterest]=useState(0)
//  const [principle, setPrinciple]=useState(0)
//  const [rate, setRate]=useState(0)
//  const [year, setYear]=useState(0)

//  const [invalidPrinciple, setInvalidPrinciple]=useState(false)
//  const [invalidRate, setInvalidRate]=useState(false)
//  const [invalidYear, setInvalidYear]=useState(false)

// //  'inputTag' is an argument
//  const validateInput=(inputTag)=>{
// console.log(inputTag, typeof inputTag);//object

// // using destructuring method to take keys from the object without using '.' and '[]' notation
// const {name, value}=inputTag
// // console.log(name,typeof value);//string
// // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
//  console.log(!!value.match(/^\d+(\.\d+)?$/));
// console.log(!!value.match(/^\d+(\.\d+)$/));


// if(name=='principle'){
// setPrinciple(value)
// // evaluation of expression
// if(value.match(/^\d+(\.\d+)?$/)){
//   setInvalidPrinciple(false)
// }else{
//   // alert("Invalid Principle Amount")
//   setInvalidPrinciple(true)
// }
// }else if(name=="rate"){
//   setRate(value)
//   // evaluation of expression
//   if(value.match(/^\d+(\.\d+)?$/)){
//     setInvalidRate(false)
//   }else{
//     // alert("Invalid Principle Amount")
//     setInvalidRate(true)
//   }
//   }else if(name == 'year'){
//     setYear(value)
//     if(value.match(/^\d+(\.\d+)?$/)){
//       setInvalidYear(false)
//     }else{
//       setInvalidYear(true)
//     }
//   }
// }        




// const handleCalculate=(e)=>{
//   e.preventDefault()
//   console.log("Button clicked");
//   if(principle && rate && year){
//     setInterest(principle*rate*year/100)
//   }else{
//     alert("Please fill the form completely")
//   }

// }


// const handleReset = () =>{
//   setInterest(0)
//   setPrinciple(0)
//   setRate(0)
//   setYear(0)
//   setinvalidPrinciple(false)
//   setinvalidRate(false)
//   setinvalidYear(false)
// }


//   return (
//     <>
//       <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
//         <div style={{ width: '40%' }} className='bg-light p-5 rounded'>
//           <h3>Simple Interest Calculator</h3>
//           <p>Calculate you simple interest</p>

//           <div className='bg-warning p-5 rounded text-center'>
//             <h1> ₹ 1500</h1>
//             <p className='fw-bolder'>Total simple interest</p>
//           </div>
//           <form className='mt-5'>
//             {/* principle Amount*/}
//             <div className='mb-3'>
//               {/* passed 'e' which holds inputvalue from ui and 'validateInput()' is a function */}
//               <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
//             </div>
//             {/* Invalid principle */}
//             {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
//               Invalid Principle Amount
//             </div>}



//             {/* Rate*/}
//             <div className='mb-3'>
//               <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
//             </div>
//              {/* Invalid Rate */}
//              {invalidRate && <div className='text-danger fw-bolder mb-3'>
//               Invalid Rate
//             </div>}



//             {/* Year*/}
//             <div className='mb-3'>
//               <TextField  value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time period (Yr)" variant="outlined" />
//             </div>
//              {/* Invalid Year */}
//              {invalidYear && <div className='text-danger fw-bolder mb-3'>
//               Invalid Year
//             </div>}



//             {/* Button */}
//             <Stack direction="row" spacing={2}>
//               <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%', height:'70px'}} className='bg-dark'>Calculate</Button>

//               <Button onClick={handleReset}  variant="outlined" style={{width:'50%', height:'70px'}} className='border border-dark text-dark'>Reset</Button>
//             </Stack>

//           </form>
//         </div>
//       </div>

//     </>
//   )
// }

// export default App






//practice//////////////

import { useState } from 'react'
import './App.css'
import { TextField, Stack, Button } from '@mui/material'

function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  // states to display invalid statements
  const [invalidPrinciple, setinvalidPrinciple] = useState(false);
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)


  // validation function for all 3 inputs
  const validateInput = (inputTaag) => {
    console.log(inputTaag, typeof inputTaag);//object
    const { name, value } = inputTaag//destructure, bcz its an object
    console.log(name, typeof value);//typeof value is string
    //sring mathcing methods:
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));
// expresion suppoer decimal only: /^\d*\.?\d+)?$/


    if (name == 'principle') {
      setPrinciple(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidPrinciple(false)
      }else {
        setinvalidPrinciple(true)
      }
    } else if(name=='rate'){
      setRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidRate(false)
      }else{
        setinvalidRate(true)
      }
    }else{
      setYear(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidYear(false)
      }else{
        setinvalidYear(true)
      }
    }

  }

//function for Calculate button click
  const handleCalculate=(e)=>{
    e.preventDefault()//predefined fuction of html to prevent unwanted event 
console.log('button clicked');
if(principle && rate && year){
  setInterest(principle*rate*year/100)
}else{
  alert("Please fill the form completely")
}
  }

  //fumction for Reset button
const handleReset=()=>{
setInterest(0);
setPrinciple(0);
setRate(0);
setYear(0);
setinvalidPrinciple(false);
setinvalidRate(false);
setinvalidYear(false);

}
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate Your Simple Interest Easily!</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>{interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-5'>
            {/* Principle Amount */}
            <div className='mt-3'>
              <TextField value={principle || ""} name='principle' onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>
            {/* For Invalid Principle */}
            {/* used {} bcz its javascript */}
            {invalidPrinciple &&
              <div className='text-danger fw-bolder mb-3'>
                Invalid Principle Amount
              </div>}

            {/* Rate */}
            <div className='mt-3'>
              <TextField value={rate || ""} name='rate' onChange={(e) => validateInput(e.target)}  className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
             {/* For Invalid Rate */}
            {invalidRate &&
              <div className='text-danger fw-bolder mb-3'>
                Invalid Rate
              </div>}

            {/* Year */}
            <div className='mt-3'>
              <TextField value={year || ""} name='year' onChange={(e) => validateInput(e.target)}  className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
            </div>
             {/* For Invalid Year */}
            {invalidYear &&
              <div className='text-danger fw-bolder mb-3'>
                Invalid Year
              </div>}

            {/* Buttons */}
            <Stack direction="row" spacing={2} className='mt-4'>
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{ width: '50%', height: '70px' }} className='bg-dark'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '50%', height: '70px' }} className='border border-dark text-dark'>Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App