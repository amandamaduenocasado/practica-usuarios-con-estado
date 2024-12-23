import { useState } from 'react';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import { GlobalStyles } from './styles/GlobalStyles';
import SelectElement from './components/SelectElement/SelectElement';
import CheckActives from './components/CheckActives/CheckActives';
import TextElement from './components/TextElement/TextElement';
import { USERS } from './components/constants/users';

// Usamos useState para manejar tres estados principales
const App = () => {
	const [text, setText] = useState(''); // Texto para filtrar por nombre
	const [active, setActive] = useState(false); // Estado del checkbox (solo activos)
	const [alphaOrder, setAlphaOrder] = useState('default'); // Orden alfabético 

//Declaramos globalFilter y la reasignamos 2 veces 
	let globalFilter = functionText(USERS, text);
		globalFilter = functionCheckBox(active, globalFilter);
		globalFilter = functionSort(alphaOrder, globalFilter);

	return (
		<Container>
			<GlobalStyles />
			<h1>Listado de Usuarios</h1>
			<Filter>
				<TextElement textFilter={() => filterText(event, setText)} textInput={text}/>
				<CheckActives activo={active} change={() => filterActive(active, setActive)}/>
				<SelectElement changeOrder={() => filterOrder(event, setAlphaOrder)} order={alphaOrder}/>
			</Filter>
			{globalFilter.map(user => (
				<Card key={user.userId} {...user} />
			))}
		</Container>
	);
};

const functionText = (USERS, text) => {
	if (text === '') {
		return USERS;
	} else {
		return USERS.filter(user =>
			user.name.toLowerCase().includes(text.toLowerCase())
		);
	}
};

const functionCheckBox = (active, globalFilter) => {
	return globalFilter.filter(user => !active || user.active);
};

// Si alphaOrder es default, devuelve la lista sin ordenar. Si no es default, ordena alfabéticamente usando localeCompare
const functionSort = (alphaOrder, globalFilter) => {
	return alphaOrder === 'default'
		? globalFilter
		: globalFilter.sort((a, b) => a.name.localeCompare(b.name));
};

const filterActive = (setActive, active) => {
	setActive(!active);
	console.log(active);
};

const filterOrder = (event, setAlphaOrder) => {
	setAlphaOrder(event.target.value);
	console.log(event.target.value);
};
const filterText = (event, setText) => {
	setText(event.target.value);
	console.log(event.target.value);
};


export default App;