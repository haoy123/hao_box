import { query as queryUsers, queryCurrent } from '@/services/user';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      // const response = yield call(queryCurrent);
      // todo  get userInfo for service
      const response = {
        'name': 'simpo',
        'avatar': 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        'userid': '00000001',
        'email': 'simpo@tech.com',
        'signature': '海纳百川，有容乃大',
        'title': '交互专家',
        'group': '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        'tags': [{ 'key': '0', 'label': '很有想法的' }, { 'key': '1', 'label': '专注设计' }, {
          'key': '2',
          'label': '辣~',
        }, { 'key': '3', 'label': '大长腿' }, { 'key': '4', 'label': '川妹子' }, { 'key': '5', 'label': '海纳百川' }],
        'notifyCount': 12,
        'unreadCount': 11,
        'country': 'China',
        'geographic': { 'province': { 'label': '安徽省', 'key': '330000' }, 'city': { 'label': '合肥市', 'key': '330100' } },
        'address': '科学大道',
        'phone': '0752-268888888',
      };
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
