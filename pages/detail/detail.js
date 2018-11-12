// pages/detail/detail.js
import Tip from "../../model/Tip";
import util from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipId: "",
    tips: [],
    tip: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      tipId: options.tipId
    });
    this.getDetail(options.tipId)
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
    this.saveDetail();
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
   * 存储数据
   */
  saveDetail: function() {
    var saveArr = this.data.tips;
    saveArr[this.data.tip.tipId] = this.data.tip;
    wx.setStorage({
      key: "tips",
      data: saveArr
    })
  },

  /**
   * 以id获取数据
   */
  getDetail: function(tipId) {
    var that = this;
    wx.getStorage({
      key: "tips",
      success: function(res) {
        var tips = res.data;
        that.setData({
          tip: tips[that.data.tipId],
          tips: tips
        })
      },
    })
  },

  /**
   * input
   */
  onInput: function(event) {
    this.data.tip.content = event.detail.value;
    this.data.tip.date = util.formatTime(new Date)
    this.setData({
      tip: this.data.tip
    })
  }
})