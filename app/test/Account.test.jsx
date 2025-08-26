import { getByText, render, screen } from '@testing-library/react';
import Account from '../components/Account';
import App from '../src/App';
import { describe, expect, vi} from 'vitest';
import { userEvent } from '@testing-library/user-event';

global.fetch = vi.fn()

function fetchResponse(data) {
  return { json: () => new Promise(resolve => resolve(data)) };
};

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const react_router_dom = await vi.importActual('react-router-dom');
  return {
    ...react_router_dom,
    useNavigate: () => mockNavigate
  };
});

describe("Test login presentation", () => {
  beforeEach(()=>{
    render(<Account/>);
  });

  it("Should request the user email", () => {
    let email = screen.getByText('Email Address');
    expect(email).toBeInTheDocument();

    let emailInput = screen.getByPlaceholderText('example@example.com');
    expect(emailInput).toBeInTheDocument();
  });
  it("Should request the user password", () => {
    let password = screen.getByText('Password');
    expect(password).toBeInTheDocument();

    let passwordInput = screen.getByPlaceholderText('********');
    expect(passwordInput).toBeInTheDocument();
  });
  it("Should have a login and cancel button", () => {
    let loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();

    let cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
  });
  it("Should have a create Account link", () => {
    let createAccount = screen.getByText('create account');
    expect(createAccount).toBeInTheDocument();
  });
});

describe("Test login functions", ()=>{
  beforeEach(()=>{
    render(<App/>);
  });

  it("Should notify the user of a failed log in attempt", async () => {
    let login = screen.getByText('Login/Create Account')
    await userEvent.click(login)

    let loginButton = screen.getByText('Login');
    await userEvent.click(loginButton);

    //let errorText = screen.getByText('Invalid email/password');
    //expect(errorText).toBeInTheDocument();
  });
  it("Should navigate to a logged in view on successful login", () => {});
  it("Should navigate to a logged out view on cancel", () => {});
  it("Should return a cookie that authorizes the user", () => {});
})