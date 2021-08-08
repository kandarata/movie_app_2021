import React from "react";
import PropTypes from "prop-types";

const foodILike = [
	{
		id:1,
		name : "test",
		image: "./test.jpg"
	}
];

function Food({name, picture}) {
	return (
		<div>
			<h2>I like {name}</h2>
			<img src={picture} alt={name}/>
		</div>
	);
}

Food.propTypes = {

}

function renderFood(dish) {
	return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
	<div>
		{foodILike.map(renderFood)}
	</div>
  );
}

export default App;
