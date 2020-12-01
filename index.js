import React, { memo, Suspense } from 'react';
import { Skeleton } from 'antd';
import InputIcon from '@volenday/input-icon';

const browser = typeof process.browser !== 'undefined' ? process.browser : true;

export default ({ editable = false, id, onChange, ...defaultProps }) => {
	return {
		...defaultProps,
		disableFilters: true,
		Cell: props =>
			browser ? (
				<Suspense fallback={<Skeleton active={true} paragraph={null} />}>
					<Cell {...props} other={{ editable, id, onChange }} />
				</Suspense>
			) : null
	};
};

const Cell = memo(({ other: { editable, id, onChange }, row: { original }, value }) => {
	if (typeof value === 'undefined' || !value) return null;

	if (editable) {
		const InputIcon = require('@volenday/input-icon').default;
		return browser ? (
			<InputIcon
				id={id}
				onChange={(e, field, value) => onChange({ Id: original.Id, [field]: value })}
				placeholder="Select an icon"
				withLabel={false}
				value={value}
			/>
		) : null;
	}

	return <i className={value} />;
});
