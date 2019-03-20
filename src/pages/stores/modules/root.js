import __tpl__ from './__tpl__/root';
import login from './login/root';
import sale from './sale/root';

export default {
	...__tpl__,
	...login,
	...sale
};
