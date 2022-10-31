import { render, screen } from '@testing-library/react';
import App from './App';

describe('basic test', () => {
    const originalEnv = process.env;

    beforeEach(()=>{
        jest.resetModules();
        process.env = {
            ...originalEnv,
            REACT_APP_LOGIN_USERNAME_LABEL: "Login form"
        }

        render(<App />);
    })

    afterEach(()=>{
        process.env = originalEnv
    })

    function expectToBeInTheDocument(el, type){

        return expect(el).toBeInTheDocument();
    }

    it('renders title "Login form" exists', async () => {
		expectToBeInTheDocument(
            await screen.findByText(
                process.env.REACT_APP_LOGIN_USERNAME_LABEL
            )
        )
	});

    it('renders label "Username" exists', async () => {        
        expectToBeInTheDocument(
            await screen.findByRole('textbox', { name: /email address/i })
        )

    });

    it('renders label "Password" exists', async () => {
        expectToBeInTheDocument(
            await screen.findByLabelText(/password/i)
        )
    });

    it('renders button "Login" exists', async () => {
        expectToBeInTheDocument(
            await screen.findByRole('button', { name: /login/i })
        )
    });

})
