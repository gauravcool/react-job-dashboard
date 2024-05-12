import PropTypes from 'prop-types';

const Card = ({children, color}) => {
  return (
    <div className={`bg-${color}-100 p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.object,
  color: PropTypes.object
}

export default Card