import PropTypes from 'prop-types'
import './Blocks.scss'

const SingleText = ({ title, text, bgcolor, bgimage, extrastyles, extraclasses }) => {
  const inlineStyle = {
    backgroundColor: bgcolor || undefined,
    backgroundImage: bgimage ? `url(./public/deco/${bgimage})` : undefined,
    ...extrastyles
  }

  return (
    <section className={`block blocksingletext ${extraclasses}`} style={inlineStyle}>
      <h2 className='block__title'>{title}</h2>
      <div className='block__text'>{text}</div>
    </section>
  )
}

SingleText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
  bgimage: PropTypes.string,
  extrastyles: PropTypes.object,
  extraclasses: PropTypes.string
}

export default SingleText
