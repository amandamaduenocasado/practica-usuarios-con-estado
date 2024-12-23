import { StyledOption, StyledSelectElement } from './selectElement.styles';

/* El componente recibe dos props: 

- order: valor actual seleccionado en el <select>, controla que opción aparece marcada
- changeOrder: función que se ejecuta cuando el usuario selecciona una nueva opción 

Estas props permiten que el <select> sea un componente controlado, ya que el valor y los cambios se manejan desde el componente padre.

*/
const SelectElement = ({ order, changeOrder }) => {
	return (
		<StyledSelectElement value={order} onChange={changeOrder}>
			<StyledOption value='default'>Por Defecto</StyledOption>
			<StyledOption value='name'>Por Nombre</StyledOption>
		</StyledSelectElement>
	);
};

export default SelectElement;