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
		@page-size-change="handleResetFirst"
		@row-click="handlePopup"
		@selection-change="handleSelectionChange"
	>
		<!--<tpl-item/>-->
		<vc-table-column
			type="selection"
			fixed
			width="55"/>
		<vc-table-column
			fixed
			prop="company_name"
			label="公司名称"
			width="180"
		/>
		<vc-table-column
			prop="customer_id"
			label="客户名称"
			width="180"
		/>
		<vc-table-column
			prop="tel"
			label="客户电话"
			width="180"
		/>
		<vc-table-column
			prop="level_str"
			label="客户等级"
			width="180"
		/>
		<vc-table-column
			prop="capital"
			label="注册资金"
			width="180"
		/>
		<vc-table-column
			prop="connect_status"
			label="接通状态"
			width="180"
		/>
		<vc-table-column
			prop="surplus_days"
			label="剩余保护时间"
			width="180"
		/>
		<vc-table-column
			prop="is_own"
			label="负责人"
			width="180"
		/>
		<vc-table-column
			prop="get_time"
			label="领取时间"
			width="180"
		/>
		<vc-table-column
			prop="customer_intention"
			label="客户意向"
			width="180"
		/>
		<vc-table-column
			prop="create_time"
			label="创建时间"
			width="180"
		/>
		<vc-table-column
			prop="change_times"
			label="转手次数"
			width="180"
		/>
		<vc-table-column
			prop="scale"
			label="公司规模"
			width="180"
		/>
	</vc-paging>
</template>

<script>
import { URL } from '@utils/utils';
// import { Table } from '@wya/vc';
import { KeepAlive } from './keep-alive';
// import Item from './item';

export default {
	name: 'tpl-table1',
	components: {
		// 'tpl-item': Item
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
		getPortalMainData(customerId) {
			const { query = {} } = URL.parse();
			return this.request({
				url: 'TPL_TABLE_LIST_GET',
				type: 'GET',
				param: {
					...query,
					customer_id: customerId
				},
				loading: false,
				// requestType: "form-data:json"
			}).then((res) => {
				// console.log(res, 'res');
			}).catch((error) => {
				console.log(error, 'error');
			});
		},
		getPortalHeadData(customerId) {
			const { query = {} } = URL.parse();
			return this.request({
				url: 'TPL_LIST_GET',
				type: 'GET',
				param: {
					...query,
					customer_id: customerId
				},
				loading: false
			}).then((res) => {
			}).catch((error) => {
				console.log(error, 'error');
			});
		},
		getIndustryList() {
			return this.request({
				url: 'TPL_THIRD_ONE_GET',
				type: 'GET',
				loading: false
			}).then((res) => {
			}).catch((error) => {
				console.log(error, 'error');
			});
		},
		getScaleList() {
			return this.request({
				url: 'TPL_THIRD_TWO_GET',
				type: 'GET',
				loading: false
			}).then((res) => {
			}).catch((error) => {
				console.log(error, 'error');
			});
		},
		handlePopup(row) {
			console.log(row.customer_id, '--------row');
			this.getPortalMainData(row.customer_id);
			this.getPortalHeadData(row.customer_id);
			this.getIndustryList();
			this.getScaleList();
			KeepAlive.popup({
				data: row
			}).then((res) => {
				console.log(res, 'row data...');
			}).catch((res) => {
				console.log(res);
			});
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
		handleChangePageSize() {
			this.$store.commit('TPL_PAGING_BASIC_LIST_INIT');
		},
		handleResetFirst() {
			// this.loadData();
			this.$store.commit('TPL_PAGING_BASIC_LIST_INIT');
		},
		handleResetCur() {
			// this.loadData();
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
