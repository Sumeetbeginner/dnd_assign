import { useState } from 'react'
import Builder from './components/Builder/Builder'
import PreviewModal from './components/Preview/PreviewModal'
import useBuilder from './hooks/useBuilder.js'

function App() {
  const {
    elements,
    selectedElement,
    addElement,
    updateElement,
    selectElement,
    moveElement,
    removeElement,
    resetCanvas
  } = useBuilder()

  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="app">
      <div className="header">
        <h1>Website Builder</h1>
        <div className="actions">
          <button onClick={resetCanvas}>Reset</button>
          <button onClick={() => setShowPreview(true)}>Preview</button>
        </div>
      </div>
      <div className="builder-container">
        <Builder
          elements={elements}
          selectedElement={selectedElement}
          onAddElement={addElement}
          onUpdateElement={updateElement}
          onSelectElement={selectElement}
          onMoveElement={moveElement}
          onRemoveElement={removeElement}
        />
      </div>
      {showPreview && (
        <PreviewModal
          elements={elements}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  )
}

export default App