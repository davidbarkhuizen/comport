import React from 'react'

const tagClass = (isActive) => (isActive === false)
	? "btn btn-default tag"
	: "btn btn-primary tag"

const Tag = ({tag, isActive, onClick}) => (

	<a 
		onClick={()=> onClick(tag)}
		className={tagClass(isActive)}
		role="button">{tag}</a>
)

export default Tag