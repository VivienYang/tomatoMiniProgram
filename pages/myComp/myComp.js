//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    createModalVisible: true,
    showCancel:true,//confirm弹窗是否显示cancel按钮
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
    //...
    this.setData({
      createModalVisible:false
    })
  }
})
