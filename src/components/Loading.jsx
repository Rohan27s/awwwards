import React from 'react'

const Loading = () => {
    return (
        <div className='flex-center absolute z-[100] h-dvh w-screen over bg-blue-50'>
            <div className='three-body'>
                <div className='three-body__dot' />
                <div className='three-body__dot' />
                <div className='three-body__dot' />
            </div>
        </div>
    )
}

export default Loading