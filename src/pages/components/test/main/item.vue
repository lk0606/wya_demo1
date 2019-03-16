<template>
	<section>
		<vc-table-column
			prop="orders_id"
			label="ID"
			width="180"
		/>
		<vc-table-column
			prop="orders_sn"
			label="信息"
			width="180"
		/>
		<vc-table-column
			prop="address"
			label="地址"
		>
			<div @click="handleResetFirst">回到首页刷新</div>
			<div @click="handleResetCur">当前页刷新</div>
		</vc-table-column>
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
		handleResetFirst() {
			this.$store.commit('TEST_MAIN_LIST_INIT');
		},
		handleResetCur() {
			this.$store.commit('TEST_MAIN_LIST', { type: this.type });
		},
	},
};
</script>

<style lang="scss">
</style>

