import React from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './../../utils/ItemTypes'
import { Card, CardImg, CardHeader, CardText } from 'reactstrap'

const Pic = ({ image, name, accept, lastDroppedItem, onDrop }) => {
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: ItemTypes.TITLE,
		drop: onDrop,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	})
	const isActive = canDrop && isOver
	let opacity = 1
	if (isActive) {
		opacity = 0.8
	} else if (canDrop) {
		opacity = 1
	}

	return (
		<div
			ref={drop}
			style={{ display: 'inline-block', width: 250, height: 350, padding: 5 }}
		>
			<Card
				inverse
				color={
					(lastDroppedItem &&
						(lastDroppedItem.name === name ? 'success' : 'danger')) ||
					'primary'
				}
			>
				<CardImg src={image} style={{ opacity }} />

				<CardHeader className="text-center">
					{lastDroppedItem && lastDroppedItem.name}
				</CardHeader>

				{isActive ? <CardText>Release to drop</CardText> : ''}
			</Card>
		</div>
	)
}
export default Pic
