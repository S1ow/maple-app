import config from '@/common/config'; // 导入私有配置

let _config = config.http,
		env = process.env.NODE_ENV === 'development'

export default function $http(options) {
	options.url = _config.url + options.url;
	options.token ? _config.header = {
		token: "xxxxxxxxxxxxxxx",
	} : _config.header = {}
  return new Promise((resolve, reject) => {
		//日志输出
		env && console.log("发起请求：" , options.url, "，参数：", typeof(options.data) === 'object' ? JSON.stringify(options.data) : options.data )
    // 拦截请求
    _config.complete = (response) => {
      //  request請求访问成功
      if (response.statusCode === 200) {
          // 接口请求成功
					env && console.log("请求：" , options.url, "成功，返回值：", JSON.stringify(response.data) )
          resolve(response);
      } else {
        // 处理catch 请求，不在本页面之外处理，统一在这里处理
				if(options.handle){
					env && console.log("请求：" , options.url, "异常，请在方法调用处处理该异常，返回值：", JSON.stringify(response.data) )
					reject(response)
				}else{
					try {
					  Promise.reject(response).catch(err => {
					    _page_error(response.statusCode || response.errMsg, response, options);
					  });
					} catch (e) {
					  console.log(e)
					}
				}
      }

    }
    // 开始请求
    uni.request(Object.assign({},_config, options));
  })
}

// request 统一处理错误
function _page_error(err, res, opt) {
  switch (err) {
		case 400:
		  // 错误码400的处理方式
		  env && console.error("请求接口:", opt.url , "异常，错误代码：", 400, ", 请检查：1、接口名是否书写正确？2、参数是否与接口匹配？3、后台接口开发人员是否已将代码发布到开发环境？")
		  break;
		case 401:
		  // 错误码401的处理方式
		  env && console.error("请求接口:", opt.url , "授权失败，错误代码：", 401, ", 请检查：header是否设置正确？")
		  break;
    case 404:
      // 错误码404的处理方式
      env && console.error("没有找到接口:", opt.url , "，错误代码：", 404, ", 请检查：1、接口名是否书写正确？2、参数是否与接口匹配？3、后台接口开发人员是否已将代码发布到开发环境？")
      break;
    case 405:
      env && console.error("请求接口:", opt.url , "异常，错误代码：", 405, ", 请检查：请求method是否填写正确？如：get写成post等")
      break;
		case 500:
		  env && console.error("请求接口:", opt.url , "后台代码异常，错误代码：", 500, ", 请联系后台接口开发人员检查代码。异常信息：", res.data.msg)
		  break;
  }
}