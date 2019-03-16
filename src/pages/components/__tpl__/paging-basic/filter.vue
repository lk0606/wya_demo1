<template>
	<div>
		<div class="g-flex g-jc-sb">
			<div>
				<vc-input
					v-model="keywords.search"
					placeholder="请输入公司名称、姓名或电话搜索"
					style="width: 240px;"
					clearable
					@enter="handleSearch"
					@change="handleInputChange"
				/>
				<vc-button
					type="primary"
					class="g-red-btn g-m-l-10"
					@click="handleSearch"
				>
					搜索
				</vc-button>
				<span
					class="g-m-l-20 g-fs-12 g-pointer g-no-select"
					@click="handleToggle"
				>
					{{ show ? '更多搜索条件' : '更多搜索条件' }}
					<vc-icon :type="show ? 'up' : 'down'" class="g-fs-12" />
				</span>
			</div>
			<div >
				<span class="g-flex g-jc-sb">
					<span class="g-fs-12  g-m-r-20 g-relative" style="top: 7px;">
						如何进行录入到账？
						<a class="g-c-blue-mid g-pointer">视频教程</a>
					</span>
					<div class="g-red-btn-line g-m-r-5">选择表头</div>
					<div class="g-red-btn-line">添加客户</div>
				</span>
			</div>
		</div>
		<vc-expand
			ref="expand"
			v-model="show"
		>
			<div class="g-pd-t-16">
				<div
					class="g-search-form g-lh-50 g-bg-gray-mid g-pd-lr-10"
					style="padding-top: 5px; padding-bottom: 5px;"
				>
					<div class="g-flex g-fw-w" style="min-width: 796px;">
						<div class="g-m-r-5">
							<vc-input
								v-model="keywords.name"
								style="width: 220px;"
								placeholder="请输入负责人或手机号搜索"
								@enter="handleSearch"
								@change="handleInputChange"
							/>
						</div>
						<div class="g-m-r-5">
							<vc-select
								v-model="value"
								clearable
								style="width: 220px;"
								placeholder="请选择接通状态"
							>
								<vc-option
									v-for="item in cityList"
									:value="item.value"
									:key="item.value"
								>{{ item.label }}</vc-option>
							</vc-select>
						</div>
						<div class="g-m-r-5">
							<vc-select
								v-model="value"
								clearable
								style="width: 220px;"
								placeholder="请选择客户意向"
							>
								<vc-option
									v-for="item in cityList"
									:value="item.value"
									:key="item.value"
								>{{ item.label }}</vc-option>
							</vc-select>
						</div>
						<div class="g-m-r-5">
							<vc-date-picker
								class="_date-picker-placeholder"
								type="date"
								confirm
								placeholder="上次跟进时间"
								style="width: 220px;"/>
						</div>
						<div class="g-m-r-5">
							<vc-select
								v-model="value"
								clearable
								style="width: 220px;"
								placeholder="全部客户"
							>
								<vc-option
									v-for="item in cityList"
									:value="item.value"
									:key="item.value"
								>{{ item.label }}</vc-option>
							</vc-select>
						</div>
						<div class="g-m-r-5">
							<vc-select
								v-model="value"
								clearable
								style="width: 220px;"
								placeholder="请选择客户等级"
							>
								<vc-option
									v-for="item in cityList"
									:value="item.value"
									:key="item.value"
								>{{ item.label }}</vc-option>
							</vc-select>
						</div>
						<div class="g-m-r-5">
							<vc-date-picker
								class="_date-picker-placeholder"
								type="date"
								confirm
								placeholder="保护时间（开始）"
								style="width: 220px;"/>
						</div>
						<div class="g-m-r-5">
							<vc-date-picker
								class="_date-picker-placeholder"
								type="date"
								confirm
								placeholder="保护时间（结束）"
								style="width: 220px;"/>
						</div>
					</div>
				</div>
			</div>

		</vc-expand>
	</div>
</template>

<script>
import { URL } from '@utils/utils';
import { debounce } from 'lodash';

export default {
	name: 'tpl-filter2',
	components: {
	},
	data() {
		const { query = {} } = this.$route;
		return {
			keywords: {
				search: String(query.search || ''),
				name: String(query.name || ''),
			},
			show: true,
			cityList: [
				{
					value: 'New York',
					label: 'New York'
				},
				{
					value: 'London',
					label: 'London'
				},
				{
					value: 'Sydney',
					label: 'Sydney'
				},
				{
					value: 'Ottawa',
					label: 'Ottawa'
				},
				{
					value: 'Paris',
					label: 'Paris'
				},
				{
					value: 'Canberra',
					label: 'Canberra'
				}
			],
			value: '请选择接通状态',
		};
	},
	methods: {
		handleSearch: debounce(function (value) {
			let query = {
				...this.$route.query,
				...this.keywords,
			};
			this.$router.replace(URL.merge({
				path: `/tpl/paging/basic`,
				query
			}));
			this.$store.commit('TPL_PAGING_BASIC_LIST_INIT');
		}, 300),
		handleToggle() {
			this.$refs.expand.toggle();
		},
		handleChange(obj) {
			let type = Object.keys(obj)[0];
			let value = obj[type];
			this.keywords[type] = value;
			this.handleSearch();
		},
		handleInputChange(e) {
			if (!e.target.value) {
				this.handleSearch();
			}
		},
		handleExport() {}
	}
};

</script>

<style lang="scss">
._date-picker-placeholder {
	input::-webkit-input-placeholder {
		color: #333 !important;
	}
}
</style>

