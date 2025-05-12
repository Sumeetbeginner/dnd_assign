import PropertyForm from '../Form/PropertyForm'

function Toolbar({ selectedElement, elements, onUpdateElement, onRemoveElement }) {
  const element = elements.find(el => el.id === selectedElement)

  return (
    <div className="toolbar">
      <h3>Properties</h3>
      {element ? (
        <>
          <PropertyForm element={element} onUpdate={onUpdateElement} />
          <button onClick={() => onRemoveElement(element.id)}>Remove</button>
        </>
      ) : (
        <p>Select an element to edit properties</p>
      )}
    </div>
  )
}

export default Toolbar