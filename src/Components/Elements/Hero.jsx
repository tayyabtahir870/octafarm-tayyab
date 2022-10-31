import React from 'react'

function Hero() {
  return (
   
    <div className='hero position-relative '>
        <div className='img1'>
        <img className='img-fluid' src="https://octafarm.fi/_next/static/image/src/assets/images/big-oct-front.96ec7b1d19a8fc1425814cd39436228d.png" alt="" width={900} />

        </div>
        <div className='img1'>
        <img className='img-fluid' src="https://octafarm.fi/_next/static/image/src/assets/images/big-oct-middle.6eee263e9ece97d1a30a6c1af9fef181.png" alt="" width={900} />

        </div>
        <div className='img1'>
        <img className='img-fluid' src="https://octafarm.fi/_next/static/image/src/assets/images/big-oct-back.348882dba9fe99cbd191ef5c688ed7e2.png" alt="" width={900} />

        </div>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        Maximize Staking Returns
                        with Auto-Compouning</h1>
                    <h4>Automate your DeFi reinvestment with Octafarm to compound your returns even when you</h4>
                    <br />
                    <button type="button" className="btn btn-primary">Buy on PencakeSwap</button> <br /> <br />
                    <code>
                    Official Contract: <br /> 0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
                    </code> <br /><br />
                    <div>

                    <button type="button" className="btn btn-primary launch">Launch App</button> 
                    <button type="button" className="btn btn-primary launch">Documentation</button>
                    </div>
                </div>
                <div className="col-md-6 v">
                    <div >

                    <video controls src="Assets/farm.mp4"></video>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
   
  )
}

export default Hero