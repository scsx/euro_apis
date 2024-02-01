import PropTypes from 'prop-types'
import './Blocks.scss'

const SingleText = ({ title, paragraph, bgcolor, bgimage, extrastyles }) => {
  const inlineStyle = {
    backgroundColor: bgcolor || undefined,
    backgroundImage: bgimage ? `url(./public/deco/${bgimage})` : undefined,
    ...extrastyles
  }

  return (
    <section className='block blocksingletext' style={inlineStyle}>
      <h2 className='blocksingletext__title'>{title}</h2>
      <div className='blocksingletext__text'>{paragraph}</div>
    </section>
  )
}

SingleText.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
  bgimage: PropTypes.string,
  extrastyles: PropTypes.object
}

export default SingleText
