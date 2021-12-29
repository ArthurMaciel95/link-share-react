import React from 'react'

const Loading = () => {
    return (
        <div className='bg-opacity-25 bg-black position-absolute h-100 d-flex align-items-center w-100 justify-content-center'>
            <div className='bg-white p-5 rounded'>
                <div className="spinner-border text-warning" role="status">

                </div>
            </div>
        </div>
    )
}

export default Loading
