export default {
	transition: function(time) {
		return {
			'MozTransition': 'all ' + time + ' ease',
			'OTransition': 'all ' + time + ' ease',
			'WebkitTransition': 'all ' + time + ' ease',
			transition: 'all ' + time + ' ease'
		};
	},

	transform: function(transformString) {
		return {
			'MozTransform': transformString,
			'OTransform': transformString,
			'WebkitTransform': transformString,
			transform: transformString,
		};
	}
}