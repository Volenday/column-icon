import React, { memo, Suspense } from 'react';
import { Skeleton } from 'antd';
import InputIcon from '@volenday/input-icon';

export default ({ editable = false, id, onChange, ...defaultProps }) => {
	return {
		...defaultProps,
		disableFilters: true,
		Cell: props => (
			<Suspense fallback={<Skeleton active={true} paragraph={null} />}>
				<Cell {...props} other={{ editable, id, onChange }} />
			</Suspense>
		)
	};
};

const Cell = memo(({ other: { editable, id, onChange }, row: { original }, value }) => {
	if (typeof value === 'undefined' || !value) return null;

	if (editable) {
		return (
			<InputIcon
				id={id}
				onChange={(e, field, value) => onChange({ Id: original.Id, [field]: value })}
				placeholder="Select an icon"
				withLabel={false}
				value={value}
			/>
		);
	}

	return <i className={value} />;
});
