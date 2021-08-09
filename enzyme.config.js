import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//This is the unofficial enzyme adapter for react-17!
configure({ adapter: new Adapter() });
