import React from 'react';
import InputIcon from '@volenday/input-icon';

export default ({ editable = false, id, onChange, ...defaultProps }) => {
	return {
		...defaultProps,
		disableFilters: true,
		Cell: ({ row, value }) => {
			if (typeof value === 'undefined') return null;

			if (editable) {
				return (
					<InputIcon
						id={id}
						onChange={(e, field, value) => onChange({ Id: row.Id, [field]: value })}
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
