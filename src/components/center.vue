<template>
<div id="center">
  <div id="top">
   <div class="lop .swiper-container">
     <swiper :options="swiperOption" ref="mySwiper" class="tabPlay">
       <swiper-slide class="slideBox">
         <img src="../assets/lop_1.jpg">
       </swiper-slide>
       <swiper-slide class="slideBox">
         <img src="../assets/lop_2.jpg">
       </swiper-slide>
     </swiper>
   </div>
    <div class="lop_nav">
      <div class="wal">
        <ul>
          <li class="li_no">
            <a href="">
              <span>HOME</span>
              首页
            </a>
          </li>
          <li>
            <a href="">
              <span>BRAND</span>
              美莱品牌
            </a>
            <div class="s_nav">
              <div class="list">
                <ul class="list_ul">
                  <li>
                    <a href="">走进美莱</a>
                  </li>
                  <li>
                    <a href="">旗下连锁</a>
                  </li>
                  <li>
                    <a href="">战略合作</a>
                  </li>
                  <li>
                    <a href="">硬件设施</a>
                  </li>
                  <li>
                    <a href="">新闻资讯</a>
                  </li>
                  <li>
                    <a href="">诚聘英才</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="">
              <span>CHAIN</span>
              连锁医院
            </a>
            <div class="s_nav s_nav_2">
              <div class="list">
                <div class="list_div">
                  <p>华东地区：</p>
                  <dt class="matter">
                    <dd>上海美莱</dd>
                    <dd>丨</dd>
                    <dd>杭州美莱</dd>
                    <dd>丨</dd>
                    <dd>宁波美莱</dd>
                    <dd>丨</dd>
                    <dd>苏州园区</dd>
                    <dd>丨</dd>
                    <dd>福州美莱</dd>
                    <dd>丨</dd>
                    <dd>泉州美莱</dd>
                    <dd>丨</dd>
                    <dd>苏州紫馨</dd>
                    <dd>丨</dd>
                    <dd>南京美莱</dd>
                    <dd>丨</dd>
                    <br>
                    <dd>苏州美莱</dd>
                    <dd>丨</dd>
                    <dd>厦门美莱</dd>
                    <dd>丨</dd>
                  </dt>
                </div>
                <div class="list_div">
                  <p>华南地区：</p>
                  <dt class="matter">
                    <dd>广州美莱</dd>
                    <dd>丨</dd>
                    <dd>深圳美莱</dd>
                    <dd>丨</dd>
                    <dd>广州紫馨</dd>
                    <dd>丨</dd>
                  </dt>
                </div>
                <div class="list_div">
                  <p>华中地区：</p>
                  <dt class="matter">
                    <dd>长沙美莱</dd>
                    <dd>丨</dd>
                    <dd>武汉美莱</dd>
                    <dd>丨</dd>
                    <dd>郑州美莱</dd>
                    <dd>丨</dd>
                    <dd>衡阳美莱</dd>
                    <dd>丨</dd>
                  </dt>
                </div>
                <div class="list_div">
                  <p>华北东北：</p>
                  <dt class="matter">
                      <dd>北京美莱</dd>
                      <dd>丨</dd>
                      <dd>天津美莱</dd>
                      <dd>丨</dd>
                      <dd>沈阳紫馨</dd>
                      <dd>丨</dd>
                      <dd>石家庄美莱</dd>
                      <dd>丨</dd>
                      <dd>西安美莱</dd>
                      <dd>丨</dd>
                  </dt>
                </div>
                <div class="list_div">
                  <p>西南地区：</p>
                  <dt class="matter">
                      <dd>成都美莱</dd>
                      <dd>丨</dd>
                      <dd>成都华美</dd>
                      <dd>丨</dd>
                      <dd>昆明美莱</dd>
                      <dd>丨</dd>
                      <dd>贵阳美莱</dd>
                      <dd>丨</dd>
                      <dd>贵阳华美</dd>
                      <dd>丨</dd>
                      <dd>重庆华美</dd>
                      <dd>丨</dd>
                      <dd>万州华美</dd>
                      <dd>丨</dd>
                      <dd>曲靖美莱</dd>
                      <dd>丨</dd>
                      <dd>重庆美莱</dd>
                      <dd>丨</dd>
                  </dt>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="">
              <span>NEWS</span>
              新闻资讯
            </a>
            <div class="s_nav s_nav_3">
              <div class="list">
                <ul class="list_ul3">
                  <li>美莱新闻</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="">
              <span>RESEARCH</span>
              学术研究
            </a>
            <div class="s_nav s_nav_4">
              <div class="list">
                <ul class="list_ul4">
                  <li>专利技术</li>
                  <li>学术活动</li>
                  <li>学术论著</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="">
              <span>STAR</span>
              明星活动
            </a>
            <div class="s_nav s_nav_5">
              <div class="list">
                <ul class="list_ul5">
                  <li>明星时尚</li>
                  <li>明星公益</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="">
              <span>CASES</span>
              焕美故事
            </a>
            <div class="s_nav s_nav_6">
              <div class="list">
                <ul class="list_ul6">
                  <li><a href="">CICI</a></li>
                  <li><a href="">张丽</a></li>
                  <li><a href="">刘婷</a></li>
                  <li><a href="">贺思思</a></li>
                  <li><a href="">瓦拉迪</a></li>
                  <li><a href="">张雪</a></li>
                  <li><a href="">刘亦歌</a></li>
                  <li><a href="">许言</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="">
              <span>SERVICE</span>
              客服中心
            </a>
            <div class="s_nav s_nav_7">
              <div class="list">
                <ul class="list_ul5">
                  <li>服务项目</li>
                  <li>联系客服</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="li_no">
            <em></em>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div id="cen">
    <div class="part1">
      <div class="part1_box">
        <div class="box_top">
          <div class="top_lef">
            <p class="p1">Brand chain</p>
            <p class="p2">美莱医疗美容医院集团·旗下连锁</p>
          </div>
          <div class="top_rig">
            <dl>
              <dd>
                <img src="../assets/c_img_1.png" alt="">
                <p>亚洲</p>
                <!--<br>-->
                <span>超大连锁</span>
              </dd>
              <dd>
                <img src="../assets/c_img_1.png" alt="">
                <p>专业</p>
                <span class="span2">国际化团队</span>
              </dd>
              <dd>
                <img src="../assets/c_img_1.png" alt="">
                <p>历史</p>
                <span class="span3">1999-2017</span>
              </dd>
            </dl>
          </div>
        </div>
        <div class="box_bot">
          <ul>
            <li><a href=""><em>上海美莱</em></a></li>
            <li><a href=""><em>北京美莱</em></a></li>
            <li><a href=""><em>广州美莱</em></a></li>
            <li><a href=""><em>深圳美莱</em></a></li>
            <li><a href=""><em>天津美莱</em></a></li>
            <li><a href=""><em>成都美莱</em></a></li>
            <li><a href=""><em>成都华美</em></a></li>
            <li><a href=""><em>重庆美莱</em></a></li>
            <li><a href=""><em>武汉美莱</em></a></li>
            <li><a href=""><em>南京美莱</em></a></li>
            <li><a href=""><em>长沙美莱</em></a></li>
            <li><a href=""><em>杭州美莱</em></a></li>
            <li><a href=""><em>厦门美莱</em></a></li>
            <li><a href=""><em>昆明美莱</em></a></li>
            <li><a href=""><em>苏州美莱</em></a></li>
            <li><a href=""><em>福州美莱</em></a></li>
            <li><a href=""><em>苏州紫馨</em></a></li>
            <li><a href=""><em>沈阳美莱</em></a></li>
            <li><a href=""><em>郑州美莱</em></a></li>
            <li><a href=""><em>石家庄美莱</em></a></li>
            <li><a href=""><em>安西美莱</em></a></li>
            <li><a href=""><em>贵阳美莱</em></a></li>
            <li><a href=""><em>贵阳华美</em></a></li>
            <li><a href=""><em>宁波美莱</em></a></li>
            <li><a href=""><em>衡阳美莱</em></a></li>
            <li><a href=""><em>曲靖美莱</em></a></li>
            <li><a href=""><em>广州紫馨</em></a></li>
            <li><a href=""><em>万州华美</em></a></li>
            <li><a href=""><em>泉州美莱</em></a></li>
            <li><a href=""><em>上海总部旗舰店</em></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part2">
      <ul>
        <li>
          <div class="part2_box1">
            <img src="../assets/part2_1.jpg" alt="">
          </div>
          <div class="part2_box2">
            <a href=""></a>
            <div class="box2_div">
              <h1>
                国际化专业医疗团队
              </h1>
              <div class="char">
                汇集多国博士级实力派专家
                <br>
                国内院长级/主任级骨干医师
              </div>
            </div>
          </div>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
  <div id="bot"></div>
