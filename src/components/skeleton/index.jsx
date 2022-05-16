import React from 'react'

import { CardSkeleton} from './styles'
import SkeletonCardImage from 'assets/images/skeleton-card-image.png'
const SkeletonCards = () => {
  return (<>
    <CardSkeleton>
      <div className='block-skeleton'></div>
      <div className="body-card d-flex flex-column mx-4">
            <span></span>
            <span></span>
      </div>
      </CardSkeleton>
      <CardSkeleton>
      <div className='block-skeleton'></div>
      <div className="body-card d-flex flex-column mx-4">
            <span></span>
            <span></span>
      </div>
      </CardSkeleton>
      <CardSkeleton>
      <div className='block-skeleton'></div>
      <div className="body-card d-flex flex-column mx-4">
            <span></span>
            <span></span>
      </div>
      </CardSkeleton>
    </>
  )
}

export default SkeletonCards