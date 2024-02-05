import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {

	const card1 = {
		title: 'Card title',
		text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		button: 'Go hidden'
	}

	const card2 = {
		title: 'Special title treatment',
		text: 'With supporting text below as a natural lead-in to additional contant.',
		button: 'Go somewhere'
	}
	
	return (
    <div className=  "App">
      <Card {...card1}>
        {(hidden) => (hidden ? null : <img src={logo} className= "App-logo" alt="logo" />)}
      </Card>
		<Card {...card2}>
		{(hidden) => (hidden = false && <img src={logo} className= "App-logo" alt="logo" />)}
      </Card>
    </div>
  );
}

export default App;
