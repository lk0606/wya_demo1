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
		<vc-modal
			v-model="showModal"
			:mask="true"
			:mask-closable="false"
			:esc-closable="false"
			:scrollable="true"
			:draggable="false"
			title="提示"
			ok-text="确认"
			cancel-text="取消"
		>
			确认取消修改吗
		</vc-modal>
		<template v-slot:header >
			<div class="_head-title">{{ title }}</div>
		</template>
		<vc-spin v-if="loading" />

		<div class="ivu-drawer-body">
			<span
				class="g-pointer iconfont icon-clear"
				style="font-size: 14px; position: fixed; right: 34px; top: 68px;"/>
			<div class="_title-wrapper">
				<span class="_edit-head-text">
					<span class="_left-text">负责人：</span>
					<span class="_right-text">{{ customerHeadData.staff_name }}</span>
				</span>
				<span class="_edit-head-text">
					<span class="_left-text">客户来源：</span>
					<span class="_right-text">{{ customerHeadData.info_source }}</span>
				</span>
				<span class="_edit-head-text">
					<span class="_left-text">客户级别：</span>
					<span class="_right-text">{{ customerHeadData.level_str }}</span>
					<!--<i class="iconfont icon-arrow-up g-c-blue-mid g-fs-12 g-pointer"/>-->
				</span>
				<span class="_edit-head-text">
					<span class="_left-text">信息来源：</span>
					<span class="_right-text">{{ customerHeadData.source }}</span>
				</span>
				<span class="_edit-head-text" style="min-width: 280px;">
					<span class="_left-text">上次跟进时间：</span>
					<span class="_right-text">{{ customerHeadData.visit_time }}</span>
				</span>
				<span class="_edit-head-text" style="min-width: 370px;">
					<span class="_left-text">保护时间至：</span>
					<span class="_right-text">{{ customerHeadData.expiration_time }}</span>
				</span>
			</div>
			<vc-tabs
				class="_edit-tabs-style"
				@click="handleClick"
				@tab-remove="handleRemove"
			>
				<vc-tabs-pane label="客户">
					<!--基本信息-->
					<div class="_title">
						<span class="_title-bar g-bg-red-mid"/>
						<span class="g-fs-14 g-m-lr-5">基本信息</span>
						<span
							v-show="!isEdit"
							class="g-operation g-m-lr-5 g-fs-14"
							@click="handleEdit"
						>编辑</span>
						<span
							v-show="isEdit"
							class="g-operation g-m-lr-5 g-fs-14"
							@click="handleSave()"
						>保存</span>
						<span
							v-show="isEdit"
							class="g-operation g-m-lr-5 g-fs-14"
							@click="handleCancerEdit"
						>取消</span>
					</div>
					<!--基本信息-->
					<vc-form
						ref="formValidate"
						:model="formValidate"
						:rules="ruleValidate"
					>
						<div class="v-sale-customer-info-block">
							<div class="g-flex g-fw-w g-pd-l-10" style="margin-right: -30px;">
								<div class="_sale-customer-info-item">
									<span v-show="!isEdit" :class="{'_label':true, 'g-lh-32': isEdit}">公司名称</span>
									<span v-show="!isEdit" class="_value">
										<span class="g-m-r-10 g-c-black2">{{ customerMainData.company_name }}</span>
									</span>
									<vc-form-item
										v-show="isEdit"
										class="_edit-form-item"
										label="公司名称:"
										prop="company_name">
										<vc-input
											v-model="formValidate.company_name"
											class="_edit-input"
											clearable
											placeholder="请输入公司名称"
											@change="handleChange"
											@focus="handleFocus"
											@blur="handleBlur"
											@enter="handleEnter"
										/>
									</vc-form-item>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">公司规模</span>
									<span v-show="!isEdit" class="_value">
										<span class="g-m-r-10 g-c-black2">
											{{ customerMainData.scale }}
										</span>
									</span>
									<vc-select
										v-show="isEdit"
										v-model="customerMainData.scale"
										clearable
										style="width: 220px;"
										placeholder="请选择公司规模"
									>
										<vc-option
											v-for="item in scaleList"
											:value="item.scale_name"
											:key="item.scale_id"
										>{{ item.scale_name }}</vc-option>
									</vc-select>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">电话</span>
									<span v-show="!isEdit" class="_value">
										<span class=" g-c-black2" style="font-weight: bold;">
											{{ customerMainData.tel }}
										</span>
									</span>
									<vc-input
										v-show="isEdit"
										v-model="customerMainData.tel"
										class="_edit-input"
										disabled
										placeholder="请输入客户电话"
									/>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">
										客户姓名
									</span>
									<span v-show="!isEdit" class="_value">
										<span class="g-m-r-10 g-c-black2">
											{{ customerMainData.customer_name }}
										</span>
									</span>
									<vc-input
										v-show="isEdit"
										v-model="customerMainData.customer_name"
										class="_edit-input"
										clearable
										placeholder="请输入客户姓名"
										@change="handleChange"
										@focus="handleFocus"
										@blur="handleBlur"
										@enter="handleEnter"
									/>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">注册资金
										<span v-show="!isEdit">（万元）</span>
									</span>
									<span v-show="!isEdit" class="_value">
										<span class="g-m-r-10 g-c-black2">
											{{ customerMainData.capital }}
											万元</span>
									</span>
									<vc-input
										v-show="isEdit"
										v-model="customerMainData.capital"
										class="_edit-input"
										placeholder="请输入注册资金"
										@change="handleChange"
										@focus="handleFocus"
										@blur="handleBlur"
										@enter="handleEnter"
									>
										<i slot="suffix">万元</i>
									</vc-input>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">地区</span>
									<span v-show="!isEdit" class="_value">
										<span >
											<span class="g-m-r-10 g-c-black2">
												{{ customerMainData.province_name }}
											</span>
											<span class="g-m-r-10 g-c-black2">
												{{ customerMainData.city_name }}
											</span>
											<span class="g-m-r-10 g-c-black2">
												{{ customerMainData.area_name }}
											</span>
										</span>
									</span>
									<div v-if="isEdit" class="_edit-input">
										<vc-cascader :data-source="region3" v-model="areaVal"/>
									</div>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">网址</span>
									<span v-show="!isEdit" class="_value">
										<a
											href="http://baidu.com"
											target="_blank"
											class=" g-operation">
											{{ customerMainData.url }}
										</a>
									</span>
									<vc-input
										v-show="isEdit"
										v-model="customerMainData.url"
										class="_edit-input"
										clearable
										placeholder="请输入公司网址"
										@change="handleChange"
										@focus="handleFocus"
										@blur="handleBlur"
										@enter="handleEnter"
									/>
								</div>

								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">行业</span>
									<span v-show="!isEdit" class="_value">
										<span class="g-m-r-10 g-c-black2">
											{{ customerMainData.industry }}
										</span>
									</span>
									<vc-select
										v-show="isEdit"
										v-model="customerMainData.industry"
										clearable
										style="width: 220px;"
										placeholder="请选择行业"
									>
										<vc-option
											v-for="(item) in industryList"
											:value="item.industry_name"
											:key="item.industry_id"
										>{{ item.industry_name }}</vc-option>
									</vc-select>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">详细地址</span>
									<span v-show="!isEdit" class="_value">
										<span class="g-m-r-10 g-c-black2">
											{{ customerMainData.address }}
										</span>
									</span>
									<vc-textarea
										v-show="isEdit"
										v-model="customerMainData.address"
										:autosize="true"
										class="_edit-input"
										style="margin-top: 10px;"
										placeholder="请输入详细地址"
									/>
								</div>
								<div
									v-show="!isEdit"
									class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">图片</span>
									<span class="_value">
										<span class="g-m-r-10 g-c-black2">
											<vc-imgs-preview
												:data-source="customerMainData.image"
												:render-row="renderRow"
												class="_value"
											/>
										</span>
									</span>
								</div>
								<div class="_sale-customer-info-item">
									<span :class="{'_label':true, 'g-lh-32': isEdit}">备注</span>
									<span v-show="!isEdit" class="_value">
										<span class="g-c-black2" style="font-weight: bold;">
											{{ customerMainData.remarks }}
										</span>
									</span>
									<vc-textarea
										v-show="isEdit"
										v-model="customerMainData.remarks"
										:autosize="true"
										class="_edit-input"
										style="margin-top: 10px;"
										placeholder="请输入备注"
									/>
								</div>
							</div>
						</div>
					</vc-form>

					<!--系统记录-->
					<div class="v-sale-customer-info-block">
						<div class="_title">
							<span class="_title-bar g-bg-red-mid"/>
							<span class="g-fs-14 g-m-lr-5">系统记录</span>
						</div>
						<div class="g-flex g-fw-w g-pd-l-10" style="margin-right: -30px;">
							<div class="_sale-customer-info-item">
								<span :class="{'_label':true, 'g-lh-32': isEdit}">创建人</span>
								<span class="_value">
									<span class="g-m-r-10 g-c-black2">
										{{ customerMainData.init_staff_name }}
									</span>
								</span>
							</div>
							<div class="_sale-customer-info-item">
								<span :class="{'_label':true, 'g-lh-32': isEdit}">最近更新</span>
								<span class="_value">
									<span class="g-m-r-10 g-c-black2">
										{{ customerMainData.update_time }}
									</span>
								</span>
							</div>
							<div class="_sale-customer-info-item">
								<span :class="{'_label':true, 'g-lh-32': isEdit}">创建时间</span>
								<span class="_value">
									<span class="g-m-r-10 g-c-black2">
										{{ customerMainData.create_time }}
									</span>
								</span>
							</div>
							<div class="_sale-customer-info-item">
								<span :class="{'_label':true, 'g-lh-32': isEdit}">转手次数</span>
								<span class="_value">
									<span class="g-c-black2" style="font-weight: bold;">
										{{ customerMainData.turn }}
									</span>
								</span>
							</div>
							<div class="_sale-customer-info-item">
								<span :class="{'_label':true, 'g-lh-32': isEdit}">领取时间</span>
								<span class="_value">
									<span class="g-m-r-10 g-c-black2">
										{{ customerMainData.get_time }}
									</span>
								</span>
							</div>
						</div>
					</div>
				</vc-tabs-pane>
				<vc-tabs-pane label="联系人">联系人</vc-tabs-pane>
				<vc-tabs-pane label="销售记录">销售记录</vc-tabs-pane>
			</vc-tabs>
			<div class="_footer">
				<!--<button type="button" class="ivu-btn ivu-btn-default"><span>录入到账</span></button>-->
				<!--<button type="button" class="ivu-btn ivu-btn-default"><span>归还</span></button>-->
				<!--<button type="button" class="ivu-btn ivu-btn-default"><span>指派</span></button>-->
				<!--<button type="button" class="ivu-btn ivu-btn-default"><span>添加进白名单</span></button>-->
				<!--<button type="button" class="ivu-btn ivu-btn-default"><span>删除</span></button>-->
			</div>
		</div>
	</vc-drawer>
