import FormField from './FormField'
import ColorPicker from './ColorPicker'

function PropertyForm({ element, onUpdate }) {
  const handleChange = (prop, value) => {
    onUpdate(element.id, { [prop]: value })
  }

  const renderFormFields = () => {
    switch (element.type) {
      case 'text':
        return (
          <>
            <FormField
              label="Content"
              type="text"
              value={element.props.content}
              onChange={value => handleChange('content', value)}
            />
            <FormField
              label="Font Size"
              type="number"
              value={element.props.fontSize}
              onChange={value => handleChange('fontSize', parseInt(value))}
            />
            <ColorPicker
              label="Color"
              value={element.props.color}
              onChange={value => handleChange('color', value)}
            />
          </>
        )
      case 'image':
        return (
          <>
            <FormField
              label="Image URL"
              type="text"
              value={element.props.src}
              onChange={value => handleChange('src', value)}
            />
            <FormField
              label="Alt Text"
              type="text"
              value={element.props.alt}
              onChange={value => handleChange('alt', value)}
            />
            <FormField
              label="Width"
              type="number"
              value={element.props.width}
              onChange={value => handleChange('width', parseInt(value))}
            />
          </>
        )
      case 'button':
        return (
          <>
            <FormField
              label="Button Text"
              type="text"
              value={element.props.text}
              onChange={value => handleChange('text', value)}
            />
            <ColorPicker
              label="Text Color"
              value={element.props.color}
              onChange={value => handleChange('color', value)}
            />
            <ColorPicker
              label="Background Color"
              value={element.props.bgColor}
              onChange={value => handleChange('bgColor', value)}
            />
          </>
        )
      default:
        return null
    }
  }

  return <div className="property-form">{renderFormFields()}</div>
}

export default PropertyForm