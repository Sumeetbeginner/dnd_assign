import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useBuilder = () => {
  const [elements, setElements] = useState([])
  const [selectedElement, setSelectedElement] = useState(null)

  const addElement = (type) => {
    const defaultProps = {
      text: { content: 'New Text', fontSize: 16, color: '#000000' },
      image: { src: '', alt: 'Image', width: 200 },
      button: { text: 'Click Me', color: '#ffffff', bgColor: '#007bff' }
    }

    const newElement = {
      id: uuidv4(),
      type,
      x: 100,
      y: 100,
      width: type === 'image' ? 200 : 150,
      height: type === 'button' ? 40 : type === 'text' ? 30 : 150,
      props: defaultProps[type]
    }

    setElements([...elements, newElement])
    setSelectedElement(newElement.id)
  }

  const updateElement = (id, newProps) => {
    setElements(
      elements.map(el =>
        el.id === id ? { ...el, props: { ...el.props, ...newProps } } : el
      )
    )
  }

  const selectElement = (id) => {
    setSelectedElement(id)
  }

  const moveElement = (id, x, y) => {
    setElements(
      elements.map(el =>
        el.id === id ? { ...el, x, y } : el
      )
    )
  }

  const removeElement = (id) => {
    setElements(elements.filter(el => el.id !== id))
    if (selectedElement === id) {
      setSelectedElement(null)
    }
  }

  const resetCanvas = () => {
    setElements([])
    setSelectedElement(null)
  }

  return {
    elements,
    selectedElement,
    addElement,
    updateElement,
    selectElement,
    moveElement,
    removeElement,
    resetCanvas
  }
}

export default useBuilder