<template>
	<vc-paging
		ref="multipleTable"
		:data-source="listInfo.data"
		:count="listInfo.count"
		:total="listInfo.total"
		:reset="listInfo.reset"
		:load-data="loadData"
		:style="style"
		class="vc-paging g-m-t-20 v-customer-intention-list"
		mode="table"
		history
		show
		@selection-change="handleSelectionChange"
	>
		<tpl-item/>
	</vc-paging>
</template>

<script>
import { URL } from '@utils/utils';
import Item from './item';

export default {
	name: 'tpl-table1',
	components: {
		'tpl-item': Item
	},
	data() {
		return {
			tableData: {},
			style: {
				width: window.innerWidth - 260 + 'px'
			}
		};
	},
	computed: {
		listInfo() {
			return this.$store.state.tplPagingBasic.listInfo;
		}
	},
	mounted() {
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
		handleSelectionChange(val) {
			console.log(val);
		},
		loadData(page, pageSize) {
			const { query = {} } = URL.parse();
			return this.request({
				url: 'TPL_PAGING_BASIC_LIST_GET',
				type: 'GET',
				param: {
					...query,
					is_own: 2,
					page: page || 1,
					pageSize: pageSize || 10
				},
				loading: false,
				// requestType: "form-data:json"
			}).then((res) => {
				console.log(res, 'res');
			}).catch((error) => {
				console.log(error, 'error');
			});
		},
		// handleChangePageSize() {
		// 	this.$store.commit('TPL_PAGING_BASIC_LIST_INIT');
		// },
		handleResetFirst() {
			// this.$store.commit('TPL_PAGING_BASIC_LIST_INIT');
		},
		handleResetCur() {
			this.$store.commit('TPL_PAGING_BASIC_LIST_RESET');
		},
	}
};

</script>

<style lang="scss">
.vc-paging {
	margin-bottom: 40px;
}
</style>
