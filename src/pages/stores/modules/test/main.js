import { initPage } from '@utils/utils';

const initialState = {
	listInfo: {
		...initPage
	}
};

const mutations = {
	TEST_MAIN_LIST_GET_SUCCESS(state, { data, param: { type, page } }) {
		state.listInfo = {
			...state.listInfo,
			...data.page,
			data: {
				...state.listInfo.data,
				[page]: data.list
			}
		};
	},
	TEST_MAIN_LIST_RESET(state, { type }) {
		state.listInfo = {
			...initialState.listInfo,
			reset: true
		};
	},
	TEST_MAIN_LIST_INIT(state, payload) {
		state.listInfo = {
			...initialState.listInfo
		};
	},
	TEST_MAIN_ROUTE_CHANGE(state, payload) {
		state.listInfo = {
			...initialState.listInfo
		};
	},
};

export const testMain = {
	state: { ...initialState },
	mutations,
};
