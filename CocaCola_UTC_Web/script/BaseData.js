//创建下拉框的常用Model
Ext.define('SelectModel', {
    extend: 'Ext.data.Model',
    fields: [
    { type: 'string', name: 'ID' },
    { type: 'string', name: 'Type' }
    ]
});
//用户状态数据集
var UserStatus = [
  { "ID": "允许", "Type": "允许" },
  { "ID": "禁止", "Type": "禁止" }
];
var StatusStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: UserStatus
});
//性别数据集
var UserSex = [
  { "ID": "男", "Type": "男" },
  { "ID": "女", "Type": "女" }
];
var SexStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: UserSex
});
////职位数据集
//var UserPosition = [
//  { "ID": "咨询师", "Type": "咨询师" },
//  { "ID": "咨询经理", "Type": "咨询经理" },
//  { "ID": "业务负责人", "Type": "业务负责人" }
//];
//var PositionStore = Ext.create('Ext.data.Store', {
//    model: 'SelectModel',
//    data: UserPosition
//});
//工作地点数据集
var UserWorkAdress = [
  { "ID": "上海", "Type": "上海" },
  { "ID": "南京", "Type": "南京" },
  { "ID": "成都", "Type": "成都" },
  { "ID": "深圳", "Type": "深圳" },
  { "ID": "北京", "Type": "北京" },
  { "ID": "西安", "Type": "西安" },
  { "ID": "重庆", "Type": "重庆" },
  { "ID": "武汉", "Type": "武汉" },
  { "ID": "广州", "Type": "广州" }
];
var WorkAdressStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: UserWorkAdress
});
//学历数据集
var DegreeData = [
  { "ID": "小学", "Type": "小学" },
  { "ID": "初中", "Type": "初中" },
  { "ID": "高中", "Type": "高中" },
  { "ID": "专科", "Type": "专科" },
  { "ID": "本科", "Type": "本科" },
  { "ID": "研究生", "Type": "研究生" },
  { "ID": "博士", "Type": "博士" }
];
var DegreeStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: DegreeData
});
//班级数据集
var ClassData = [
  { "ID": "1", "Type": "1期" },
  { "ID": "2", "Type": "2期" },
];
var ClassStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: ClassData
});
//优先级数据集
var StudentPriorityData = [
  { "ID": "高", "Type": "高" },
  { "ID": "中", "Type": "中" },
  { "ID": "低", "Type": "低" }
];
var StudentPriorityStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: StudentPriorityData
});
//资源来源数据集
var ResoureceData = [
    { "ID": "51Job", "Type": "51Job" },
    { "ID": "58同城", "Type": "58同城" },
    { "ID": "成都人才网", "Type": "成都人才网" },
    { "ID": "大街网", "Type": "大街网" },
    { "ID": "赶集网", "Type": "赶集网" },
    { "ID": "智联招聘", "Type": "智联招聘" },
    { "ID": "中华英才网", "Type": "中华英才网" },
    { "ID": "转介绍", "Type": "转介绍" },
    { "ID": "现场招聘会", "Type": "现场招聘会" },
    { "ID": "未知来源", "Type": "未知来源" }
];
var ResoureceStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: ResoureceData
});
//付款方式数据集
var PayTypeData = [
  { "ID": "现金", "Type": "现金" },
  { "ID": "刷卡", "Type": "刷卡" },
  { "ID": "银行分期", "Type": "银行分期" }
];
var PayTypeStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: PayTypeData
});
//付款周期数据集
var PayInstallmentData = [
  { "ID": "一次付清", "Type": "一次付清" },
  { "ID": "分期付款", "Type": "分期付款" },
  { "ID": "零首付", "Type": "零首付" }
];
var PayInstallmentStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: PayInstallmentData
});
//学员财务状态数据集
var PayStatustData = [
  { "ID": "1", "Type": "已缴未清" },
  { "ID": "2", "Type": "已缴已清" },
  { "ID": "3", "Type": "未缴未清" },
  { "ID": "4", "Type": "未申请缴费" }
];
var PayStatusStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: PayStatustData
});

//简历状态数据集
var ResumeStatustData = [
  { "ID": "解析失败", "Type": "解析失败" },
  { "ID": "解析成功", "Type": "解析成功" },
  { "ID": "未解析", "Type": "未解析" }
];
var ResumeStatusStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: ResumeStatustData
});
//分配状态数据集
var IfUsedStatustData = [
  { "ID": "已分配", "Type": "已分配" },
  { "ID": "未分配", "Type": "未分配" }
];
var IfUsedStatusStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: IfUsedStatustData
});
////学员财务状态数据集
//var ConsultantTeacherData = [
//  { "ID": "1014", "Type": "朱武" },
//  { "ID": "1015", "Type": "张三" }
//];
//var ConsultantTeacherStore = Ext.create('Ext.data.Store', {
//    model: 'SelectModel',
//    data: ConsultantTeacherData
//});

var InterviewResultData = [
  { "ID": "等待面试", "Type": "等待面试" },
  { "ID": "继续面试", "Type": "继续面试" },
  { "ID": "面试成功", "Type": "面试成功" },
  { "ID": "面试失败", "Type": "面试失败" }
];
var InterviewResultStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: InterviewResultData
});

///班级类别
var ClassTypetData = [
  { "ID": "就业班", "Type": "就业班" },
  { "ID": "认证班", "Type": "认证班" }
];
var ClassTypeStore = Ext.create('Ext.data.Store', {
    model: 'SelectModel',
    data: ClassTypetData
});