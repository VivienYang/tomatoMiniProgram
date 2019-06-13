Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //（内容）
    placeholder:{
      type:String,
      value:''
    },
    visible:{
      type:Boolean,
      value:false
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
    },
    confirm:function(e){
      let inputValue=this.data.inputValue
      if(inputValue && inputValue.length>0){
        var myEventDetail = {inputValue:inputValue} // detail对象，提供给事件监听函数
        var myEventOption = {} // 触发事件的选项
        this.triggerEvent('confirm', myEventDetail, myEventOption)
      }else{
        wx.showToast({
          title: '输入内容不能为空',
          icon: 'none',
          duration: 2000
        })
      }
    },
    cancel:function(e){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项,如bubbles（事件是否冒泡）
      this.triggerEvent('cancel', myEventDetail, myEventOption)
    },
    inputChange:function(e){
      let inputValue=e.detail.value;
      this.setData({
        inputValue:inputValue
      })
    }
  }
})