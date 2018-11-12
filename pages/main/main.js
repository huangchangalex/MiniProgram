// pages/main/main.js
import Tip from "../../model/Tip";
import util from "../../utils/util.js"
//定义成员变量
let o=10;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
console.log(o);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //加载本地数据
    this.getData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 获取数据
   */
  getData: function() {
    var that = this;
    wx.getStorage({
      key: "tips",
      success: function(res) {
        let tips = res.data;
        that.setData({
          tipArray: tips
        })
      },
      fail: function() {
        let tips = that.data.tipArray;
        // if (tips.length == 0 || tips == null || tips == undefined) {
        //   for (let i = 0; i < 10; i++) {
        //     tips.push(new Tip("title" + i, i, "2018-10-26", i));
        //   }
        // }
        that.setData({
          tipArray: tips
        })
        wx.setStorage({
          key: "tips",
          data: tips
        })
      }
    })
  },
  /**
   * 跳转到编辑界面
   */
  toEditPage: function(event) {
    var tipId = event.currentTarget.dataset.tipId;
    wx.navigateTo({
      url: '../../pages/detail/detail?tipId=' + tipId,
    })
  },

  /**
   * 跳转到新增界面
   */
  toAddPage: function() {
    wx.navigateTo({
      url: '../../pages/add/add'
    })
  },
  /**
   * 弹出确认框是否删除
   */
  alertRemove: function(event) {
    var that=this;
    var tipId = event.currentTarget.dataset.tipId;
    wx.showModal({
      title: '删除',
      content: '是否删除此备注',
      success: function(res) {
        that.data.tipArray.splice(tipId,1);
        if (res.confirm) {
          that.setData({ tipArray: that.data.tipArray});
          wx.setStorage({
            key: "tips",
            data: that.data.tipArray
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
    return true;
  }
})