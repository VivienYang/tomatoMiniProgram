// components/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //（内容）
    text:{
      type:String,
      value:''
    },
    size:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function(){
      console.log(this.data)
    }
  }
})
