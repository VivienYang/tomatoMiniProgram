# 番茄闹钟微信小程序
### 三个组件
* button组件

* clock组件

* confirm组件
#### 属性列表：
```
  properties: {
    //（内容）
    placeholder:{
      type:String,
      value:''
    },
    visible:{
      type:Boolean,
      value:false
    },
    showCancel:{
      type:Boolean,
      value:true
    },
    sureTxt:{
      type:String,
      value:'确定'
    },
    cancelTxt:{
      type:String,
      value:'取消'
    }
  },
```
1. placeholder type:String 默认''
2. visible(显示隐藏)  type:Boolean  默认false
3. showCancel(是否显示取消按钮) type:Boolean  默认true
4. sureTxt(sure按钮的文字)  type:String 默认'确定'
5. cancelTxt(cancel按钮的文字)  type:String 默认'取消'

#### 方法列表
```
  confirm:function(e){
    let inputValue=this.data.inputValue
    if(inputValue && inputValue.length>0){
      var myEventDetail = {inputValue:inputValue} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('confirm', myEventDetail, myEventOption)
      this.setData({inputValue:''})
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
    this.setData({inputValue:''})
  },
```
1. bindconfirm 点击确定按钮
2. bindcancel 点击取消按钮