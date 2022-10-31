import React from 'react'
import Circle from './Circle'

function Tokenallocation() {
  return (
    <div className='tokenallocation'>
        <div className="container ">
            <div className="row">
            <h1>Token Allocation</h1>
            <div className='token d-flex justify-content-between text-center'>
                <div>
                    <span>Ticker</span>
                    <h1 className='colortext'>OCTF</h1> 
                </div>
                <div>
                    <span>Network</span>
                    <h1 className='colortext'>BSC</h1> 
                </div>
                <div>
                    <span>Total Fixed Supply</span>
                    <h1 className='colortext'>10 Million</h1> 
                </div>
                <div>
                    <span>Emission</span>
                    <h1 className='colortext'>2 Years</h1> 
                </div>

            </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6">

                  <Circle/>

                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="Assets/app.png" alt=" App" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Tokenallocation