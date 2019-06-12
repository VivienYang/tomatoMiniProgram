// components/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //（按钮样式） change:渐变色  white:白底
    btnType:{
      type:String,
      value:''
    },
    //（按钮尺寸）small:小尺寸  normal:正常尺寸
    size:{
      type:String,
      value:''
    },
    //（按钮内容）
    text:{
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
