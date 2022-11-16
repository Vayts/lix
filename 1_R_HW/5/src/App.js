import './App.css';
import {CardList} from "./components/CardList/CardList";

function App() {
	const userData = [{
			name: 'John Doe',
			gender: 'Female',
			picture: 'avatar.png',
			age: 40,
			balance: 2100
		},
		{
			name: 'Magdalena Bahringer Jr.',
			gender: 'Male',
			picture: 'avatar.png',
			age: 19,
			balance: 4221},
		{
			name: 'Mrs. Mitch Kulas',
			gender: 'Female',
			picture: 'avatar.png',
			age: 26,
			balance: 12200
		}]
	
	return (
		<div className="App">
			<CardList userData={userData}/>
		</div>
	);
}

export default App;
