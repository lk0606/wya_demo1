export const saleConfig = [
	{
		path: '/sale',
		redirect: '/sale/main'
	},
	{
		path: '/sale/customer',
		name: 'sale-customer',
		component: () => import('./modules/sale-customer.vue')
	}
];
