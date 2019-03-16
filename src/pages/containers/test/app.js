export const testConfig = [
	{
		path: '/test',
		redirect: '/test/main'
	},
	{
		path: '/test/main',
		name: 'test-main',
		component: () => import('./modules/test-main.vue')
	}
];
