import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => {
	const { editable = false, headerStyle = {}, id, onChange, style = {}, ...defaultProps } = props;

	return {
		...defaultProps,
		filterable: false,
		style: { ...style, display: 'flex', alignItems: 'center' },
		headerStyle: { ...headerStyle, display: 'flex', alignItems: 'center' },
		Cell: ({ index, original, value }) => {
			if (!value) return null;

			let newValue = value;
			const valueSplit = newValue.split(' ');
			if (valueSplit.length == 2) {
				const iconSplit = valueSplit[1].split('-');
				iconSplit.shift();
				newValue = [valueSplit[0], iconSplit.join('-')];
			}
			return <FontAwesomeIcon icon={newValue} />;
		}
	};
};
