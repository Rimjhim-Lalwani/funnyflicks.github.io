import React from "react";
import Button from "./Button";
import './styles/Joke.css';
import i from './images/i3.png';
const Joke = () => {
	const [Joke, setJoke] = React.useState("");

	const fetchApi = () => {
		fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
			.then((res) => res.json())
			.then((data) => setJoke(data.joke));
	};

	return (
		
		<div className="joke">
			<div className="heading">
            random jokes<div className='imagei2'>
        <img src={i} height="200px" width="200px"  />
        </div>
            </div>
            <div className="line">
                <hr/>
                </div>
				<div className="contain">
					<p>{Joke}</p></div>
			<Button callApi={fetchApi} /> 
			 
		</div>
	);
}

export default Joke;
