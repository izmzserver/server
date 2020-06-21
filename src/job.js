const express = require('express');

const Router = express.Router();

Router.get('/list', (req, res) => {
    return res.json({success: true, code: 0, data: {
        list:[
            {
              id: 10000,
              job: '高级交互工程师',
              salary: '10k-20k',
              tag: ['全职', ' 五险一金', '周末双休', '年底分红'],
              workingYears: '5-10年',
              educationalLevel: '本科',
              company: {
                name: '北京阿里巴巴',
                address: '北京',
                size: '500-1000人',
                industry: ['电子商务', '移动互联网'],
                icon: 'http://b-ssl.duitang.com/uploads/item/201807/31/20180731152127_fctgj.jpg',
              },
            },
            {
              id: 10001,
              job: '高级交互工程师',
              salary: '10k-20k',
              tag: ['全职', ' 五险一金', '周末双休', '年底分红'],
              workingYears: '5-10年',
              educationalLevel: '本科',
              company: {
                name: '北京阿里巴巴',
                address: '北京',
                size: '500-1000人',
                industry: ['电子商务', '移动互联网'],
                icon: 'http://b-ssl.duitang.com/uploads/item/201807/31/20180731152127_fctgj.jpg',
              },
            },
            {
              id: 10002,
              job: '高级交互工程师',
              salary: '10k-20k',
              tag: ['全职', ' 五险一金', '周末双休', '年底分红'],
              workingYears: '5-10年',
              educationalLevel: '本科',
              company: {
                name: '北京阿里巴巴',
                address: '北京',
                size: '500-1000人',
                industry: ['电子商务', '移动互联网'],
                icon: 'http://b-ssl.duitang.com/uploads/item/201807/31/20180731152127_fctgj.jpg',
              },
            },
            {
              id: 10003,
              job: '高级交互工程师',
              salary: '10k-20k',
              tag: ['全职', ' 五险一金', '周末双休', '年底分红'],
              workingYears: '5-10年',
              educationalLevel: '本科',
              company: {
                name: '北京阿里巴巴',
                address: '北京',
                size: '500-1000人',
                industry: ['电子商务', '移动互联网'],
                icon: 'http://b-ssl.duitang.com/uploads/item/201807/31/20180731152127_fctgj.jpg',
              },
            },
            {
              id: 10004,
              job: '高级交互工程师',
              salary: '10k-20k',
              tag: ['全职', ' 五险一金', '周末双休', '年底分红'],
              workingYears: '5-10年',
              educationalLevel: '本科',
              company: {
                name: '北京阿里巴巴',
                address: '北京',
                size: '500-1000人',
                industry: ['电子商务', '移动互联网'],
                icon: 'http://b-ssl.duitang.com/uploads/item/201807/31/20180731152127_fctgj.jpg',
              },
            },
          ]
    }})
})

module.exports = Router;