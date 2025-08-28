import { describe, it } from "vitest";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import App from '../src/App'
import Navbar from '../components/Navbar'

global.fetch = vi.fn()

function fetchResponse(data, statusCode) {
  return {
    status: statusCode,
    json: () => new Promise(resolve => resolve(data))
  };
};

it('renders all navigation links', () => {
  render(<App/>)
  fetch(fetchResponse(null, 200));
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