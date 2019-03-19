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
	// table info
	TPL_PAGING_BASIC_LIST_GET_SUCCESS(state, { data, param: { page } }) {
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
	TPL_TABLE_LIST_GET_SUCCESS(state, { data, param: { customerId } }) {
		state.customerMainData = {
			...data
		};
		// state.customerMainData = data;
		console.log(state.customerMainData, 'customerMainData');
	},
	// customer head
	TPL_LIST_GET_SUCCESS(state, { data, param: { customerId } }) {
		state.customerHeadData = {
			...data
		};
		console.log(state.customerHeadData, 'customerHeadData');
	},
	// industry select
	TPL_THIRD_ONE_GET_SUCCESS(state, { data }) {
		state.industryList = {
			...data
		};
		console.log(state.industryList, 'industryList');
	},
	// scale select
	TPL_THIRD_TWO_GET_SUCCESS(state, { data }) {
		state.scaleList = {
			...data
		};
		console.log(state.scaleList, 'industryList');
	},
	// save edit data
	TPL_TABLE_ITEM_POST_SUCCESS(state, { data }) {
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

export const tplPagingBasic = {
	state: { ...initialState },
	mutations,
};
