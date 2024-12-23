import {
	StyledCheck,
	StyledCheckActives,
	StyledLabel
} from './checkActives.styles';

/* El componente recibe dos props

- change: una función que se ejecuta cuando cambia el valor del checkbock, por ej, al hacer click en él
- activo: un valor booleano que indica si el checkbox que indica si el checkbock debe estar marcado (true) o desmarcado (false) */

/* <StyledCheck> este input: tiene los siguientes atributos: 

- type: checkbox
- checked={activo}: Controla si el checkbox está marcado (true) o no (false).
- onChange={change}: Llama a la función change cuando el usuario interactúa con el checkbox. */

const CheckActives = ({ change, activo }) => {
	return (
		<StyledCheckActives>
            <StyledLabel>Solo Activos</StyledLabel>
			<StyledCheck
				type='checkbox'
				checked={activo}
				onChange={change}
			></StyledCheck>
		</StyledCheckActives>
	);
};

export default CheckActives;