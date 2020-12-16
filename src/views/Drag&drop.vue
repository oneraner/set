<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="drop">
            <div v-for="(item, i) in list[0]" :key="i">
              <drop @drop="drop1(item, ...arguments)">
                <drag class="drag"
                  :transfer-data="{ item: item, list: list[0], example: 'lists' }">
                  {{ item }}
                </drag>
              </drop>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="drop">
            <div v-for="(item, i) in list[1]" :key="i">
              <drop @drop="drop2(item, ...arguments)">
                <drag class="drag"
                  :transfer-data="{ item: item, list: list[1], example: 'lists' }">
                  {{ item }}
                </drag>
              </drop>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop'

export default {
  data () {
    return {
      list: [
        ['A', 'B', 'C'],
        ['D', 'E', 'F']
      ]
    }
  },
  methods: {
    drop1 (item, data) {
      const list = data.list
      // drag 所在的陣列
      this.list[0].splice(this.list[0].indexOf(item), 0, data.item)
      // 接收的 drop 新增 item
      list.splice(list.indexOf(data.item), 1)
      // 刪除原陣列的 item
    },
    drop2 (item, data) {
      const list = data.list
      // drag 所在的陣列
      this.list[1].splice(this.list[1].indexOf(item), 0, data.item)
      // 接收的 drop 新增 item
      list.splice(list.indexOf(data.item), 1)
      // 刪除原陣列的 item
    }
  },
  components: { Drag, Drop }
}
</script>
