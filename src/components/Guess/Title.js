import React from 'react'
import { useDrag } from 'react-dnd'
import { Button } from 'reactstrap'

const style = {
	padding: '0.5rem 1rem',
	marginRight: '0.5rem',
	marginTop: '0.5rem',
	// marginBottom: "0.5rem",
	cursor: 'move',
	float: 'left'
}

const Title = ({ name, type, isDropped }) => {
	const [{ opacity }, drag] = useDrag({
		item: { name, type },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.4 : 1
		})
	})
	return (
		<div ref={drag}>
			{!isDropped ? (
				<Button color="primary" style={{ ...style, opacity }}>
					{name}
				</Button>
			) : (
				<Button outline color="secondary" style={{ ...style, opacity }}>
					{name}
				</Button>
			)}
		</div>
	)
}
export default Title
