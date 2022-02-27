import React from 'react'
import { BreadCrumbStyle } from './styles'
import { Link } from 'react-router-dom'
import arrowRightIcon from 'assets/svg/arrow-right-bread-crumb.svg'
const BreadCrumb = ({ crumb }) => {

  console.log(crumb.length)
  return (
    <BreadCrumbStyle>
      {
        crumb.map((m, i) => {
          return <><object key={i} data={m.icon} type=""></object>
            <Link to={`/${m.page.toLowerCase()}`}>
            <p>{m.page}</p>
            </Link>
            { crumb.length - 1 !== i  ? <img src={arrowRightIcon} alt='arrow to right '/> : ''}
            </>
        })
      }
    </BreadCrumbStyle>
  )
}

export default BreadCrumb


