import PropTypes from 'prop-types'
import './Blocks.scss'

const TextWithImage = ({
  title, // Château d'If, Frioul
  text,
  bgcolorText = 'white',
  bgcolorImage,
  imageOnRight = true,
  imageIsTwoThirds,
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

  // imageIsTwoThirds: true for yes, false for text being two thirds, undefined for 50% each
  let textColWidth, imageColWidth

  if (imageIsTwoThirds === undefined) {
    textColWidth = 'col-md-6'
    imageColWidth = 'col-md-6'
  } else if (imageIsTwoThirds) {
    textColWidth = 'col-md-4'
    imageColWidth = 'col-md-8'
  } else {
    textColWidth = 'col-md-8'
    imageColWidth = 'col-md-4'
  }

  return (
    <section
      className={`block textwithimage ${extraclasses}`}
      style={inlineStyle}>
      <div className='row'>
        <div
          className={`textwithimage__texthalf ${textColWidth} ${
            !imageOnRight ? 'order-2' : ''
          }`}
          style={textHalfStyle}>
          <div className='textwithimage__textcontent'>
            <h2 className='block__title'>{title}</h2>
            <div className='block__text textwithimage__text'>{text}</div>
          </div>
        </div>
        <div
          className={`textwithimage__imagehalf ${imageColWidth} ${
            !imageOnRight ? 'order-1' : ''
          }`}
          style={imageHalfStyle}>
          <img
            className='block__image textwithimage__image'
            src={`./public/deco/${image}`}
            alt={title}
          />
        </div>
      </div>
    </section>
  )
}

TextWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgcolorText: PropTypes.string,
  bgcolorImage: PropTypes.string.isRequired,
  imageOnRight: PropTypes.bool,
  imageIsTwoThirds: PropTypes.bool,
  image: PropTypes.string,
  extrastyles: PropTypes.object,
  extraclasses: PropTypes.string
}

export default TextWithImage
