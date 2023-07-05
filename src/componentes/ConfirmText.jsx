import PropTypes from 'prop-types';

const ConfirmText = ({text, op, userData}) => {
  return (
    <div>
        <h2 className='h2'>{text}</h2>
        <h4 className='h4'>{op}{userData}</h4>
    </div>
  )
}

ConfirmText.propTypes = {
  userData: PropTypes.func,
  text: PropTypes.string,
  op: PropTypes.string,
}


export default ConfirmText