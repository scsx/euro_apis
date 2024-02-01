import PropTypes from 'prop-types'
import './Blocks.scss'

const OneThirdTextTwoThirdsImage = ({
  title, // Château d'If, Frioul
  text,
  bgcolorText = 'white',
  bgcolorImage,
  imageOnRight = true,
  image,
  extrastyles,
  extraclasses
}) => {
  const inlineStyle = {
    backgroundColor: bgcolorText || undefined,
    ...extrastyles
  }

  const imageHalfStyle = {
    backgroundColor: bgcolorImage || undefined
  }

  const textHalfStyle = {
    backgroundColor: bgcolorText || undefined
  }

  return (
    <section
      className={`block block1text2image ${extraclasses}`}
      style={inlineStyle}>
      <div className='row'>
        <div className={`col-md-4 block1text2image__texthalf ${!imageOnRight ? 'order-2' : ''}`} style={textHalfStyle}>
          <div className='block1text2image__textcontent'>
            <h2 className='block__title'>{title}</h2>
            <div className='block__text'>{text}</div>
          </div>
        </div>
        <div
          className={`col-md-8 block1text2image__imagehalf ${!imageOnRight ? 'order-1' : ''}`}
          style={imageHalfStyle}>
          <img
            className='block__image block1text2image__image'
            src={`./public/deco/${image}`}
            alt={title}
          />
        </div>
      </div>
    </section>
  )
}

OneThirdTextTwoThirdsImage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgcolorText: PropTypes.string,
  bgcolorImage: PropTypes.string.isRequired,
  imageOnRight: PropTypes.bool,
  image: PropTypes.string,
  extrastyles: PropTypes.object,
  extraclasses: PropTypes.string
}

export default OneThirdTextTwoThirdsImage
