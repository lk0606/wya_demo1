<template>
	<vc-table-item>
		<vc-table-column
			type="selection"
			width="55"/>
		<vc-table-column
			fixed
			prop="company_name"
			label="公司名称"
			width="180"
		>
			<template slot-scope="{ row }">
				<div @click="handlePopup(row)">{{ row.company_name }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="customer_id"
			label="客户名称"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.customer_name }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="tel"
			label="客户电话"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.tel }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="level_str"
			label="客户等级"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.level_str }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="capital"
			label="注册资金"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.capital }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="connect_status"
			label="接通状态"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.connect_status }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="surplus_days"
			label="剩余保护时间"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.surplus_days }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="is_own"
			label="负责人"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.is_own }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="get_time"
			label="领取时间"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.get_time }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="customer_intention"
			label="客户意向"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.customer_intention }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="create_time"
			label="创建时间"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.create_time }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="change_times"
			label="转手次数"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.change_times }}</div>
			</template>
		</vc-table-column>
		<vc-table-column
			prop="scale"
			label="公司规模"
			width="180"
		>
			<template slot-scope="{ row }">
				<div>{{ row.scale }}</div>
			</template>
		</vc-table-column>
	</vc-table-item>
</template>

<script>
import { URL } from '@utils/utils';
import { Edit } from './edit/edit';

export default {
	name: 'oa-item',
	components: {

	},
	props: {

	},
	data() {
		return {
		};
	},
	computed: {

	},
	watch: {

	},
	created() {

	},
	methods: {
		getPortalMainData(customerId) {
			const { query = {} } = URL.parse();
			return this.request({
				url: '_SALE_CUSTOMER_EDIT_MAIN_GET',
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
				url: '_SALE_CUSTOMER_EDIT_HEAD_GET',
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
		handlePopup(row) {
			console.log(row.customer_id, '--------row');
			this.getPortalMainData(row.customer_id);
			this.getPortalHeadData(row.customer_id);
			this.getIndustryList();
			this.getScaleList();
			Edit.popup({
				row
			}).then((res) => {
				console.log(res, 'row data...');
			}).catch((res) => {
				console.log(res);
			});
		},
	},
};
</script>

<style lang="scss">
</style>

