import React from 'react'


import { LoadingComponent } from './styles'

const Loading = () => {


    return (
        <LoadingComponent className=''>
            <div className='bg-white p-5 rounded'>
                <div className="spinner-border text-warning" role="status">
                    <span className="invisible">Loading...</span>
                </div>
            </div>
        </LoadingComponent>
    )
}

export default Loading
