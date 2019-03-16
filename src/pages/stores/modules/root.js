import __tpl__ from './__tpl__/root';
import login from './login/root';
import test from './test/root';

export default {
	...__tpl__,
	...login,
	...test
};
