const ErrorBoundaryComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert' className='errorboundary'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button className='btn btn-outline-dark' onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

export default ErrorBoundaryComponent
