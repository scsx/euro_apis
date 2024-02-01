import SingleText from '../components/blocks/singleText'
import TextWithImage from '../components/blocks/TextWithImage'

let singleParagraph =
  'The single line component is used to hold basic text strings like the name of an item or title of an article. When adding this component to a shape, specify a name and description for the sort of content that you wish for it to contain.'

let chateauParagraph =
  'One nautical mile from the Old Port of Marseille, you can make out the silhouette of the Château d’If and the Frioul archipelago. This monument, perched on a small limestone rock in the middle of the Mediterranean waters, became famous thanks to the novel The Count of Monte Cristo by Alexandre Dumas. More than a prison, the Château d’If was also a fortress designed to protect the city from enemy invasions and from itself.'

let arlesParagraph =
  'Built in the first century A.D., the Arles Amphitheater helped to make the city one of the largest Roman metropolises in Gaul. The arenas have survived for more than two millennia in an excellent state of preservation, resisting wars, epidemics, and the temptation of men to use them as stone quarries. As one of the best-preserved ancient amphitheaters in Europe, they can be visited all year round and continue to host cultural and sporting events, perpetuating their original function.'

let abbeyParagraph =
  'The Montmajour Abbey is an exceptional monument that bears witness to eight centuries of history and architecture in Provence.'

let singleTextStyles = {
  backgroundPosition: 'top center',
  paddingTop: '5rem',
  paddingBottom: '5rem'
}

const AllBlocks = () => {
  return (
    <>
      <SingleText
        title={'Single Text'}
        text={singleParagraph}
        extrastyles={singleTextStyles}
      />
      <TextWithImage
        title={'Montmajour Abbey'}
        text={abbeyParagraph}
        image={'abbey.jpg'}
        bgcolorText={'#d6dccd'}
        bgcolorImage={'#fefaf2'}
        extraclasses='abbey'
      />
      <SingleText
        title={'Another Single Text'}
        text={singleParagraph}
        bgimage={'greece.jpg'}
        extrastyles={singleTextStyles}
      />
      <TextWithImage
        title={"Château d'If, Frioul archipelago, Marseille, 16th century"}
        text={chateauParagraph}
        image={'chateau-dif.jpg'}
        bgcolorText={'#fefaf2'}
        bgcolorImage={'#54709b'}
        imageIsTwoThirds={false}
      />
      <TextWithImage
        title={'Arles Amphitheater'}
        text={arlesParagraph}
        image={'arles.jpg'}
        bgcolorText={'#18184f'}
        bgcolorImage={'#244372'}
        imageIsTwoThirds={false}
        imageOnRight={false}
        extraclasses='arles'
      />
    </>
  )
}

export default AllBlocks
