import React from "react";
import './weather.styl'
function Weather(props){
	return(

		<section className={props.city=== undefined? "" :"active text-center"}>
			 {	
			 	props.city && <h2 className="text-center">
	 		 		<span className="text-center"> { props.city }</span>
	 		 	</h2> 
	 		 }
	 		 { 	
	 		 	props.temperature && <p className="weather__key"> Temperature: 
	 		 		<span className="weather__value"> { props.temperature }	</span>
	 		 	</p> 
	 		 }
	 		 { 	
	 		 	props.humidity && <p className="weather__key"> Humidity: 
	 		 		<span className="weather__value"> { props.humidity } </span>
	 		 	</p> 
	 		 }
	 		 { 	
	 		 	props.description && <p className="weather__key"> Conditions: 
	 		 		<span className="weather__value"> { props.description } </span>
	 		 </p> 
	 		 }
	 		 { 
	 		 	props.error && <p className="weather__error">{ props.error }</p>  
	 		 }
		</section>
	);
}

export default Weather;
