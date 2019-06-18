
const protHTTP = 'http://'
const host = '39.105.149.213'
const port = ':6789'
const requestPrefix = protHTTP + host + port
const url = {
  bindUserInfo:   requestPrefix + '/recruit/v2/user/bindUserInfo',
  postDetails:    requestPrefix + '/recruit/v2/post/getAllDetails',
  allPostList:    requestPrefix + '/recruit/v2/post/getAllPostList',
  getUserInfo:    requestPrefix + '/recruit/v2/user/getUserInfo',
  addResume:      requestPrefix + '/recruit/v2/user/addResume',
  getResumeList:  requestPrefix + '/recruit/v2/user/getResumeList',
  addDetail:      requestPrefix + '/recruit/v2/post/addDetail',
  getPostList:    requestPrefix + '/recruit/v2/post/getPostList',
  deliverResume:  requestPrefix + '/recruit/v2/deliver/deliverResume',
  getDeliverList: requestPrefix + '/recruit/v2/user/getDeliverList',
  addCompany: requestPrefix + '/recruit/v2/user/addCompany',
  getCompanyInfo: requestPrefix + '/recruit/v2/user/getCompanyInfo',
  getAllCompanyInfo: requestPrefix + '/recruit/v2/user/getAllCompanyInfo',
}
module.exports = {
  url: url,
}