define({ "api": [
  {
    "type": "get",
    "url": "/getAllFruitsData",
    "title": "水果列表数据",
    "name": "getAllFruitsData",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getAllFruitsData",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>水果数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>水果 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>水果名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.src",
            "description": "<p>水果详情图</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getOneFruit",
    "title": "单个水果数据",
    "name": "getOneFruit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>水果 ID</p>"
          }
        ]
      }
    },
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getOneFruit",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>水果数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>水果 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>水果名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.src",
            "description": "<p>水果详情图</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSON",
    "title": "学生列表数据",
    "name": "getStudentsJson",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSON",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSONCROS",
    "title": "学生列表数据(CROS)",
    "name": "getStudentsJsonCROS",
    "description": "<p>CROS 跨域资源共享，带有 &quot;Access-Control-Allow-Origin&quot;:&quot;*&quot; 响应头</p>",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSONCROS",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据(CROS)对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSONDelay",
    "title": "学生列表数据（延迟）",
    "name": "getStudentsJsonDelay",
    "description": "<p>延时五秒发送学生数据</p>",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSONDelay",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSONP.js",
    "title": "学生列表数据（JSONP）",
    "name": "getStudentsJsonP",
    "group": "Data",
    "description": "<p>用传入的 callback 函数包裹数据，以 callback(res) 形式返回 js 文件</p>",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSONP.js",
        "type": "url"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/uploadFile",
    "title": "上传文件",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "avatar",
            "description": "<p>二进制文件数据</p>"
          }
        ]
      }
    },
    "name": "uploadFile",
    "group": "File",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/uploadFile",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200=注册成功，201=注册失败，500=服务器错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>文件路径</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "File"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "d__itheima_course_Ajax_38_0922_Ajax_____02_____code_server_doc_main_js",
    "groupTitle": "d__itheima_course_Ajax_38_0922_Ajax_____02_____code_server_doc_main_js",
    "name": ""
  }
] });
