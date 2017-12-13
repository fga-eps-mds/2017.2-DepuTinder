import { renderComponent, expect } from '../test_helper';
import GoogleLoginButton from '../../src/containers/googleLogin';

describe('Google Login Button', () => {
    let component;
    let propsObj;

    describe('With default props', () => {
        beforeEach(() => {
            propsObj = {
                onSuccess(response) { },
                onFailure(response) { },
                clientId: '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
            };
            component = renderComponent(GoogleLoginButton, propsObj);
        });

        it('shows the button', () => {
            expect(component).to.exist;
        });

    });
});
