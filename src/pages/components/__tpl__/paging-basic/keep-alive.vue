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
		<template v-slot:header>
			<div>{{ title }}</div>
		</template>
		<div v-if="!loading">{{ data }} </div>
		<vc-spin v-if="loading" />
		<div class="ivu-drawer-body">
			<span
				class="g-pointer iconfont icon-clear"
				style="font-size: 14px; position: fixed; right: 34px; top: 68px;"/>
			<div class="_head-title">浙江小龙虾啤酒有限公司旗下子公司的子公司上海大学美术出版社定价</div>
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
			<div class="ivu-tabs">
				<div class="ivu-tabs-bar">
					<div tabindex="0" class="ivu-tabs-nav-container">
						<div class="ivu-tabs-nav-wrap" style="position: relative;"><span
							class="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled"><i
								class="ivu-icon ivu-icon-ios-arrow-back"/></span> <span
									class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i
										class="ivu-icon ivu-icon-ios-arrow-forward"/></span>
							<div class="ivu-tabs-nav-scroll">
								<div class="nav-text ivu-tabs-nav">
									<div
										class="ivu-tabs-ink-bar ivu-tabs-ink-bar-animated"
										style="visibility: visible; width: 56px; transform: translate3d(0, 0, 0);"/>
									<div class="ivu-tabs-tab ivu-tabs-tab-active ivu-tabs-tab-focused">
										客户信息
									</div>
									<div class="ivu-tabs-tab">联系人</div>
									<div class="ivu-tabs-tab">销售记录</div>
								</div>
							</div>
							<object
								tabindex="-1"
								type="text/html"
								data="about:blank"
								style="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;"/>
						</div>
					</div>
				</div>
				<div class="ivu-tabs-content ivu-tabs-content-animated" style="transform: translateX(0%) translateZ(0);">
					<div class="ivu-tabs-tabpane" style="visibility: visible;">
						<div class="v-sale-customer-info g-relative" style="min-height: 260px;">
							<div class="_title"><span class="_title-bar g-bg-red-mid"/> <span class="g-fs-14 g-m-lr-5">基本信息</span>
							<span class="g-operation g-m-lr-5 g-fs-14">编辑</span></div>
							<div class="v-sale-customer-info-block">
								<div class="g-flex g-fw-w g-pd-l-10" style="margin-right: -30px;">
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">公司名称</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">浙江小龙虾啤酒有限公司旗下子公司的子公司上海大学美术出版社定价</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">公司规模</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">50-200人</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">电话</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class=" g-c-black2"
											style="font-weight: bold;">
											15631343639
									</span></span></div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">客户姓名</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">星美联合</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">注册资金（万元）</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">500 万元</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">地区</span>
										<span data-v-3cad6a07="" class="_value"><span data-v-3cad6a07=""><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">新疆维吾尔自治区</span><span
												data-v-3cad6a07=""
												class="g-m-r-10 g-c-black2">自治区直辖县级行政区划</span><span
													data-v-3cad6a07=""
													class="g-m-r-10 g-c-black2">图木舒克市</span></span></span></div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">网址</span>
										<span data-v-3cad6a07="" class="_value"><a
											data-v-3cad6a07=""
											href="http://baidu.com"
											target="_blank"
											class=" g-operation">
											baidu.com
									</a></span></div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">详细地址</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">--</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">行业</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">大美妆</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">图片</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">--</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">备注</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-c-black2"
											style="font-weight: bold;">
											--
									</span></span></div>
								</div>
							</div>
							<div class="v-sale-customer-info-block">
								<div class="_title"><span class="_title-bar g-bg-red-mid"/> <span
									class="g-fs-14 g-m-lr-5">系统记录</span></div>
								<div class="g-flex g-fw-w g-pd-l-10" style="margin-right: -30px;">
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">创建人</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">超管</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">最近更新</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">2019-03-18 15:23:58</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">创建时间</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">2019-03-18 13:46:15</span></span>
									</div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">转手次数</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-c-black2"
											style="font-weight: bold;">
											0
									</span></span></div>
									<div data-v-3cad6a07="" class="v-sale-customer-info-item"><span
										data-v-3cad6a07=""
										class="_label">领取时间</span>
										<span data-v-3cad6a07="" class="_value"><span
											data-v-3cad6a07=""
											class="g-m-r-10 g-c-black2">2019-03-18 13:46:15</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="ivu-tabs-tabpane" style="visibility: hidden;"/>
					<div class="g-pd-20 ivu-tabs-tabpane" style="visibility: hidden;"/>
				</div>
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
import { Spin, Drawer, CreatePortal } from '@wya/vc';

const config = {
	name: "vc-tpl-basic-keep-alive",
	components: {
		'vc-drawer': Drawer,
		'vc-spin': Spin,
	},
	props: {
		data: Object,
	},
	data() {
		return {
			title: '我是传过来的标题',
			width: 720,
			visible: false,
			loading: false,
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
		}
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
