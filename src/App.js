import moment from 'moment';
import Appointments from './componants/Appointments';
import './style/main.css';

function App() {
	let appointmentsArray = [
		{
			address: 'test street 123',
			postalcode: '90210 CA',
			customer: 'Michael',
			duration: 1,
			plannedTime: moment(),
		},
		{
			address: 'test street 123',
			postalcode: '90210 CA',
			customer: 'Michael',
			duration: 1,
			plannedTime: moment(),
		},
		{
			address: 'test street 123',
			postalcode: '90210 CA',
			customer: 'Michael',
			duration: 1,
			plannedTime: moment(),
		},
	];
	const generateMonthsAppointments = () => {
		for (let i = 0; i < 150; i++) {
			let appointment = {
				address: 'test street 123',
				postalcode: '90210 CA',
				customer: 'Michael',
				duration: 1,
				plannedTime: moment('2021-11-28T12:05:00.000Z').add(
					Math.floor(Math.random() * 10) + 1,
					'days',
				),
			};
			appointmentsArray.push(appointment);
		}
	};
	generateMonthsAppointments();
	console.log(appointmentsArray);
	return (
		<div className='App'>
			<Appointments data={appointmentsArray} />
		</div>
	);
}

export default App;
