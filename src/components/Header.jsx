import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { yourAction } from '../redux/actions/yourAction'

const Header = () => {
  const yourData = useSelector((state) => state.yourReducer.yourData)
  const dispatch = useDispatch()

  return (
    <div>
      <div>{/* Your JSX here */}</div>
    </div>
  )
}

export default Header