</div>
</template>

<script>
  import { swiper,swiperSlide } from 'vue-awesome-swiper'
    export default {
      name: "center",
      components:{
        swiper,
        swiperSlide,
      },
      data () {
        return {
          swiperOption: {
            notNextTick:true,
            direction :'horizontal',
            autoplay:1500,
            effect:"fade",
            grabCursor :true,
            setWrapperSize :true,
            pagination: '.swiper-pagination',
            paginationClickable :true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            mousewheelControl : true,
            observeParents:true,
          }
        }
      },
      computed:{
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
    }
</script>

<style lang="scss" scoped>
#center{
  height: 4000px  ;
  background: gold;
  ul li{
    margin: 0;
    padding: 0;
  }
  #top{
    width:100%;
    height: 581px;
    background: aquamarine;
    position: relative;
    .lop{
       width:100%;
       height: 581px;
       overflow: hidden;
         .tabPlay{
           .slideBox{
             width:100%;
             height: 580px;
             display: block;
             float: left;
             img{
               width:101%;
               height: 580px;
             }
           }
         }
     }
    .lop_nav{
      width:100%;
      height: 104px;
      background: rgba(0,0,0,0.3);
      position: absolute;
      margin: 476px 0 0 0 ;
      top:0px;
      .wal{
        width:1200px;
        height: 100%;
        /*background: #a25;*/
        margin: 0 auto;
        ul{
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-around;
          /*background: brown;*/
          li{
            height: 104px;
            width: 11%;
            cursor: pointer;
            /*background: #761674;*/
            a{
              text-decoration: none;
              color:#fff;
              font-size: 16px;
              span{
                margin:20px 0 10px 0;
                font-size: 20px;
                display: block;
              }
            }
            em{
              width:50px;
              height: 75px;
              display: block;
              background: url("../assets/btn_1.png") no-repeat;
              margin: 35px 0 -30px 45px;
            }
            .s_nav{
              position: absolute;
              width:100%;
              height: 317px;
              background: #000;
              top: 104px;
              left: 0;
              display: none;
               .list{
                 background: url("../assets/s_nav_1.jpg") no-repeat;
                 background-position: 60% 0%;
                 background-size: cover;
                 border-right:2px solid #761674;
                 /*border-left:1px solid #761674;*/
                 height: 317px;
                 width:925px;
                 margin: 0 0 0 418px;
                 position: relative;
                  .list_ul{
                    width:131px;
                    height: 316px;
                    background: mediumaquamarine;
                    position: absolute;
                    left: -132px;
                    list-style: none;
                    display: flex;
                    flex-flow: column;
                     li{
                       width:100%;
                       background: #761674;
                       line-height: 52px;
                       border-bottom: #842e82 solid 1px;
                     }
                    li:hover{
                      background:#842e82 ;
                    }
                  }
               }
            }
            .s_nav_2{
              .list{
                background: url("../assets/s_nav_2.jpg") no-repeat;
                background-position: 46% 0%;
                width: 76%;
                margin: 0 0 0 185px;
                 p{
                   margin: 15px 0 0 5px;
                   color: #fff;
                   width: 100px;
                 }
                 .list_div{
                   width: 907px;
                   height: 62px;
                   /*background: #a27;*/
                   margin: 0 0 0 236px;
                   display: flex;
                     .matter{
                       display: flex;
                       width: 800px;
                       height: 60px;
                       /*background: #d5a;*/
                       word-wrap: break-word;
                        dd{
                          margin: 0;
                          color:#fff;
                          line-height: 55px;
                        }
                     }
                 }
              }
            }
            .s_nav_3{
               .list{
                 background: url("../assets/s_nav_3.jpg") no-repeat;
                 background-position: 40% 0%;
                 width: 85%;
                 margin: 0 0 0 0;
                  .list_ul3{
                    height: 317px;
                    background: #761674;
                    margin: 0 0 0 552px;
                    width: 133px;
                     li{
                       color:#fff;
                       width: 100%;
                       height: 50%;
                       /*background: #a52;*/
                       line-height: 158px;
                       margin: -152px 0 0 0;
                       border-bottom: 1px solid #842e82;
                     }
                    li:hover{
                      background:#842e82;
                    }
                  }
               }
            }
            .s_nav_4{
              .list{
                background: url("../assets/s_nav_4.jpg") no-repeat;
                background-position: 50% 0%;
                width: 85%;
                margin: 0 0 0 126px;
                border:none;
                 .list_ul4{
                   width: 132px;
                   height: 317px;
                   background: #761674;
                   margin: 0 0 0 560px;
                   display: flex;
                   flex-flow: column;
                    li{
                      color:#fff;
                      width:100%;
                      /*background: cornflowerblue;*/
                      border-bottom: 1px solid #842e82;
                      line-height: 110px;
                    }
                   li:hover{
                     background: #842e82;
                   }
                 }
              }
            }
            .s_nav_5{
               .list{
                 background: url("../assets/s_nav_5.jpg") no-repeat;
                 background-position: 34% 0%;
                 width: 85%;
                 margin: 0 0 0 -4px;
                 .list_ul5{
                   height: 317px;
                   background: #761674;
                   margin: 0 0 0 823px;
                   width: 133px;
                   display: flex;
                   flex-flow: column;
                   li{
                     color:#fff;
                     width: 100%;
                     height: 50%;
                     /*background: #a52;*/
                     line-height: 158px;
                     margin: 0px 0 0 0;
                     border-bottom: 1px solid #842e82;
                   }
                   li:hover{
                     background:#842e82;
                   }
                 }
               }
            }
            .s_nav_6{
              background: url("../assets/s_nav_6.jpg");
              width: 85%;
              margin: 0;
              background-position: 37% 0%;
              .list{
                width: 375px;
                height: 317px;
                background: #761674;
                margin: 0 0 0 953px;
                 .list_ul6{
                   width:100%;
                   height: 100%;
                   display: inline-block;
                   /*display: flex;*/
                   /*flex-flow: column;*/
                    li{
                      display: block;
                      border:1px solid #842e82;
                      box-sizing: border-box;
                      float: left;
                      background: #761674;
                      width: 33.3%;
                      height: 33.3%;
                       a{
                         display: block;
                         width: 100%;
                         height: 100%;
                         line-height: 105px;
                       }
                    }
                   li:hover{
                     background: #842e82;
                   }
                 }
              }
            }
            .s_nav_7{
              .list{
                background: url("../assets/s_nav_7.jpg") no-repeat;
                background-position: 36% 0%;
                width: 85%;
                margin: 0;
                border:none;
                .list_ul5{
                  height: 317px;
                  background: #761674;
                  margin: 0 0 0 1086px;
                  width: 132px;
                  display: flex;
                  flex-flow: column;
                  li{
                    color:#fff;
                    width: 100%;
                    height: 50%;
                    /*background: #a52;*/
                    line-height: 158px;
                    margin: 0px 0 0 0;
                    border-bottom: 1px solid #842e82;
                  }
                  li:hover{
                    background:#842e82;
                  }
                }
              }
            }
          }
           li:hover{
            background: #761674;
             .s_nav{
               display: block;
             }
          }
          .li_no:hover{
            background: none;
          }
        }
      }
    }
  }
  #cen{
    width:100%;
    height: 2590px;
    background: antiquewhite;
     .part1{
       width:100%;
       height: 590px;
       background: url("../assets/cen.jpg");
       background-position: 43% 0%;
        .part1_box{
          width:1320px;
          height: 590px;
          margin: 0 auto;
          /*background: cornflowerblue;*/
           .box_top{
             height: 212px;
             /*background: darkseagreen;*/
             display: flex;
             justify-content: space-between;
              .top_lef{
                width:40%;
                /*background: darkorange;*/
                 p{
                   margin: 0;
                   padding: 0;
                   font-weight: 500;
                   color:#fff;
                   /*line-height: 212px;*/
                 }
                 .p1{
                   font-size: 25px;
                   margin: 70px 0 0 -292px;
                 }
                 .p2{
                   font-size: 30px;
                 }
              }
              .top_rig{
                width:40%;
                /*background: darkviolet;*/
                 dl{
                   width:465px;
                   height:55px;
                   /*background: brown;*/
                   margin: 79px 63px;
                   display: flex;
                   justify-content: space-between;
                   /*float: left;*/
                    dd{
                      margin: 0;
                      display: flex;
                      color:#fff;
                      img{
                        width: 47px;
                        height: 47px;
                        margin: 6px 0 0 0;
                      }
                      p{
                        width:65px;
                        margin: 0;
                        padding: 0;
                        font-size: 25px;
                        font-weight: 500;
                      }
                      span{
                        margin: 33px 0px 0 -72px;
                        width: 100px;
                        font-size: 18px;
                      }
                      .span2{
                        margin-left: -62px;
                      }
                      .span2{
                        margin-left: -66px;
                      }
                    }
                 }
              }
           }
           .box_bot{
             width:1320px;
             height: 268px;
             /*background: gold;*/
              ul{
                list-style: none;
                margin: 0;
                padding: 0;
                width:100%;
                height: 100%;
                /*display: flex;*/
                 li{
                   border: 1px solid #fff;
                   box-sizing: border-box;
                   height: 33%;
                   float: left;
                   width:10%;
                    a{
                      text-decoration: none;
                      color:#fff;
                      em{
                        font-style: normal;
                        /*font-weight: 600;*/
                        font-size:18px;
                        line-height: 88px;
                      }
                    }
                 }
                li:hover{
                  background: darkviolet;
                }
              }
           }
        }
     }
     .part2{
       width:100%;
       height: 448px;
       background: mediumaquamarine;
        ul{
          list-style: none;
          width:100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 0;
           li{
             width:33.33%;
             height: 100% ;
             background: gold;
              div{
                width:100%;
                height: 50%;
                background: darkorange;
                 img{
                   width:100%;
                   height: 224px;
                 }
              }
             .part2_box1{
               height: 224px;
               /*background: url("../assets/part2_1.jpg") no-repeat;*/
             }
             .part2_box2{
               background: darkseagreen;
                a{
                  background: url("../assets/part2_1.jpg") no-repeat;
                  width:25px;
                  height: 25px;
                  display: block;
                }
               .box2_div{
                 .char{
                   font-size: 20px;
                 }
               }
             }
           }
        }
     }
  }
}
</style>
