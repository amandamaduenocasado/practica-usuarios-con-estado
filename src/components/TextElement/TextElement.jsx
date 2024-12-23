import { Styledbox, StyledInput } from './textElement.styles';

const TextElement = ({ textFilter, text }) => {
	return (
		<Styledbox>
			<StyledInput value={text} onInput={textFilter}></StyledInput>
		</Styledbox>
	);
};

export default TextElement;