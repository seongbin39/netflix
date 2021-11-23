import React from 'react'
import loadingImg from 'assets/images/loading.gif'

import './Loading.css'

const Loading = () => {
    return(
        <div className='loading-container'>
            <img className='loading-img' src={loadingImg} alt="Loading-Img" />
        </div>
    )
}

export default Loading