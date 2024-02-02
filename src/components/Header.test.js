import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/'

import Header from './Header'

test('renders header component', () => {
  render(<Header />)
  expect(screen.getByText(/euro_apis/i)).toBeInTheDocument()
})
