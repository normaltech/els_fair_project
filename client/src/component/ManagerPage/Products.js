import React from 'react'
import Navbar from './Navbar'
import SelectBooth from '../selectbooth/SelectBooth'

function Products() {
    return (
        <>
            <Navbar />
            {/* <div className='products'>
                <h1>사용자관리</h1>
            </div> */}
            <SelectBooth />
        </>
    )
}

export default Products