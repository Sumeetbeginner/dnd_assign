import { useDrop } from 'react-dnd'
import Element from './Element'

function Canvas({ elements, selectedElement, onSelectElement, onMoveElement }) {
  const [, drop] = useDrop({
    accept: 'element',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.x + delta.x)
      const top = Math.round(item.y + delta.y)
      onMoveElement(item.id, left, top)
      return undefined
    }
  })

  return (
    <div className="canvas" ref={drop}>
      {elements.map(element => (
        <Element
          key={element.id}
          element={element}
          isSelected={selectedElement === element.id}
          onSelect={onSelectElement}
        />
      ))}
    </div>
  )
}

export default Canvas