import React, { Component } from 'react';
import Square from '../Square/index';
import { canMoveKnight, moveKnight } from "../Game/index";
import { ItemTypes } from "../../constants/index";
import { DropTarget } from 'react-dnd';

/**
 * spec. Все описаные здесь методы будут доступны в monitor(все возвращаенное
 * из методов будет преобразовано к boolean)
 * @type {{canDrop: ((props)), drop: ((props, monitor))}}
 */
const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  },
  drop(props, monitor) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class BoardSquare extends Component {
  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
