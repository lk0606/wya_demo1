<template>
	<section>
		<vc-table-column
			type="selection"
			fixed
			width="55"/>
		<vc-table-column
			fixed
			prop="customer_name"
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
			prop="capital"
			label="公司规模"
			width="180"
		/>
	</section>
</template>

<script>
export default {
	name: 'v-tpl-item',
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
		// handleResetFirst() {
		// 	this.$store.commit('TPL_PAGING_BASIC_LIST_INIT');
		// },
		// handleResetCur() {
		// 	this.$store.commit('TPL_PAGING_BASIC_LIST_RESET');
		// },
	}
};
</script>

<style lang="scss">
</style>
