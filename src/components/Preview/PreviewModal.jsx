import Element from '../Builder/Element'

function PreviewModal({ elements, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Website Preview</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="preview-canvas">
          {elements.map(element => (
            <Element key={element.id} element={element} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviewModal