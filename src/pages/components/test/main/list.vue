<template>
	<vc-paging
		ref="tableTarget"
		:data-source="listInfo.data"
		:total="listInfo.total"
		:reset="listInfo.reset"
		:history="true"
		:load-data="loadData"
		mode="table"
		class="g-m-t-20 v-test-main-list"
		@row-click="handlePopup"
		@page-size-change="handleChangePageSize"
	>
		<test-item />
	</vc-paging>
</template>

<script>
import { URL } from '@utils/utils';
import { KeepAlive } from './keep-alive';
import Item from './item';

export default {
	name: 'test-table',
	components: {
		'test-item': Item,
	},
	data() {
		const { query } = this.$route;

		return {
		};
	},
	computed: {
		listInfo() {
			return this.$store.state.testMain.listInfo;
		}
	},
	methods: {
		handlePopup() {
			KeepAlive.popup({

			}).then((res) => {
				console.log(res);
			}).catch((res) => {
				console.log(res);
			});
		},
		loadData(page, pageSize) {
			let { query = {} } = URL.parse();
			return this.request({
				url: 'TEST_MAIN_LIST_GET',
				type: 'GET',
				param: {
					...query,
					page,
					pageSize
				},
			}).then((res) => {
				console.log(res, 'res');
			}).catch((error) => {
				console.log(error, 'error');
			});
		},
		handleChangePageSize() {
			this.$store.commit('TEST_MAIN_LIST_INIT');
		}
	}
};

</script>

<style lang="scss">

</style>
