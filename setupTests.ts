import {configure} from 'enzyme';
import {TextEncoder} from 'util';
global.TextEncoder = global.TextEncoder || TextEncoder;
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

