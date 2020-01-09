import Vue from 'vue';
import Vuex from 'vuex';
import {
  setData,
  resultField,
  newLotteryField,
  listField
} from '@/helper/index';

const listStr = "1	武亚涛-武亚涛-2	武亚涛-武亚涛-3	武亚涛-武亚涛-4	武亚涛-武亚涛-5	武亚涛-武亚涛-6	武亚涛-武亚涛-7	武亚涛-武亚涛-8	武亚涛-武亚涛-9	武亚涛-武亚涛-10	武亚涛-武亚涛-11	武亚涛-武亚涛-12	武亚涛-武亚涛-13	武亚涛-武亚涛-14	武亚涛-武亚涛-15	武亚涛-武亚涛-16	武亚涛-武亚涛-17	武亚涛-武亚涛-18	武亚涛-武亚涛-19	武亚涛-武亚涛-20	武亚涛-武亚涛-21	武亚涛-武亚涛-22	武亚涛-武亚涛-23	武亚涛-武亚涛-24	武亚涛-武亚涛-25	武亚涛-武亚涛-26	武亚涛-武亚涛-27	武亚涛-武亚涛-28	武亚涛-武亚涛-29	武亚涛-武亚涛-30	武亚涛-武亚涛-31	武亚涛-武亚涛-32	武亚涛-武亚涛-33	武亚涛-武亚涛-34	武亚涛-武亚涛-35	武亚涛-武亚涛-36	武亚涛-武亚涛-37	武亚涛-武亚涛-38	武亚涛-武亚涛-39	武亚涛-武亚涛-40	武亚涛-武亚涛-41	武亚涛-武亚涛-42	武亚涛-武亚涛-43	武亚涛-武亚涛-44	武亚涛-武亚涛-45	武亚涛-武亚涛-46	武亚涛-武亚涛-47	武亚涛-武亚涛-48	武亚涛-武亚涛-49	武亚涛-武亚涛-50	武亚涛-武亚涛-51	武亚涛-武亚涛-52	武亚涛-武亚涛-53	武亚涛-武亚涛-54	武亚涛-武亚涛-55	武亚涛-武亚涛-56	武亚涛-武亚涛-57	武亚涛-武亚涛-58	武亚涛-武亚涛-59	武亚涛-武亚涛-60	武亚涛-武亚涛-61	武亚涛-武亚涛-62	武亚涛-武亚涛-63	武亚涛-武亚涛-64	武亚涛-武亚涛-65	武亚涛-武亚涛-66	武亚涛-武亚涛-67	武亚涛-武亚涛-68	武亚涛-武亚涛-69	武亚涛-武亚涛-70	武亚涛-武亚涛-71	武亚涛-武亚涛-72	武亚涛-武亚涛-73	武亚涛-武亚涛-74	武亚涛-武亚涛-75	武亚涛-武亚涛-76	武亚涛-武亚涛-77	武亚涛-武亚涛-78	武亚涛-武亚涛-79	武亚涛-武亚涛-80	武亚涛-武亚涛-81	武亚涛-武亚涛-82	武亚涛-武亚涛-83	武亚涛-武亚涛-84	武亚涛-武亚涛-85	武亚涛-武亚涛-86	武亚涛-武亚涛-87	武亚涛-武亚涛-88	武亚涛-武亚涛-89	武亚涛-武亚涛-90	武亚涛-武亚涛-91	武亚涛-武亚涛-92	武亚涛-武亚涛-93	武亚涛-武亚涛-94	武亚涛-武亚涛-95	武亚涛-武亚涛-96	武亚涛-武亚涛-97	武亚涛-武亚涛-98	武亚涛-武亚涛-99	武亚涛-武亚涛-100	武亚涛-武亚涛-101	武亚涛-武亚涛-102	武亚涛-武亚涛-103	武亚涛-武亚涛-104	武亚涛-武亚涛-105	武亚涛-武亚涛-106	武亚涛-武亚涛-107	武亚涛-武亚涛-108	武亚涛-武亚涛-109	武亚涛-武亚涛-110	武亚涛-武亚涛-111	武亚涛-武亚涛-112	武亚涛-武亚涛-113	武亚涛-武亚涛-114	武亚涛-武亚涛-115	武亚涛-武亚涛-116	武亚涛-武亚涛-117	武亚涛-武亚涛-118	武亚涛-武亚涛-119	武亚涛-武亚涛-120	武亚涛-武亚涛-121	武亚涛-武亚涛-122	武亚涛-武亚涛-123	武亚涛-武亚涛-124	武亚涛-武亚涛-125	武亚涛-武亚涛-126	武亚涛-武亚涛-127	武亚涛-武亚涛-128	武亚涛-武亚涛-129	武亚涛-武亚涛-130	武亚涛-武亚涛-131	武亚涛-武亚涛-132	武亚涛-武亚涛-133	武亚涛-武亚涛-134	武亚涛-武亚涛-135	武亚涛-武亚涛-136	武亚涛-武亚涛-137	武亚涛-武亚涛-138	武亚涛-武亚涛-139	武亚涛-武亚涛-140	武亚涛-武亚涛-141	武亚涛-武亚涛-142	武亚涛-武亚涛-143	武亚涛-武亚涛-144	武亚涛-武亚涛-145	武亚涛-武亚涛-146	武亚涛-武亚涛-147	武亚涛-武亚涛-148	武亚涛-武亚涛-149	武亚涛-武亚涛-150	武亚涛-武亚涛-151	武亚涛-武亚涛-152	武亚涛-武亚涛-153	武亚涛-武亚涛-154	武亚涛-武亚涛-155	武亚涛-武亚涛-156	武亚涛-武亚涛-157	武亚涛-武亚涛-158	武亚涛-武亚涛-159	武亚涛-武亚涛-160	武亚涛-武亚涛-161	武亚涛-武亚涛-162	武亚涛-武亚涛-163	武亚涛-武亚涛-164	武亚涛-武亚涛-165	武亚涛-武亚涛-166	武亚涛-武亚涛-167	武亚涛-武亚涛-168	武亚涛-武亚涛-169	武亚涛-武亚涛-170	武亚涛-武亚涛-171	武亚涛-武亚涛-172	武亚涛-武亚涛-173	武亚涛-武亚涛-174	武亚涛-武亚涛-175	武亚涛-武亚涛-176	武亚涛-武亚涛-177	武亚涛-武亚涛-178	武亚涛-武亚涛-179	武亚涛-武亚涛-180	武亚涛-武亚涛-181	武亚涛-武亚涛-182	武亚涛-武亚涛-183	武亚涛-武亚涛-184	武亚涛-武亚涛-185	武亚涛-武亚涛-186	武亚涛-武亚涛-187	武亚涛-武亚涛-188	武亚涛-武亚涛-189	武亚涛-武亚涛-190	武亚涛-武亚涛-191	武亚涛-武亚涛-192	武亚涛-武亚涛-193	武亚涛-武亚涛-194	武亚涛-武亚涛-195	武亚涛-武亚涛-196	武亚涛-武亚涛-197	武亚涛-武亚涛-198	武亚涛-武亚涛-199	武亚涛-武亚涛-200	武亚涛-武亚涛-201	武亚涛-武亚涛-202	武亚涛-武亚涛-203	武亚涛-武亚涛-204	武亚涛-武亚涛-205	武亚涛-武亚涛-206	武亚涛-武亚涛-207	武亚涛-武亚涛-208	武亚涛-武亚涛-209	武亚涛-武亚涛-210	武亚涛-武亚涛-211	武亚涛-武亚涛-212	武亚涛-武亚涛-213	武亚涛-武亚涛-214	武亚涛-武亚涛-215	武亚涛-武亚涛-216	武亚涛-武亚涛-217	武亚涛-武亚涛-218	武亚涛-武亚涛-219	武亚涛-武亚涛-220	武亚涛-武亚涛-221	武亚涛-武亚涛-222	武亚涛-武亚涛-223	武亚涛-武亚涛-224	武亚涛-武亚涛-225	武亚涛-武亚涛-226	武亚涛-武亚涛-227	武亚涛-武亚涛-228	武亚涛-武亚涛-229	武亚涛-武亚涛-230	武亚涛-武亚涛-231	武亚涛-武亚涛-232	武亚涛-武亚涛-233	武亚涛-武亚涛-234	武亚涛-武亚涛-235	武亚涛-武亚涛-236	武亚涛-武亚涛-237	武亚涛-武亚涛-238	武亚涛-武亚涛-239	武亚涛-武亚涛-240	武亚涛-武亚涛-241	武亚涛-武亚涛-242	武亚涛-武亚涛-243	武亚涛-武亚涛-244	武亚涛-武亚涛-245	武亚涛-武亚涛-246	武亚涛-武亚涛-247	武亚涛-武亚涛-248	武亚涛-武亚涛-249	武亚涛-武亚涛-250	武亚涛-武亚涛-251	武亚涛-武亚涛-252	武亚涛-武亚涛-253	武亚涛-武亚涛-254	武亚涛-武亚涛-255	武亚涛-武亚涛-256	武亚涛-武亚涛-257	武亚涛-武亚涛-258	武亚涛-武亚涛-259	武亚涛-武亚涛-260	武亚涛-武亚涛-261	武亚涛-武亚涛-262	武亚涛-武亚涛-263	武亚涛-武亚涛-264	武亚涛-武亚涛-265	武亚涛-武亚涛-266	武亚涛-武亚涛-267	武亚涛-武亚涛-268	武亚涛-武亚涛-269	武亚涛-武亚涛-270	武亚涛-武亚涛-271	武亚涛-武亚涛-272	武亚涛-武亚涛-273	武亚涛";
const deflist = [];
const defphotos = [];
const rows = listStr.split('-');
if (rows && rows.length > 0) {
  rows.forEach(item => {
    const rowList = item.split(/\t|\s/);
    if (rowList.length >= 2) {
      const key = Number(rowList[0].trim());
      const name = rowList[1].trim();
      key &&
      deflist.push({
          key, // 工号
          name // 姓名
        });
      key && defphotos.push({
        id: key,
        value: require('@/assets/avatars/' + key + '.jpg')
      });
    }
  });
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: {
      name: 'JOINUS-2020-年会抽奖',
      number: 273,
      specialAward: 0,
      firstPrize: 1,
      secondPrize: 5,
      thirdPrize: 8,
      fourthPrize: 10,
      fifthPrize: 20
    },
    result: {
      specialAward: [],
      firstPrize: [],
      secondPrize: [],
      thirdPrize: [],
      fourthPrize: [],
      fifthPrize: []
    },
    newLottery: [],
    list: deflist,
    photos: defphotos
  },

  mutations: {
    setClearStore(state) {
      state.config = {
        name: 'JOINUS-2020-年会抽奖',
        number: 273,
        specialAward: 0,
        firstPrize: 1,
        secondPrize: 5,
        thirdPrize: 8,
        fourthPrize: 10,
        fifthPrize: 20
      };
      state.result = {
        specialAward: [],
        firstPrize: [],
        secondPrize: [],
        thirdPrize: [],
        fourthPrize: [],
        fifthPrize: []
      };
      state.newLottery = [];
      state.list= deflist,      
      state.photos= defphotos
    },
    setConfig(state, config) {
      state.config = config;
    },
    setResult(state, result = {}) {
      state.result = result;

      setData(resultField, state.result);
    },
    setNewLottery(state, newLottery) {
      if (state.newLottery.find(item => item.name === newLottery.name)) {
        return;
      }
      state.newLottery.push(newLottery);
      setData(newLotteryField, state.newLottery);
    },
    setList(state, list) {
      const arr = state.list;
      list.forEach(item => {
        const arrIndex = arr.findIndex(data => data.key === item.key);
        if (arrIndex > -1) {
          arr[arrIndex].name = item.name;
        } else {
          arr.push(item);
        }
      });
      state.list = arr;
      state.config.number = arr.length;

      setData(listField, arr);
    },
    setPhotos(state, photos) {
      state.photos = photos;
    }
  },

  actions: {},
  modules: {}

});
