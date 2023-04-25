<template>
    <div>
            <div class="container">
            <div class="content">
                <h1  >证书查验</h1>
                <div class="search-box">
                    <input type="text" v-model="query" placeholder="请输入搜索内容">
                    <button @click="search">搜索</button>
                </div>
            </div>
        </div>

        <div class="modal-overlay" v-if="visible">
            <!-- 模态框内容 -->
            <div class="modal">
                <h2>证书编号：{{ title }}</h2>
                <p>{{ content }}</p>
                <img :src="link" alt="">
                <button @click="hideModal">关闭</button>
            </div>
        </div>
    </div>

</template>

<script>
import { getLinkById } from '../../api/links'

export default {
  data() {
    return {
      visible: false,
      title: '1',
      content: '',
      query: '',
      link: ''
    }
  },
  methods: {
    async search() {
      try{
        this.link = await getLinkById(this.query)
        console.log(this.link)
      } catch(error) {

      }     
      if(!this.link) {
        alert('证书编号不存在，请核对后查验！')
      } else {
        this.visible = true;
      }
    },
    hideModal() {
      this.visible = false;
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1em; /* 设置字体大小 */
  text-align: center;
}

.container {
  width: 100%;

}

.content {
    width: 300px;
    height: 400px;
    margin: auto;
    text-align: center;
   position: relative;
}

  .search-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal h2 {
  margin-top: 0;
}

.modal p {
  margin-bottom: 20px;
}

.modal img {
  max-width: 80%;
  max-height: calc(80vh - 60px); /* 图片高度最大为视口高度的80%减去其他内容占据的高度 */
  margin: 5px 0;
}

</style>