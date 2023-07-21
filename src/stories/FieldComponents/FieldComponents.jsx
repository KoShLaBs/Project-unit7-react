import PropTypes from 'prop-types';
import "./FieldComponents.scss"

const FieldComponents = ({type, as, id, name, placeholder, pattern, title, value, onChange, size}) => {
  return (
    <FieldComponents type={type} id={id} as={as} name={name} placeholder={placeholder} autoFocus required pattern={pattern} title={title} value={value} onChange={onChange} className={size} />
  )
}

FieldComponents.propTypes = {
    size: PropTypes.oneOf(["c-big", "cel-pequeño", "cel", "lap-grande", "lap-pequeña", "lap", "monitor", "tablet"]),
    type: PropTypes.string, 
    as: PropTypes.string, 
    id: PropTypes.string,
    name: PropTypes.string, 
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.object, 
    onChange: PropTypes.func,
}


FieldComponents.defaultProps = {
    size: "lap",
    type: "text",
    as: "",
    id: "fullname",
    name: "fullname",
    placeholder: "dame el nombre",
    pattern: "",
    title: "Dame una mayus",
    value: {},
    onChange: undefined,
}

export default FieldComponents