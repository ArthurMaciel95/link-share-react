import React from 'react'
import { BreadCrumbStyle } from './styles'
import { Link } from 'react-router-dom'
import arrowRightIcon from 'assets/svg/arrow-right-bread-crumb.svg'
const BreadCrumb = ({ crumb }) => {

 
  return (
    <BreadCrumbStyle>
      {
        crumb.map((m, i) => {
          return (
              <div key={i}>
                  <object key={`${i}-1`} data={m.icon} type=""></object>
                  <Link key={`${i}-2`} to={`/${m.page.toLowerCase()}`}>
                      <p className="bread-para">{m.page}</p>
                  </Link>
                  {crumb.length - 1 !== i ? (
                      <img src={arrowRightIcon} alt="arrow to right " />
                  ) : (
                      ""
                  )}
              </div>
          );
        })
      }
    </BreadCrumbStyle>
  )
}

export default BreadCrumb


