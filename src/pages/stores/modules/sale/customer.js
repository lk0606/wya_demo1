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
	// customer body
	SALE_CUSTOMER_EDIT_POPUP_GET_SUCCESS(state, { data, param: { customerId } }) {
		state.customerMainData = {
			...data
		};
		// state.customerMainData = data;
		console.log(state.customerMainData, 'customerMainData');
	},
	// customer head
	SALE_CUSTOMER_EDIT_POPUP_HEAD_GET_SUCCESS(state, { data, param: { customerId } }) {
		state.customerHeadData = {
			...data
		};
		console.log(state.customerHeadData, 'customerHeadData');
	},
	// industry select
	SALE_CUSTOMER_INDUSTRY_GET_SUCCESS(state, { data }) {
		state.industryList = {
			...data
		};
		console.log(state.industryList, 'industryList');
	},
	// scale select
	SALE_CUSTOMER_SCALE_GET_SUCCESS(state, { data }) {
		state.scaleList = {
			...data
		};
		console.log(state.scaleList, 'industryList');
	},
	// save edit data
	SALE_CUSTOMER_EDIT_SAVE_POST_SUCCESS(state, { data }) {
		// state.customerMainData = {
		// 	...data
		// };
		console.log(data, 'save edit data');
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
