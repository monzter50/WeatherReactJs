import React from 'react';
import './city.styl'


function City(props){
	return(
		<form className="row d-flex justify-content-center" onSubmit={props.getWeather}>
			<div className="form-group">
				<input type="text"  name="city" placeholder="City..."/>
				<button className="btn">Send</button>
			</div>
		</form>
	);
}
export default City;