<!-- 消息页面 -->

<template>
  <div v-show="authStore.checkAuth('Person')">
    <common-breadcrumb />
    <div class="content-container">
      <div class="title flex">
        <div>消息列表</div>
      </div>

      <div class="table-box">
        <el-table ref="msgTableRef" v-loading="loading" :data="info.list"
          :default-sort="{ prop: 'bornTimestamp', order: 'descending' }" border>

          <el-table-column type="selection" width="50" />
          <el-table-column prop="queueId" label="队列id" />

          <el-table-cloumn prop="操作" width="220">
            <template #default="{ row }">
              <div>查看</div>
            </template>
          </el-table-cloumn>


        </el-table>
        <div class="pagination flex">
          <el-pagination v-model:currentPage="pageNum" v-model:page-size="[10, 20, 30, 40]" :background="true"
            layout="total,sizes,prev,pager,next,jumper" :total="info.total" @size-change="handleSizeChange">
            </el>
        </div>
      </div>
      <MsgForm></MsgForm>
    </div>

  </div>
</template>

<script lang="ts" steup>
import api from '@/api'
import MsgForm from './components/msgForm.vue'
import type {Msg} from '@/types/msg_manage/msg'
import msgTable from '@/hooks/msgTable'
import msgApi from './hooks/msgApi'
// import { Search } from '@element-plus/icons-vue'

const personTableRef = ref()
let search = ref('')
let showForm = ref(false)
let formData = reactive<Partial<MsgFormData>>({
  status:'1'
})
let updateUid = ref<number>(-1)

provide('showForm',showForm)
provide('formData',formData)
provide('updateUid',updateUid)

const {pageNum,pageSize,handleSizeChange,handleCurrentChange,info,updateList,searchHandle} = useTable(getList)
provide('updateList',updateList)

watch(search,(newV)=>{
  const searchVal = {
    userName: newV
  }
  searchHandle(searchVal)
})

function showDetail(row:Msg){
  formData.queueId= row.queueId

  updateUid.value = row.queueId
}



</script>
<style scoped lang='scss'>
@import url('@/scss/table.scss');
</style>
