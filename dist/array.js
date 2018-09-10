import token from '../libs/utils/token'
console.log(token)
var operations = token.getOperateToken('x0601000')

var token = window.localStorage.getItem("token")

let routers = {
  "index": {
    "name": '回到首页',
    "uri": './imscentry.html',
    "img": 'color-swatches.png'
  },
  "management": {
    "name": '管理',
    "children": [
      {
        "name": '拆票规则', //模块标题
        "authShow": ['s0201000'],//资源码
        "uri": '/management/role.html',//链接地址
        "icon": 'ccooperation.png',//模块图标
        "bg": 'bgrule.png',//首页背景图片
        "describe": '结算单拆分发票的规则设置和管理',//首页模块描述
      },
      {
        "name": '开票取用规则',
        "authShow": ['s0301000'],
        "uri": '/management/invoicerule.html',
        "img": 'invoicerulehead.png',
        "bg": 'bgkrule.png',
        "describe": '票面信息指销方的： 地址，电话，银行，账号'
      },
      {
        "name": '开票人员取用规则',
        "authShow": ['s0801000'],
        "uri": '/management/staffrule.html',
        "img": 'flat-line-icon@3x.png',
        "bg": 'bgkrule.png',
        "describe": '票面信息指销方的： 收款人，复核人，开票人'
      },
      {
        "name": '数据集设置',
        "authShow": ['s0401000'],
        "uri": '/management/collection.html',
        "img": 'cdataset.jpg',
        "bg": 'bgdataset.png',
        "describe": '为各个职能配置相应的管理范围'
      },
      {
        "name": '职能设置',
        "authShow": ['s0501000'],
        "uri": '/management/role.html',
        "img": 'crole.png',
        "bg": 'bgroleset.png',
        "describe": '设置需要用到的所有工作职能，为员工添加职能'
      },
      {
        "name": '员工管理',
        "authShow": ['s0601000'],
        "uri": '/management/staff.html',
        "img": 'cstaff.jpg',
        "bg": 'bgstaff.png',
        "describe": '管理员工及对应的权限'
      },
      {
        "name": '手动开票助手配置管理',
        "authShow": ['s1001000'],
        "uri": '/management/administration.html',
        "img": 'cstaff.jpg',
        "bg": 'bgstaff.png',
        "describe": '管理员工及对应的权限'
      },
      {
        "name": '订单开票助手配置管理',
        "authShow": ['s1101000'],
        "uri": '/management/adminassistant.html',
        "img": 'cstaff.jpg',
        "bg": 'bgstaff.png',
        "describe": '管理员工及对应的权限'
      },
      /* {
        "name": '企业开票信息',
        "authShow": ['s1101000'],
        "uri": '/management/company.html',
        "img": 'staffman.png',
        "bg": 'bgstaff.png',
        "describe": '企业开票信息'
      }, */
      /* {
        "name": '票面人员管理',
        "authShow": ['s1101000'],
        "uri": '/management/personnelManagement.html',
        "img": 'staffman.png',
        "bg": 'bgstaff.png',
        "describe": '票面人员管理'
      }, */
      {
        "name": '公司信息管理',
        "authShow": ['s1301000'],
        "uri": '/management/enterprisemanagement.html',
        "img": 'enterprisemanagement.png',
        "bg": 'bgstaff.png',
        "describe": '管理员工及对应的权限'
      },
      {
        "name": '税控终端信息维护',
        "authShow": ['s0901000'],
        "uri": '/taxControlDevices.html',
        "img": 'iconTaxDisc.jpg',
        "bg": 'bgTaxDisc.png',
        "describe": '管理和维护终端信息'
      },
      {
        "name": '税收分类编码管理',
        "authShow": ['x0301000'],
        "uri": '/seller/taxClassification.html',
        "img": 'taxClassification.png',
        "bg": 'bgTax.png',
        "describe": '税收分类编码的审核、修改、查看详情'
      },
      {
        "name": '税收分类编码运维管理',
        "authShow": ['x0401001'],
        "uri": '/seller/serverEngineerClassification.html',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '税收分类编码的审核、修改、查看详情'
      },
      {
        "name": '税收分类编码运维管理',
        "authShow": 'x0401001',
        "uri": '/seller/serverEngineerClassification.html',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '税收分类编码的审核、修改、查看详情'
      },
      /* {
        "name": '预制发票回填管理',
        "authShow": ['x0501000'],
        "uri": '/makeInv.html',
        "img": 'taxClassification.png',
        "bg": 'bgTax.png',
        "describe": '查询结算单，预制发票的生成与回填'
      }, */
      {
        "name": '数据统计',
        "authShow": ['n0101001', 'n0101002', 'n0102004'],
        "uri": '/seller/dataStatistics.html',
        "img": 'imscTax.png',
        "bg": 'bgdatacol.png',
        "describe": '全局相关数据统计分析'
      },
      {
        "name": '异常发票处理',
        "authShow": ['u0101001'],
        "uri": '/seller/preinvoiceUnlock.html',
        "img": 'cubill.png',
        "bg": 'bgdatacol.png',
        "describe": '异常发票处理'
      },
      {
        "name": '协同履历',
        "authShow": ['c0101001'],
        "uri": '/seller/collaborativeSearch.html',
        "img": 'cubill.png',
        "bg": 'bgdatacol.png',
        "describe": '协同数据查询重发'
      },
      {
        "name": '协同重发',
        "authShow": ['c0102000'],
        "uri": '/seller/invoiceCollaboration.html',
        "img": 'cubill.png',
        "bg": 'bgdatacol.png',
        "describe": '根据条件生成协同数据，并发送'
      },
      {
        "name": '发票库存',
        "authShow": ['k0101000'],
        "uri": '/seller/invoiceStock.html',
        "img": 'taxClassification.png',
        "bg": 'bgTax.png',
        "describe": '根据条件生成协同数据，并发送'
      },
      {
        "name": '库存预警',
        "authShow": ['y0101000'],
        "uri": '/seller/stockPreWarn.html',
        "img": 'taxClassification.png',
        "bg": 'bgTax.png',
        "describe": '设置发票库存的预警通知'
      },
      {
        "name": '地址管理',
        "authShow": ['w0101000'],
        "uri": '/logistic/#/addressManage/receiveAddres',
        "img": 'inaddressmanage.png',
        "bg": 'bgTax.png',
        "describe": ''
      },
      {
        "name": '销项发票报表',
        "authShow": ['b0101000'],
        "uri": '/management/invoiceStatementOut.html',
        "img": 'cdata.png',
        "bg": 'bgdatacol.png',
        "describe": ''
      },
      {
        "name": '税控终端管理',
        "authShow": ['b0101000'],
        "uri": '/management/taxTerminalNo.html',
        "img": 'taxTerminalIcon.png',
        "bg": 'bgkrule.png',
        "describe": '维护和管理税控终端号'
      }
    ]
  },
  //销项
  "outInvoice": {
    "name": '销项',
    "children": [
      {
        "name": '销项结算单',
        "authShow": ['x0101000'],
        "uri": '/seller/settlement.html',
        "img": 'sinvoice.png',
        "bg": 'bgsinpaper.png',
        "describe": '以结算单为基础和客户协作，开具符合双方标准的增值税发票'
      },
      {
        "name": '销项发票',
        "authShow": ['x0201000'],
        "uri": '/seller/outinvoice.html',
        "img": 'cuinvoice.png',
        "bg": 'bgsinvoice.png',
        "describe": '管理已开具的增值税发票'
      },
      {
        "name": '进转销',
        "authShow": ['x0601000'],
        "uri": '/api-v1/sso/xyj?Header-Access-Token='+token+'&Header-Operation-Token='+operations,
        "img": 'cuinvoice.png',
        "bg": 'in-to-out-bg.jpg',
        "describe": '管理已开具的增值税发票'
      },
      {
        "name": '业务单',
        "authShow": ['d0101000'],
        "uri": '/seller/serviceOrder.html',
        "img": 'cubill.png',
        "bg": 'bgsinvoice.png',
        "describe": '业务单'
      },
      {
        "name": '销项物流',
        "authShow": ['d0101000'],
        "uri": '/logistic/#/logisticsOut/pendingSend',
        "img": 'culogistic.png',
        "bg": 'bgslogistic.png',
        "describe": '批量发送快递，管理结算单及发票物流状况'
      }
    ]
  },
  // 进项
  "inInvoice":{
    "name": '进项',
    "children": [
      {
        "name": '进项结算单',
        "authShow": ['j0101000'],
        "uri": '/seller/inSettlement.html',
        "img": 'ininvoice.png',
        "bg": 'bgininvoice.png',
        "describe": '以结算单为依据符合标准的增值税发票，指导供应商开具'
      },
      {
        "name": '进项发票配单',
        "authShow": ['j0201000'],
        "uri": '/purchaser/match.html',
        "img": 'inmanch.png',
        "bg": 'bginmatch.png',
        "describe": '管理结算单和发票对应关系，支持发票与结算单匹配与解除匹配'
      },
      {
        "name": '进项发票认证',
        "authShow": ['j0301000'],
        "uri": '/purchaser/invoiceAuth.html',
        "img": 'bgincerti.png',
        "bg": 'bgincerti.png',
        "describe": '对满足条件的增值税专用发票进行传统认证及电子底账认证，管理发票认证状态'
      },
      {
        "name": '进项发票审核',
        "authShow": ['j0401000'],
        "uri": '/purchaser/ininvoice.html',
        "img": 'incertific.png',
        "bg": 'bginverri.png',
        "describe": '汇总对比多个来源获取到的发票信息，处理异常'
      },
      {
        "name": '扫描识别',
        "authShow": ['j0501000'],
        "uri": '/purchaser/scan.html',
        "img": 'inscan.png',
        "bg": 'bgscan.png',
        "describe": '对从扫描仪或取得发票或其他图像进行文字识别，管理最终识别结果'
      },
      {
        "name": '进项物流',
        "authShow": ['w0201000'],
        "uri": '/logistic/#/logisticsIn/pendingReceive',
        "img": 'inlogistics.png',
        "bg": 'bginlogistic.png',
        "describe": '签收供应商快递，管理发票物流状态，批量寄送退件'
      },
      {
        "name": '手动验真',
        "authShow": ['j0701000'],
        "uri": '/purchaser/invoiceVerification.html',
        "img": 'inverification.png',
        "bg": 'bginverification.png',
        "describe": '通过手动输入查询方式，对增值税发票进行验真'
      },
      {
        "name": '认证封锁',
        "authShow": ['j0801000'],
        "uri": '/purchaser/authBlockade.html',
        "img": 'authBlockade.png',
        "bg": 'bgAuthBlockade.png',
        "describe": '管理公司认证功能（解锁或者封锁）'
      },
      {
        "name": '票税助手',
        "authShow": ['j0901000'],
        "uri": ((window.location.host == 'i.xforceplus.com'?'http://www.xfplink.cn/xforceplus/#/showInvoices':'http://www.e-fp.cn/xforceplus/#/showInvoices')+'?token='+localStorage.getItem('token')+'&operationToken='+(JSON.parse(localStorage.getItem('operateToken'))['g0101000']||'')),
        "img": 'menu_invoice_helper.png',
        "bg": 'bginvoice_helper.png',
        "describe": '管理公司认证功能（解锁或者封锁）'
      }
    ]
  },
  //运维
  "operation":{
    "name": '进项',
    "children": [
      {
        "name": '预制发票回填管理',
        "authShow": ['x0501000'],
        "uri": '/seller/makeInv.html',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '查询结算单，预制发票的生成与回填'
      },
      {
        "name": '查询预制发票备注信息',
        "authShow": ['x0501000'],
        "uri": '/seller/preInvoiceRemark.html',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '根据租户名称，结算单号，订单号，预制发票ID查询预制发票备注信息'
      }
    ]
  },
  //商务
  "shangwu":{
    "name": '商务智能',
    "children": [
      {
        "name": '商业自助分析工具',
        "authShow": ['b0201001'],
        "uri": '/hades/',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '以进项、销项数据为基础提供自助式数据分析工具'
      }
    ]
  },
  //综合
  "gongying":{
    "name": '综合',
    "children": [
      {
        "name": '协同公司账户',
        "authShow": ['h1101000'],
        "uri": '/management/makeInv.html',
        "img": 'ccooperation.png',
        "bg": 'bgTax.png',
        "describe": '协同公司账户详情'
      },
      {
        "name": '协同公司订单',
        "authShow": ['h1201000'],
        "uri": '/management/companyOrder.html',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '协同公司订单详情'
      },
      {
        "name": '分润财务管理',
        "authShow": ['h1301000'],
        "uri": '/management/financialManagement.html',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '订单分润管理'
      },
      {
        "name": '结算财务管理',
        "authShow": ['h1501000'],
        "uri": '/management/settlementFinancialManagement.html',
        "img": 'imscTax.png',
        "bg": 'bgTax.png',
        "describe": '分润结算、对账管理'
      },
    ]
  }
}

export default routers
