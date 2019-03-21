<template>
	<vc-paging
		ref="tableTarget"
		:data-source="listInfo.data"
		:total="listInfo.total"
		:count="listInfo.count"
		:reset="listInfo.reset"
		:history="true"
		:style="style"
		:load-data="loadData"
		mode="table"
		class="_customer-list-paging g-m-t-20 v-customer-intention-list"
	>
		<oa-item />
	</vc-paging>
</template>

<script>
import { URL } from '@utils/utils';
import Item from './item';

export default {
	name: 'oa-table',
	components: {
		'oa-item': Item,
	},
	data() {
		const { query } = this.$route;

		return {
			style: {
				width: window.innerWidth - 260 + 'px'
			}
		};
	},
	computed: {
		listInfo() {
			return this.$store.state.saleCustomer.listInfo;
		}
	},
	updated() {
		this.handleResize();
	},
	methods: {
		handleResize() {
			window.addEventListener('resize', () => {
				this.style.width = window.innerWidth - 260 + 'px';
			});
		},
		loadData(page, pageSize) {
			let { query = {} } = URL.parse();
			return this.request({
				url: 'SALE_CUSTOMER_TABLE_LIST_GET',
				type: 'GET',
				param: {
					...query,
					is_own: 2,
					page: page || 1,
					pageSize: pageSize || 10
				},
				loading: false,
			}).then((res) => {
				console.log(res, 'res');
			}).catch((error) => {
				console.log(error, 'error');
			});
		}
	}
};

</script>

<style lang="scss">
._customer-list-paging {
	margin-bottom: 40px;
}
</style>
