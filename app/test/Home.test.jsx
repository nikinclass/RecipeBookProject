import { getByText, render, screen } from '@testing-library/react';
import Home from '../src/Home';
import App from '../src/App';
import { describe, expect, it, vi} from 'vitest';
import { userEvent } from '@testing-library/user-event';
import Sidebar from '../components/Sidebar';


global.fetch = vi.fn()

function fetchResponse(data, statusCode) {
  return {
    status: statusCode,
    json: () => new Promise(resolve => resolve(data))
  };
};

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const react_router_dom = await vi.importActual('react-router-dom');
  return {
    ...react_router_dom,
    useNavigate: () => mockNavigate
  };
});

describe('tests home display', () => {
  beforeEach(()=>{
    render(<App/>);
  });

  it('should have a sidebar', () => {
    const { container } = render(<App/>);
    const navbars = container.querySelectorAll('nav');
    expect(navbars.length).toBe(2);
  })


  it('should display a random recipe of the day', () => {
    const mock_data = [{
      "name": "Draysen's Spaget",
      "description": "Draysen's oddly formulated Spaget",
      "cultural_category": "Draysen",
      "type_category": "breakfast",
      "picture_url": "/images/DraysensSpaget.png"
    }]
    fetch(fetchResponse(mock_data, 200));
    const name = screen.getByText(mock_data[0].name);
    expect(name).toBeInTheDocument();
    
    const description = screen.getByText(mock_data[0].description);
    expect(description).toBeInTheDocument();

    const picture_URL = screen.getByAltText(mock_data[0].name);
    expect(picture_URL).toBeInTheDocument();

    const cookButton = screen.getByText('Cook Now');
    expect(cookButton).toBeInTheDocument();
  })
})