import { useState } from 'react'
import Canvas from './Canvas'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'

function Builder({
  elements,
  selectedElement,
  onAddElement,
  onUpdateElement,
  onSelectElement,
  onMoveElement,
  onRemoveElement
}) {
  const [activeTab, setActiveTab] = useState('elements')

  return (
    <>
      <Sidebar onAddElement={onAddElement} />
      <Canvas
        elements={elements}
        selectedElement={selectedElement}
        onSelectElement={onSelectElement}
        onMoveElement={onMoveElement}
      />
      <Toolbar
        selectedElement={selectedElement}
        elements={elements}
        onUpdateElement={onUpdateElement}
        onRemoveElement={onRemoveElement}
      />
    </>
  )
}

export default Builder