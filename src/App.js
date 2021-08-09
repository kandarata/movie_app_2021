import React from "react";
import PropTypes from "prop-types";
import imagesrc from "./test.jpg";

const foodILike = [
	{
		id:1,
		name : "test",
		image: "./test.jpg",
	}
];

function Food({name, image}) {
	return (
		<div>
			<h2>I like {name}</h2>
			<img src={imagesrc} alt={name}/>
		</div>
	);
}

Food.propTypes = {

}

function renderFood(dish) {
	return (
		<Food name={dish.name} image={dish.image} />
	);
}

function App() {
  return (
	<div>
		{foodILike.map(renderFood)}
	</div>
  );
}

export default App;
