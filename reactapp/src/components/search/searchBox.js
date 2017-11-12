import React from 'react'

const SearchBox = ({text, isFocus, isVisible, onChange}) => (

	<div className={isVisible ? '' : 'hidden'}>
		<input
			className="font-normal"
			value={text} 
			onChange={evt => { onChange(evt.target.value) }}
			placeholder="enter search text..."
		/>
	</div>
)

export default SearchBox