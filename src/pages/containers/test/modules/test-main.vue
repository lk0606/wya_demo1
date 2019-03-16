<template>
	<set-title title="test-main" style="padding: 16px 24px 24px">
		<test-filter />
		<test-list />
	</set-title>
</template>

<script>
import List from '@components/test/main/list';
import Filter from '@components/test/main/filter';
import navigator from '@extends/mixins/navigator';

export default {
	name: 'test-test-main',
	components: {
		"test-list": List,
		"test-filter": Filter,
	},
	mixins: [navigator('TEST_MAIN')],
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
