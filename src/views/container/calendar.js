import React,{Component} from 'react'
import moment from 'moment'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Calendar extends Component{
	constructor(props){
		super(props)
		this.state={
			startDate:null,
			endDate:null,
			focusedInput:null,
			date:null,
			focused:null
		}
	}
	render(){
		const BAD_DATES = [moment(), moment().add(10, 'days')];
console.log( BAD_DATES)
const isDayBlocked = day => BAD_DATES.filter(d => d.isSame(day, 'day')).length > 0;
console.log( isDayBlocked)
		return(

			<div>

					<DateRangePicker
					startDate={this.state.startDate} // momentPropTypes.momentObj or null,
					startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
					endDate={this.state.endDate} // momentPropTypes.momentObj or null,
					endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
					onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
					focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
					/>
					<div>
						
						<SingleDatePicker
  						date={this.state.date} // momentPropTypes.momentObj or null
  						onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  						focused={this.state.focused} // PropTypes.bool
  						onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  						id="your_unique_id" // PropTypes.string.isRequired,
						/>
					</div>

					<div>
						<DayPickerRangeController
  						startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  						endDate={this.state.endDate} // momentPropTypes.momentObj or null,
 						onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  						focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  						onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
  						isDayBlocked={isDayBlocked}
						/>	
					</div>

			</div>
		)
	}
}
export default Calendar