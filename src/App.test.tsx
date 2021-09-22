import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App.js test', () => {
    let wrapper: ShallowWrapper<typeof App> | undefined;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    it('should check the inner text of the Link.', () => {
        expect(wrapper?.find('a').text()).toContain('Learn React');
    });
    it('should check the inner text of the para.', () => {
        expect(wrapper?.find('#edit').text()).toBe('Edit src/App.tsx and save to reload.');
    });
    it('should check the number of elements the component has.', () => {
        expect(wrapper?.find('header')).toHaveLength(1);
        expect(wrapper?.find('img')).toHaveLength(1);
        expect(wrapper?.find('p')).toHaveLength(1);
        expect(wrapper?.find('a')).toHaveLength(1);
    });
    it('should test testing library', () => {
        const {getByText}=screen;
        render(<App />);
        const linkElement = getByText(/reload.$/i);
        expect(linkElement).toBeInTheDocument();
    });
    it('should test the message sent by the mock server.', async() => {
        const {findByText}=screen;
        render(<App />);
        const linkElement = await findByText('Learn React!');
        expect(linkElement).toBeInTheDocument();
    });
});
