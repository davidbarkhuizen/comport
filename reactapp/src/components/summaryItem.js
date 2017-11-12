import React from 'react'

const SummaryItem = ({item, onClick}) =>  (

	<div className="summary-item half-width" onClick={() => { onClick(item.id) }}>
		<div className="font-normal">{item.name}</div>
		<div>{item.description}</div>
	</div>
)

export default SummaryItem