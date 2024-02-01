import SingleText from '../components/blocks/singleText'
import OneThirdTextTwoThirdsImage from '../components/blocks/OneThirdTextTwoThirdsImage'

let singleParagraph =
  'The single line component is used to hold basic text strings like the name of an item or title of an article. When adding this component to a shape, specify a name and description for the sort of content that you wish for it to contain.'

let chateauParagraph =
  'One nautical mile from the Old Port of Marseille, you can make out the silhouette of the Château d’If and the Frioul archipelago. This monument, perched on a small limestone rock in the middle of the Mediterranean waters, became famous thanks to the novel The Count of Monte Cristo by Alexandre Dumas. More than a prison, the Château d’If was also a fortress designed to protect the city from enemy invasions and from itself.'

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
        extraclasses='block--bluegreecetop'
      />
      <SingleText
        title={'Another Single Text'}
        text={singleParagraph}
        bgimage={'greece.jpg'}
        extrastyles={singleTextStyles}
      />
      <OneThirdTextTwoThirdsImage
        title={"Château d'If, Frioul archipelago, Marseille, 16th century"}
        text={chateauParagraph}
        image={'chateau-dif.jpg'}
        bgcolorText={'#fefaf2'}
        bgcolorImage={'#54709b'}
        imageOnRight={false}
      />
    </>
  )
}

export default AllBlocks
