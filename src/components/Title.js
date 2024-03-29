import React from 'react'

export default function Title({name, Title}) {
    name = name + ' PRODUCTS';
    return (
        <div className='row'>
            <div className='col-10 mx-auto my-2 text-center text-title'>
                <h1 className='text-capitalize font-weight-bold'>
                {name} <strong className='text-blue'>{Title}
                </strong>
                </h1>
            </div>
        </div>
    )
}
