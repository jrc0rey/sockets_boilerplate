var React = require('react'),
	ReactDOM = require('react-dom'),
	io = require('socket.io-client'),
	socket = io.connect();


var Container = React.createClass({
	render: function(){
		return(
			<h1>Hi</h1>
		)
	}

})



ReactDOM.render(<Container />, document.getElementById('app'));