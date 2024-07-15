import router from "@system.router"

var that
var xxx
// 定义结构体
function Question(question, answer, imgurl,sa,sb,sc,sd) {
    this.question = question;
    this.answer = answer;
    this.imgurl = imgurl;
    this.sa=sa;
    this.sb=sb;
    this.sc=sc;
    this.sd=sd;
}

// 创建结构体
var ExamPaper = [];

// 添加题目到结构体数组
ExamPaper.push(new Question("截至目前，世界上人口最多的国家是?", 2, " ","A 中国","B 印度","C 美国","D 俄罗斯"));
ExamPaper.push(new Question("以下哪个不属于四大文明古国?", 3, " ","A 古埃及","B 古印度","C 古希腊","D 古巴比伦"));
ExamPaper.push(new Question("以下国家名称与相应首都对应正确的一项是?", 3, " ","A 加拿大-多伦多","B 澳大利亚-悉尼","C 土耳其-安卡拉","D 阿拉伯联合酋长国-迪拜"));
ExamPaper.push(new Question("以下不属于原苏联加盟国的是?", 4, " ","A 土库曼斯坦","B 摩尔多瓦","C 拉脱维亚","D 保加利亚"));
ExamPaper.push(new Question("以下不属于阿拉伯文化圈的国家是?", 3, " ","A 苏丹","B 利比亚","C 伊朗","D 卡塔尔"));
ExamPaper.push(new Question("以下哪个国家不属于内陆国?", 3, " ","A 塞尔维亚","B 玻利维亚","C 格鲁吉亚","D 亚美尼亚"));
ExamPaper.push(new Question("以下哪个国家不属于社会主义国家?", 2, " ","A 印度","B 蒙古","C 朝鲜","D 越南"));
ExamPaper.push(new Question("以下名人与国籍对应有误的一项是?", 3, " ","A 孟德斯鸠 拿破仑 雨果-法国","B 达芬奇 伽利略 但丁-意大利","C 贝多芬 莫扎特 巴赫-德国","D 列宁 托尔斯泰 普希金-俄国"));
ExamPaper.push(new Question("以下不说西班牙语的国家是?", 4, " ","A 哥伦比亚","B 智利","C 古巴","D 苏里南"));
ExamPaper.push(new Question("以下不属于加勒比海岛国的是?", 2, " ","A 牙买加","B 瓦努阿图","C 巴巴多斯","D 古巴"));
ExamPaper.push(new Question("人口750万，海岸线360千米，面积1113km^2的城市，大概率位于以下哪个国家？", 1, " ","A 中国","B 日本","C 美国","D 英国"));
ExamPaper.push(new Question("下列选项中与蒙古国陆地边境线长度最接近的国家是?", 3, " ","A 加拿大","B 阿尔及利亚","C 智利","D 马里"));
ExamPaper.push(new Question("根据图片提示猜省份", 2, "./imgs/lvl13.png","A 上海","B 澳门","C 广东","D 天津"));



// 遍历结构体数组并显示题目
for (var i = 0; i < ExamPaper.length; i++) {


}


export default{
  private:{
    selected:0,
    num:0,
    q:"",
    qimg:"",
    opt1:"",
    opt2:"",
    opt3:"",
    opt4:"",
    answer:1
  },
  onInit(){
    that=this
    this.displayExam(0)
  }
  ,routeBack() {
    // 跳转到应用内的某个页面，router用法详见：文档->接口->页面路由
    router.back({
      uri: "/pages/select"
    })},

    changeColor(num){
      this.selected=num
    },
    displayExam(level){
      this.num=level+1
      let q=ExamPaper[level]
      this.q=q.question
      this.opt1=q.sa
      this.opt2=q.sb
      this.opt3=q.sc
      this.opt4=q.sd
      this.answer=q.answer
      this.qimg=q.imgurl
      console.log(q)
    }
  }
  
