import moment from 'moment';

const Appointment = ({ data }) => {
	return (
		<div className='appointment'>
			<div className='appointment__header'>
				<p>{moment(data.plannedTime).format('HH:mm ')}</p>-
				<p>
					{moment(data.plannedTime)
						.add(data.duration, 'hours')
						.format('HH:mm ')}
				</p>
			</div>
			<div className='appointment__footer'>
				<p>{data.address}</p>
				<p>{data.customer}</p>
				<p>{data.postalcode}</p>
			</div>
		</div>
	);
};

export default Appointment;
