const Page = ({
  fullWidth = false,
  noVertPadding = false,
  classes,
  children
}) => {
  return (
    <div className={`page ${noVertPadding ? '' : 'my-5'} page__${classes}`}>
      <div className={fullWidth ? ' ' : 'container '}>{children}</div>
    </div>
  )
}

export default Page
