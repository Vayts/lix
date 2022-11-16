'use strict';
const root = ReactDOM.createRoot(document.getElementById('root'));

class JustP extends React.Component {
	render() {
		return React.createElement('p', null, `Привіт, ${this.props.name}`)
	}
}

root.render(
	React.createElement(JustP, {name: 'Антон'}, null),
);


