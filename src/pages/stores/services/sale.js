/**
  * 使用mixin混入，比如筛选中的地址数据，xxx
  * 具体开发模式 ~ 待定
  */
import { initTreeData } from '@utils/utils';
import { createService } from './utils';

export const services = {
// 三级地区
	...createService({
		key: "region3",
		url: "_COMMON_REGION_GET",
		cache: true,
		parser: data => initTreeData(data, "national_code", "region_name", "children")
	}),
};
