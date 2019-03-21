import { initPage } from '@utils/utils';

const initialState = {
	listInfo: {
		...initPage
	},
	customerMainData: {},
	customerHeadData: {},
	industryList: {},
	scaleList: {}
};

const mutations = {
	// table data
	SALE_CUSTOMER_TABLE_LIST_GET_SUCCESS(state, { data, param: { page } }) {
		console.log(data, 'table data');
		state.listInfo = {
			total: data.totalPage,
			count: data.totalCount,
			current: data.currentPage,
			// ...state.listInfo,
			...data.page,
			data: {
				...state.listInfo.data,
				[page]: data.list
			}
		};
		console.log(state.listInfo, 'state.listInfo');
	},
	// edit main
	_SALE_CUSTOMER_EDIT_MAIN_GET_SUCCESS(state, { data, param: { customerId } }) {
		state.customerMainData = {
			...data
		};
		console.log(state.customerMainData, 'customerMainData');
	},
	// edit head
	_SALE_CUSTOMER_EDIT_HEAD_GET_SUCCESS(state, { data, param: { customerId } }) {
		state.customerHeadData = {
			...data
		};
		console.log(state.customerHeadData, 'customerHeadData');
	},
	// edit save
	_SALE_CUSTOMER_EDIT_SAVE_POST_SUCCESS(state, { data }) {
		// state.customerMainData = {
		// 	...data
		// };
		console.log(data, 'save edit data');
	},
	// // industry select
	// _SALE_CUSTOMER_INDUSTRY_LIST_GET_SUCCESS(state, { data }) {
	// 	state.industryList = {
	// 		...data
	// 	};
	// 	console.log(state.industryList, 'industryList');
	// },
	// // scale select
	// _SALE_CUSTOMER_SCALE_LIST_GET_SUCCESS(state, { data }) {
	// 	state.scaleList = {
	// 		...data
	// 	};
	// 	console.log(state.scaleList, 'scaleList');
	// },

	// init
	SALE_CUSTOMER_TABLE_LIST_INIT(state, payload) {
		state.listInfo = {
			...initialState.listInfo
		};
	},
	SALE_CUSTOMER_ROUTE_CHANGE(state, payload) {
		state.listInfo = {
			...initialState.listInfo
		};
	},
	SALE_CUSTOMER_TABLE_LIST_RESET(state, payload) {
		state.listInfo = {
			...initPage,
			reset: true
		};
	},
	TPL_PAGING_BASIC_LIST_RESET(state, payload) {
		state.listInfo = {
			...initPage,
			reset: true
		};
	},
	TPL_PAGING_BASIC_LIST_INIT(state, payload) {
		state.listInfo = {
			...initPage.listInfo
		};
	},
	TPL_PAGING_BASIC_ROUTE_CHANGE(state) {
		state.listInfo = {
			...initPage
		};
	}
};

export const saleCustomer = {
	state: { ...initialState },
	mutations,
};
