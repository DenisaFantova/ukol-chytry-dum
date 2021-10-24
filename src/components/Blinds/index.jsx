import React from 'react'
import './style.css'
import blindsOpen from './images/blinds-open.svg'
import blindsCloses from './images/blinds-closed.svg'

export const Blinds = (state) => {

    return (
        <div className="blinds">
				<div className="blinds__icon">
					<img src={blindsOpen} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className="button button--active">Otevřeno</button>
					<button className="button">Zavřeno</button>
				</div>
			</div>
    )
}

export default Blinds