</template>

<script>
import { URL, Storage } from '@utils/utils';
import { Spin, Drawer, CreatePortal, Message } from '@wya/vc';
import { services } from "@stores/services/sale";

const config = {
	name: "vc-tpl-basic-keep-alive",
	components: {
		'vc-drawer': Drawer,
		'vc-spin': Spin
	},
	props: {
		data: Object
	},
	mixins: [services.region3()],
	data() {
		return {
			showModal: false,
			isEdit: false,
			title: this.data.company_name,
			width: 720,
			visible: false,
			loading: false,
			areaVal: [],
			formValidate: {
				company_name: '',
			},
			ruleValidate: {
				company_name: [{
					required: true, message: '请输入公司名称'
				}],
				capital: [{
					required: true, pattern: /^([1-9][\d]{0,10}|0)([.]?[\d]{1,2})?$/, message: '请输入注册资金', trigger: 'blur'
				}],
				customer_name: [{
					required: true, message: '请输入客户姓名', trigger: 'blur'
				}],
				cityValue: [{
					require: true, type: 'array', message: '请选择地区', trigger: 'blur'
				}],
				industry: [{
					required: true, message: '请选择所属行业', trigger: 'blur'
				}]
			}
		};
	},
	computed: {
		customerMainData() {
			return JSON.parse(JSON.stringify(this.$store.state.tplPagingBasic.customerMainData));
		},
		customerHeadData() {
			return this.$store.state.tplPagingBasic.customerHeadData;
		},
		industryList() {
			return this.$store.state.tplPagingBasic.industryList;
		},
		scaleList() {
			let scaleList = JSON.stringify(this.$store.state.tplPagingBasic.scaleList);
			scaleList = JSON.parse(scaleList);
			return scaleList;
		}
	},
	created() {
	},
	mounted() {
		this.visible = true;
		// this.company_name = this.customerMainData.company_name
	},
	updated() {
	},
	methods: {
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
		renderRow(h, params) {
			const { src, index } = params;
			// return <img src={src.url} key={src.url} style={{ width: '100px', height: '100px' }} />;
			return h('img', {
				attrs: {
					src,
					width: 100,
					height: 100,
				},
				on: {
					click: (e) => console.log(e)
				}
			});
		},
		getTableData(page, pageSize) {
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
		handleCancerEdit() {
			this.isEdit = false;
			this.showModal = true;
		},
		handleEdit() {
			this.isEdit = true;
			this.areaVal = [
				this.customerMainData.province,
				this.customerMainData.city,
				this.customerMainData.area
			];
		},
		handleSave() {
			this.$refs.formValidate.validate((valid) => {
				if (!valid) {
					Message.error('必填项未填写', {
						onClose: () => {
							console.log('必填项未填写');
						}
					});
				} else {
					this.setPortalMainData();
				}
			});
			// this.getPortalMainData();
			// this.getPortalHeadData();
			// this.getTableData();
		},
		setPortalMainData() {
			const { query = {} } = URL.parse();
			return this.request({
				url: 'TPL_TABLE_ITEM_POST',
				type: 'POST',
				param: {
					...query,
					own_id: this.customerMainData.own_id,
					staff_id: Storage.get('user').data.staff.staff_id,
					company_name: this.customerMainData.company_name,
					customer_name: this.customerMainData.customer_name,
					industry_id: this.customerMainData.industry_id,
					scale_id: this.customerMainData.scale_id,
					province: this.customerMainData.province,
					city: this.customerMainData.city,
					area: this.customerMainData.area,
					capital: this.customerMainData.capital,
					address: this.customerMainData.address,
					url: this.customerMainData.url,
					remarks: this.customerMainData.remarks,
					customer_id: this.data.customer_id
				},
				loading: false,
				requestType: "form-data:json"
			}).then((res) => {
				// console.log(res, 'res');
				this.handleSaveState(res.status);
			}).catch((error) => {
				console.log(error, 'error');
			});
		},
		loadData(opts = {}) {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
		handleSaveState(status) {
			if (status === 1) {
				this.isEdit = false;
				Message.success('保存成功', {
					onClose: () => {
						console.log('保存成功');
					}
				});
			} else if (status === 0) {
				this.isEdit = false;
				Message.error('保存失败', {
					onClose: () => {
						console.log('保存失败');
					}
				});
			} else {
				this.isEdit = true;
				Message.error('必填项未填写', {
					onClose: () => {
						console.log('保存失败');
					}
				});
			}
		},
		handleCancel() {
			this.visible = false;
			this.$emit('close');
		},
		handleClick() {
			console.log('click');
		},
		handleRemove() {
			console.log('click');
		},
		handleChange() {
			console.log(this.value);
		},
		handleFocus() {
			console.log('聚焦的回调');
		},
		handleBlur() {
			console.log('失焦的回调');
		},
		handleEnter() {
			console.log('回车键的回调');
		}
	}
};

export default config;


export const Edit = CreatePortal({
	alive: true,
	aliveRegExp: {
		// className: /(ivu-btn|v-transfer-dom)/
		className: /(el-table__row | pswp)/
	}
}, config);
</script>
<style lang="scss">
.ivu-input-suffix {
	i {
		color: #4b4f57;
		font-size: 12px;
		font-style: normal;
		right: 10px;
		font-family: Microsoft YaHei !important;
	}
}
._edit-input {
	width: 220px;
}
._edit-tabs-style {
	.ivu-tabs-nav-container {
		background: #f5f5f6;
		border-bottom: 2px solid #d4d7db;
	}
}
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
._edit-head-text {
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
._sale-customer-info-item {
	display: flex;
	border-bottom: 1px solid #e7e7e7;
	width: 300px;
	padding-top: 5px;
	padding-bottom: 5px;
	margin: 15px 40px 5px 0;
	._label {
		color: #818794;
		flex: 1;
		height: 32px;
	}
	._value {
		width: 200px;
	}

}
._footer {
	width: 720px;
	height: 60px;
	position: fixed;
	bottom: 0;
	right: 0;
	box-shadow: 0 -2px 9.9px 0.1px rgba(0, 0, 0, 0.08);
	padding: 10px 16px;
	background: #fff;
	display: flex;
	align-items: center;
}
._edit-form-item {
	margin-bottom: 20px !important;
	display: flex;
	> label {
		color: #818794;
		flex: 1;
		text-align: left !important;
		width: 80px;
	}
}
</style>
