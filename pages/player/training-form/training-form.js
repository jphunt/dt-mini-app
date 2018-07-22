var Zan = require('../../../dist/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        padding: 0,
        value: '1',
        name: '选项一',
      },
      {
        padding: 0,
        value: '2',
        name: '选项二',
      },
    ],

    checked: {
      base: -1,
      color: -1,
      form: -1
    },

    activeColor: '#4b0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleSelectChange({ currentTarget = {}, detail = {} }) {
    const { value = '' } = detail;
    const { dataset = {} } = currentTarget;
    const type = dataset.type;
    this.setData({
      [`checked.${type}`]: value
    });
  }
})