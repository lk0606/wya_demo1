<template>
	<set-title title="sale-customer" style="padding: 16px 24px 24px;">
		<oa-filter />
		<oa-list />
	</set-title>
</template>

<script>
import List from '@components/sale/customer/list';
import Filter from '@components/sale/customer/filter';
import navigator from '@extends/mixins/navigator';

export default {
	name: 'oa-sale-customer',
	components: {
		"oa-list": List,
		"oa-filter": Filter,
	},
	mixins: [navigator('SALE_CUSTOMER')],
	data() {
		return {
		};
	},
	created() {
	},
	methods: {
	},
};
</script>

<style lang="scss" scoped>
</style>
