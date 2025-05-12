function Sidebar({ onAddElement }) {
  const elements = [
    { type: 'text', label: 'Text' },
    { type: 'image', label: 'Image' },
    { type: 'button', label: 'Button' }
  ]

  return (
    <div className="sidebar">
      <h3>Elements</h3>
      <div className="elements-list">
        {elements.map(item => (
          <div
            key={item.type}
            className="element-item"
            onClick={() => onAddElement(item.type)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar