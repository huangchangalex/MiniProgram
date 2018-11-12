// pages/add/add.js
import Tip from "../../model/Tip";
import util from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip: new Tip()
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
    this.addData();
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
   * input
   */
  onInput: function(event) {
    this.data.tip.content = event.detail.value;
    this.data.tip.date = util.formatTime(new Date);
    this.setData({
      tip: this.data.tip
    })
  },
  /**
   * 获取数据
   */
  addData: function() {
    var that = this;
    try {
      var value = wx.getStorageSync('tips')
      if (value) {
        let tips = value;
        that.data.tip.tipId = tips.length;
        tips.push(that.data.tip);
        wx.setStorageSync('tips', tips);
      }
    } catch (e) {
      // Do something when catch error
    }
  }
})