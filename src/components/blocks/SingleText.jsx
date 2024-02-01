import './Blocks.scss'

const SingleText = ({ title, paragraph, bgcolor, bgimage, extrastyles }) => {
  const inlineStyle = {}

  if (bgcolor) {
    inlineStyle.backgroundColor = bgcolor
  }

  if (bgimage) {
    inlineStyle.backgroundImage = `url(./public/deco/${bgimage})`
  }

  if (extrastyles) {
    for (const key in extrastyles) {
      inlineStyle[key] = extrastyles[key]
    }
  }

  return (
    <section className='block blocksingletext' style={inlineStyle}>
      <h2 className='blocksingletext__title'>{title}</h2>
      <div className='blocksingletext__text'>{paragraph}</div>
    </section>
  )
}

export default SingleText
