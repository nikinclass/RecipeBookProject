import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/dom'
import '@testing-library/jest-dom'
import App from '../src/App'
import Navbar from '../components/Navbar'

test('renders all navigation links', () => {
  render ( <App /> ) 
  // const links=[
  //   'Recipes', 
  //   'Profile',
  //   'Search',
  //   'Favorites',
  //   'Blog',
  // ]
  // links.forEach(text=> {
  //   const linkElement=screen.getByText(text)
  //   expect(linkElement).toBeInDocument()
  // })
})

//  render(ui, {wrapper: AllTheProviders, ...options})