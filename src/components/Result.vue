<template>
  <el-dialog
    :visible="visible"
    @close="$emit('update:visible', false)"
    width="600px"
    class="c-Result"
  >
    <div class="dialog-title" slot="title">
      <span :style="{ fontSize: '18px' }">
        抽奖结果
      </span>
      <span :style="{ fontSize: '14px', color: '#999', marginLeft: '10px' }">
        (点击号码可以删除)
      </span>
    </div>
    <div
      v-for="(item, index) in resultList"
      :key="index"
      class="listrow"
      @click="
        event => {
          deleteRes(event, item);
        }
      "
    >
      <span class="name">
        {{ item.name + (item.label == 'specialAward' ? '「免裁券」':
        item.label == 'firstPrize' ? '「 MacPro 」' :
        item.label == 'secondPrize' ? '「华为 Mate 30 Pro 」' :
        item.label == 'thirdPrize' ? '「华为 Mate 30 」' :
        item.label == 'fourthPrize' ? '「红包 300 元 」' :
        item.label == 'fifthPrize' ? '「 红包 100 元 」' : '' ) }}
      </span>
      <span class="value">
        <span v-if="item.value && item.value.length === 0">
          暂未抽奖
        </span>
        <span
          class="card"
          v-for="(data, j) in item.realName"
          :key="j"
          :data-res="data"
        >
          {{ data }}
        </span>
      </span>
    </div>
  </el-dialog>
</template>
<script>
import { conversionCategoryName, getDomData } from '@/helper/index';
export default {
  name: 'c-Result',
  props: {
    visible: Boolean
  },
  computed: {
    result: {
      get() {
        return this.$store.state.result;
      },
      set(val) {
        this.$store.commit('setResult', val);
      }
    },
    resultList() {
      const list = [];
      for (const key in this.result) {
        if (this.result.hasOwnProperty(key)) {
          const element = this.result[key];
          let name = conversionCategoryName(key);          
          list.push({
            label: key,
            name,
            value: element
          });
        }
      }
      const all = this.$store.state.list;
      const newList = list.map((item)=>{
        let realName = [];
        for ( const k in item.value) {
          const value = item.value[k];          
          for ( const p in all ) {
            if ( value == all[p].key ) {
              const name = all[p].name;
              realName.push(name);
            }
          }
        }
        item.realName = realName;
        return item;
      })
      return newList;
    }
  },
  methods: {
    deleteRes(event, row) {
      const value = getDomData(event.target, 'res');
      let Index = '';
      for ( const key in row.realName ) {
        if ( value == row.realName[key] ) {
          Index = row.value[key]
        }
      }
      if (!Index) {
        return;
      }
      this.$confirm('此操作将移除该中奖号码，确认删除?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          if (Index) {
            const result = this.result;
            result[row.label] = this.result[row.label].filter(
              item => item !== Number(Index)
            );
            this.result = result;
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
    }
  }
};
</script>
<style lang="scss">
.c-Result {
  .listrow {
    display: flex;
    line-height: 30px;
    .name {
      width: 200px;
      color: red; 
      font-weight: bold;
    }
    .value {
      flex: 1;
    }
    .card {
      display: inline-block;
      width: 60px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      border-radius: 4px;
      border: 1px solid #ccc;
      background-color: #f2f2f2;
      margin-left: 5px;
      margin-top: 5px;
      position: relative;
      cursor: pointer;
      &:hover {
        &::before {
          content: '删除';
          width: 100%;
          height: 100%;
          background-color: #ccc;
          position: absolute;
          left: 0;
          top: 0;
          color: red;
        }
      }
    }
  }
}
</style>
