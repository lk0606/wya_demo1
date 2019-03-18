<template>
	<vc-drawer
		v-model="visible"
		:mask="false"
		:closable="true"
		:width="width"
		placement="right"
		class="g-drawer"
		@on-close="handleCancel"
	>
		<template v-slot:header >
			<div class="_head-title">{{ title }}</div>
		</template>
		<vc-spin v-if="loading" />
		<div class="ivu-drawer-body">
			<span
				class="g-pointer iconfont icon-clear"
				style="font-size: 14px; position: fixed; right: 34px; top: 68px;"/>
			<div class="_title-wrapper">
				<span class="_span1">
					<span class="_left-text">负责人：</span>
					<span class="_right-text">超管</span>
				</span>
				<span class="_span1">
					<span class="_left-text">客户来源：</span>
					<span class="_right-text">自己添加</span>
				</span>
				<span class="_span1">
					<span class="_left-text">客户级别：</span>
					<span class="_right-text">普通客户</span>
					<!--<i class="iconfont icon-arrow-up g-c-blue-mid g-fs-12 g-pointer"/>-->
				</span>
				<span class="_span1">
					<span class="_left-text">信息来源：</span>
					<span class="_right-text">微信</span>
				</span>
				<span class="_span1" style="min-width: 280px;">
					<span class="_left-text">上次跟进时间：</span>
					<span class="_right-text">--</span>
				</span>
				<span class="_span1" style="min-width: 370px;">
					<span class="_left-text">保护时间至：</span>
					<span class="_right-text">2019-06-16 15:05:18 剩余89天23时8分</span>
				</span>
			</div>
			<div class="_footer">
				<button type="button" class="ivu-btn ivu-btn-default"><span>录入到账</span></button>
				<button type="button" class="ivu-btn ivu-btn-default"><span>归还</span></button>
				<button type="button" class="ivu-btn ivu-btn-default"><span>指派</span></button>
				<button type="button" class="ivu-btn ivu-btn-default"><span>添加进白名单</span></button>
				<button type="button" class="ivu-btn ivu-btn-default"><span>删除</span></button>
			</div>
		</div>
		<!--<div @click="handleCancel">取消</div>-->
		<!--<div @click="handleOk">确定</div>-->
	</vc-drawer>
</template>

<script>
import { Spin, Drawer, CreatePortal, Tabs } from '@wya/vc';

const config = {
	name: "vc-tpl-basic-keep-alive",
	components: {
		'vc-drawer': Drawer,
		'vc-spin': Spin,
		'vc-tabs': Tabs,
		'vc-tab-pane': Tabs.Pane
	},
	props: {
		data: Object,
	},
	data() {
		return {
			title: this.data.company_name,
			width: 720,
			visible: false,
			loading: false,
			tabs: [
				{ label: '标签一', value: '1' },
				{ label: '标签二', value: '2' },
				{ label: '标签三', value: '3' }
			]
		};
	},
	computed: {

	},
	mounted() {
		this.visible = true;
	},
	methods: {
		loadData(opts = {}) {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
		handleOk() {
			this.visible = false;
			this.$emit('sure');
		},
		handleCancel() {
			this.visible = false;
			this.$emit('close');
		},
		handleClick() {
			console.log('click');
		},
		handleRemove() {
			console.log('remove');
		},
		handleChange(type) {
			this.type = type;

			this.setHistory({
				type
			});
		},
	}
};

export default config;

export const KeepAliveWithBefore = CreatePortal({
	alive: true,
	onBefore() {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 1000);
		});
	}
}, config);

export const KeepAlive = CreatePortal({
	alive: true,
	aliveRegExp: {
		className: /(ivu-btn|v-transfer-dom)/
	}
}, config);
</script>
<style lang="scss">
._head-title {
	font-size: 16px;
	width: 700px;
	color: #000;
	padding: 20px;
}
._title-wrapper {
	padding-left: 20px;
	padding-bottom: 0;
}
._span1 {
	min-width: 170px;
	display: inline-block;
	font-size: 12px;
	margin-bottom: 11px;
	._left-text {
		color: #818794;
	}
	._right-text {
		color: #333;
	}
}
._title {
	margin-top: 30px;
}
._title-bar {
	display: inline-block;
	width: 2px;
	height: 14px;
	position: relative;
	top: 1px;
}
.v-sale-customer-info-item {
	display: flex;
	border-bottom: 1px solid #e7e7e7;
	width: 300px;
	padding-top: 5px;
	padding-bottom: 5px;
	margin: 15px 40px 5px 0;
	._label {
		color: #818794;
		flex: 1;
	}
	._value {
		width: 200px;
	}

}

</style>
