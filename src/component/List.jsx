(function () {
	'use strict';
	var React = require('react');
	var ListItem = require('./ListItem.jsx');

	var ingredients = [{'id':1,text:'ham'},{'id':2,text:'John'},{'id':3,text:'foo'},{'id':4,text:'bar'}];

	var List = React.createClass({
		render: function() {
			var listItems = ingredients.map(function(item){
				return <ListItem key={item.id} ingredient={item.text} />;
			});

			return (<ul><li>{listItems}</li></ul>);
		}
	})

	module.exports = List;
})(); 