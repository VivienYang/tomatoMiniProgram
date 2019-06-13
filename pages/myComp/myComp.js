//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    createModalVisible: true,
  },
  onLoad: function () {
    
  },
  hideCreateModal(e){
    console.log(e)
    this.setData({
      createModalVisible:false
    })
  },
  showCreateModal(){
    this.setData({
      createModalVisible:true
    })
  },
  confirmCreateTask(e){
    console.log(e)
    let inputValue=e.detail.inputValue
    console.log(inputValue)
    //先保存数据
    // wx.switchTab({
    //   url:"pages/index/index"
    // })
  }
})
