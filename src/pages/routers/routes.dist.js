import layout from '@components/layout/layout';
import { PRE_ROUTER_URL } from '../constants/constants';
import { loginConfig } from '../containers/login/app';
import { tplConfig } from '../containers/__tpl__/app';
import { settingConfig } from '../containers/setting/app';
import { homeConfig } from '../containers/home/app';
import { testConfig } from '../containers/test/app';

export default {
	base: PRE_ROUTER_URL,
	mode: 'history',
	routes: [
		...loginConfig,
		{
			path: '/',
			component: layout,
			children: [
				{
					path: '/',
					redirect: { name: 'tpl-main' }
				},
				...tplConfig,
				...settingConfig,
				...homeConfig,
				...testConfig
			]
		},
		{
			path: '*',
			redirect: (to) => {
				return '/tpl/main';
			}
		}
	]
};

