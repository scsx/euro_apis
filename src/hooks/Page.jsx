const Page = ({
  fullWidth = false,
  noVertPadding = false,
  classNames,
  children
}) => {
  return (
    <div className={`page ${noVertPadding ? '' : 'my-5'} page__${classNames}`}>
      <div className={fullWidth ? ' ' : 'container '}>{children}</div>
    </div>
  )
}

export default Page
