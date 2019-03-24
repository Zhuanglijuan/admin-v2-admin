/**
 * Created by Samantha on 2019/3/24 下午3:01
 */
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Statistic {
    // 首页数据统计
    getHomeCount() {
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        })
    }
}

export default Statistic;
