function ColorPicker({ label, value, onChange }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        type="color"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span>{value}</span>
    </div>
  )
}

export default ColorPicker