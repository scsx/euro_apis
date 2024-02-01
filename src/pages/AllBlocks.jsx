import SingleText from '../components/blocks/singleText'

let singleParagraph =
  'The single line component is used to hold basic text strings like the name of an item or title of an article. When adding this component to a shape, specify a name and description for the sort of content that you wish for it to contain.'

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
        paragraph={singleParagraph}
        bgcolor={'gold'}
        bgimage={'greece.jpg'}
        extrastyles={singleTextStyles}
      />
    </>
  )
}

export default AllBlocks
