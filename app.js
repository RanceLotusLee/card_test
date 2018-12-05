App({
  onLaunch: function () {

    let res = wx.getSystemInfoSync();
    this.globalData.systemInfo = res;
    // 当前设备信息
    console.log('设备信息:');
    console.log(this.globalData.systemInfo);
  },
  globalData: {
    systemInfo: {},
  }
})