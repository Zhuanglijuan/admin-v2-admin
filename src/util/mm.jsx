/*
 * @Author: Samantha
 * @Date: 2019-03-21 17:03:02
 * @Last Modified by: Samantha
 * @Last Modified time: 2019-03-22 15:32:38
 */
class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }
                    // 没有登陆状态，强制登录
                    else if (10 === res.status) {
                        this.doLogin();
                    }
                    else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.msg || err.statusText);
                }
            });
        });
    }

    // 跳转登陆
    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }

    // 获取url参数
    getUrlParam(name) {
        // param=123&param1=456
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        // result: ['param=123', '', '123', '&"]
        return result ? decodeURIComponent(result[2]) : null;
    }

    // 错误提示
    errorTips(errMsg) {
        alert(errMsg || '好像哪里不对了~');
    }

    // 存储本地存储
    setStorage(name, data) {
        let dataType = typeof data;
        let curTime = new Date().getTime();
        let expire = 1000 * 60 * 60 * 24; // 过期时间为24小时
        // json对象
        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify({
                value: data,
                time: curTime,
                expire: expire
            }));
        }
        // 基础类型
        else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
            window.localStorage.setItem(name, JSON.stringify({
                value: data,
                time: curTime,
                expire: expire
            }));
        }
        // 其他不支持的类型
        else {
            alert('该类型不能用于本地存储 ');
        }
    }

    // 取出本地存储内容
    getStorage(name) {
        let data = JSON.parse(window.localStorage.getItem(name));
        // 有值
        if (data) {
            // 本地存储过期
            if (new Date().getTime() - data.time > data.expire) {
                this.removeStorage(name);
                return '';
            }
            return data.value;
        }
        // 没有值
        else {
            return '';
        }
    }

    // 删除本地存储
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}

export default MUtil;
