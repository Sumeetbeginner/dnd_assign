import { useDrag } from 'react-dnd'

function Element({ element, isSelected, onSelect }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { id: element.id, x: element.x, y: element.y },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const renderElement = () => {
    switch (element.type) {
      case 'text':
        return (
          <div style={{
            fontSize: element.props.fontSize,
            color: element.props.color
          }}>
            {element.props.content}
          </div>
        )
      case 'image':
        return (
          <img
            src={element.props.src || 'https://via.placeholder.com/200'}
            alt={element.props.alt}
            style={{ width: element.props.width }}
          />
        )
      case 'button':
        return (
          <button style={{
            backgroundColor: element.props.bgColor,
            color: element.props.color
          }}>
            {element.props.text}
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div
      ref={drag}
      className={`element ${isSelected ? 'selected' : ''}`}
      style={{
        position: 'absolute',
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
      onClick={() => onSelect(element.id)}
    >
      {renderElement()}
    </div>
  )
}

export default Element