import moment from 'moment';
import Appointment from './Appointment';

const Appointments = ({ data }) => {
	var groupBy = function (xs, key) {
		return xs.reduce(function (rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
		}, {});
	};
	const grouped = groupBy(data, 'plannedTime');
	console.log(grouped);
	return (
		<div>
			{Object.entries(grouped).map((arr) => (
				<div className='group'>
					<div
						className={`date ${
							moment().format('DD/MM/YYYY') ===
							moment(arr[1][0].plannedTime).format('DD/MM/YYYY')
								? ' today'
								: 'gg'
						}`}>
						<p>{moment(arr[0]).format('ddd')}</p>
						<p className='day'>{moment(arr[0]).format('DD')}</p>
						<p>{moment(arr[0]).format('MMM')}</p>
					</div>
					<ul>
						{arr[1].map((data) => (
							<Appointment data={data} />
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Appointments;
