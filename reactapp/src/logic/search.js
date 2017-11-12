import Konst from '../konst.js'

const searchOnToken = (things, token) => {

	function strip(x) {

		x = ((x === null) || (x === undefined))
			? ''
			: x.toString()

		return x.toString().trim().toLowerCase()
	}

	token = strip(token)

	// no search token => 
	//
	if ((token === null) | (token === undefined) | (token.length === 0))
		return []

	return things.filter((thing,i,a) => {

		var matches = false

		Object.keys(thing).forEach(function(key,index) {

			if (strip(thing[key]).indexOf(token) !== -1)
				matches = true
		})

		return matches
	})
}

const searchOnTag = (things, tag) => {

	return things.filter((thing,i,a) => {

		var matches = false

		thing.tags.forEach(function(candidateTag,index) {

			if (candidateTag === tag)
				matches = true
		})

		return matches
	})
}

const listAll = (things) => things

const search = (things, searchMode, word, tag) => {
	
	var resultSet = []

	switch (searchMode) {
		
		case Konst.SearchMode.Word:
			resultSet = searchOnToken(things, word)
			break
		case Konst.SearchMode.Tag:
			resultSet = searchOnTag(things, tag)
			break
		case Konst.SearchMode.List:
			resultSet = listAll(things)
			break
		default:
			resultSet = []
	}

	return resultSet
}

export default search