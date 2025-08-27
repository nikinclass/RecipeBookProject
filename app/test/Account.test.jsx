import { getByText, render, screen } from '@testing-library/react';
import Account from '../components/Account';
import App from '../src/App';
import { describe, expect, it, vi} from 'vitest';
import { userEvent } from '@testing-library/user-event';

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
  beforeEach(async ()=>{
    render(<App/>);

  });

  it("Should notify the user of a failed log in attempt", async () => {
    fetch.mockResolvedValue(fetchResponse(null,401));

    let login = screen.getByText('Login/Create Account');
    await userEvent.click(login);

    let loginButton = screen.getByText('Login');
    await userEvent.click(loginButton);

    let errorText = screen.getByText('Invalid email/password');
    expect(errorText).toBeInTheDocument();
  });

  it("Should navigate to a logged in home view on successful login", async () => {
    fetch.mockResolvedValue(fetchResponse(null,200));
    let login = screen.getByText('Login/Create Account');
    await userEvent.click(login);

    let loginButton = screen.getByText('Login');
    await userEvent.click(loginButton);

    let profile = screen.getByText('Profile');
    expect(profile).toBeInTheDocument();
  });

  // it("Should navigate to a not logged in home view on cancel", async () => {
  //   let login = screen.getByText('Login/Create Account');
  //   await userEvent.click(login);

  //   let loginButton = screen.getByText('Login');
  //   await userEvent.click(loginButton);

  //   let profile = screen.getByText('Profile');
  //   expect(profile).not.toBeInTheDocument();
  // });

  it("Should pass user credentials to the API and receive a auth token", async () => {

  });
})

describe("Test create user presentation", () => {
  beforeEach( async ()=>{
    render(<Account/>);
  });

  it("Should request the user email", async () => {
    let createAccount = screen.getByText('create account');
    await userEvent.click(createAccount);

    let email = screen.getByText('Email Address');
    expect(email).toBeInTheDocument();

    let confirmEmail = screen.getByText('Confirm Email');
    expect(confirmEmail).toBeInTheDocument();

    let emailInputs = screen.getAllByPlaceholderText('example@example.com');
    expect(emailInputs.length).toBe(2);
  });

  it("Should request the user password", async () => {
    let createAccount = screen.getByText('create account');
    await userEvent.click(createAccount);

    let password = screen.getByText('Password');
    expect(password).toBeInTheDocument();

    let confirmPassword = screen.getByText('Confirm Password');
    expect(confirmPassword).toBeInTheDocument();

    let passwordInput = screen.getByPlaceholderText('password');
    expect(passwordInput).toBeInTheDocument();

    let confirmPasswordInput = screen.getByPlaceholderText('confirm');
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it("Should have a create account and cancel button", async () => {
    let createAccount = screen.getByText('create account');
    await userEvent.click(createAccount);

    let createButton = screen.getByText('Create Account');
    expect(createButton).toBeInTheDocument();

    let cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
  });

  it("Should have a create Account link", async () => {
    let createAccount = screen.getByText('create account');
    await userEvent.click(createAccount);

    let login = screen.getByText('login');
    expect(login).toBeInTheDocument();
  });
})