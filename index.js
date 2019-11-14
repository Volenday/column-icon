import React from 'react';
import InputIcon from '@volenday/input-icon';

export default ({ editable = false, headerStyle = {}, id, onChange, style = {}, ...defaultProps }) => {
	return {
		...defaultProps,
		filterable: false,
		style: { ...style, display: 'flex', alignItems: 'center' },
		headerStyle: { ...headerStyle, display: 'flex', alignItems: 'center' },
		Cell: ({ original, value }) => {
			if (typeof value == 'undefined') return null;

			if (editable) {
				return (
					<InputIcon
						id={id}
						onChange={(e, field, value) => onChange({ Id: original.Id, [field]: value })}
						withLabel={false}
						value={value}
						placeholder="Select an icon"
					/>
				);
			}

			if (!value) return null;
			return <i class={value} />;
		}
	};
};
