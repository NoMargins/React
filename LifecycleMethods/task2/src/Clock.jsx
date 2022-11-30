import React from 'react';
import './styles.scss';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: this.props.location,
			offset: this.props.offset,
			localTime: new Date(
				new Date().setHours(new Date().getUTCHours() + this.props.offset)
			),
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				localTime: new Date(
					new Date().setHours(new Date().getUTCHours() + this.props.offset)
				),
			});
		}, 1000);
	}

	componentWillUnmount() {
		cleareInterval(this.interval);
	}

	render() {
		return (
			<div className='clock'>
				<div className='clock__location'>{this.props.location}</div>
				<div className='clock__time'>
					{this.state.localTime.toLocaleTimeString('en-US')}
				</div>
			</div>
		);
	}
}

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			location: {
// 				continent: this.props.continent,
// 				city: this.props.city,
// 			},
// 			locationTime: this.showMoment(this.props.continent, this.props.city),
// 		};
// 	}

// 	showMoment = (continent, city) => {
// 		return moment(
// 			new Date().toLocaleString('en-US', {
// 				timeZone: `${continent}/${city}`,
// 			})
// 		).format('hh:mm:ss a');
// 	};

// 	setInterval = setInterval(
// 		() =>
// 			this.setState({
// 				locationTime: this.showMoment(
// 					this.state.location.continent,
// 					this.state.location.city
// 				),
// 			}),
// 		1000
// 	);

// 	componentDidMount() {
// 		this.setInterval;
// 	}

// 	componentWillUnmount() {
// 		cleareInterval(this.setInterval);
// 	}

// 	render() {
// 		return (
// 			<div className='clock'>
// 				<div className='clock__location'>{this.props.city}</div>
// 				<div className='clock__time'>{this.state.locationTime}</div>
// 			</div>
// 		);
// 	}
// }

export default Clock;
