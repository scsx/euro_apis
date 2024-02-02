import SingleText from '../components/blocks/singleText'
import TextWithImage from '../components/blocks/TextWithImage'
import palatineImage from '/deco/palatine-chapel-1.jpg'
import './MiddleAgesArt.scss'

const heroStyle = {
  backgroundImage:
    'url(https://img.freepik.com/free-photo/3d-dark-grunge-display-background-with-smoky-atmosphere_1048-16218.jpg)'
}

const MiddleAgesArt = () => {
  return (
    <div className='middleagesart'>
      <SingleText
        title={'Middle Ages Art'}
        text={
          'Medieval art—which includes a wide variety of art and architecture—refers to a period also known as the Middle Ages, which roughly spanned from the fall of the Roman Empire in 476 A.D. to the early stages of the Renaissance in the 14th century.'
        }
        extraclasses='middleagesart__hero'
        extrastyles={heroStyle}
      />
      <div className='container'>
        <TextWithImage
          title={'Early Medieval Art'}
          text={
            'Art from this period was created between the fourth century and 1050 A.D. During this time, the Catholic Church and wealthy oligarchs commissioned projects for specific social and religious rituals. Many of the oldest examples of Christian art survive in the Roman catacombs or burial crypts beneath the city.'
          }
          image={'torcello.jpg'}
          bgcolorText={'#1f1f1f'}
          bgcolorImage={'#1f1f1f'}
          extraclasses='middleagesart__early'
        />
        <TextWithImage
          title={'Gothic Art'}
          text={
            'Art from this period was created between the fourth century and 1050 A.D. During this time, the Catholic Church and wealthy oligarchs commissioned projects for specific social and religious rituals. Many of the oldest examples of Christian art survive in the Roman catacombs or burial crypts beneath the city.'
          }
          image={'catedral.jpg'}
          bgcolorText={'#25252f'}
          bgcolorImage={'#25252f'}
          extraclasses='middleagesart__gothic'
          imageOnRight={false}
        />
      </div>
      <div
        className='middleagesart__palatine'
        style={{
          backgroundImage: `url(${palatineImage})`
        }}>
        <div className='container'>
          <h3>
            Palatine Chapel<small>804 A.D.</small>
          </h3>
        </div>
      </div>

      <div className='middleagesart__taming'>
        <div className='container'>
          <TextWithImage
            title={'Jean Poyet'}
            text={'Taming of the Tarrasque, 1500s'}
            image={'poyet.jpg'}
            imageIsTwoThirds={true}
            bgcolorText={'#793707'}
            bgcolorImage={'#904208'}
            extraclasses='middleagesart__early'
          />
        </div>
      </div>
    </div>
  )
}

export default MiddleAgesArt
