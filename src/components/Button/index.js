import React from 'react'
import './styles.css'

const Button = ({ value, outline, icon, handlerButton }) => {




    return (
        <button className={!outline ? 'btn-filled py-2' : 'btn-outline py-2 px-3'} onClick={handlerButton}>{value} {icon && <img src={icon} alt="icon plus link"></img>}</button>
    )

}
export default Button
