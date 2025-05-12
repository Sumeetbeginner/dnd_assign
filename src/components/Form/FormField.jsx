function FormField({ label, type, value, onChange }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default FormField