// eslint-disable-next-line react/prop-types
const Card = ({children, color}) => {
  return (
    <div className={`bg-${color}-100 p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card