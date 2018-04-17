<template>
    <div id="foot">
      <div id="topA">
        <img src="../assets/top_a.png" alt="">
      </div>
      <div id="foot_logo">
        <img src="../assets/img_3.png" alt="">
      </div>
      <div id="foot_nav">
        <div class="top nav">
          <div class="nav_box">
            <ul>
              <li>
                <h3>整形美容项目</h3>
              </li>
              <li>
                <h3>皮肤美容项目</h3>
              </li>
              <li>
                <h3>华东地区</h3>
              </li>
              <li>
                <h3>华中华东地区</h3>
              </li>
              <li>
                <h3>华南地区</h3>
              </li>
              <li>
                <h3>华北东北地区</h3>
              </li>
              <li>
                <h3>西南地区</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="bot nav">
          <div class="nav_box">
            <ul>
              <li>
                <h5>双眼皮</h5>
                <h5>祛眼袋</h5>
                <h5>隆鼻</h5>
                <h5>隆胸</h5>
                <h5>祛眼袋</h5>
                <h5>吸脂减肥</h5>
                <h5>瘦脸针</h5>
                <h5>玻尿酸</h5>
              </li>
              <li>
                <h5>激光脱毛</h5>
                <h5>祛斑祛痣</h5>
                <h5>祛胎记</h5>
                <h5>祛疤痕</h5>
                <h5>祛痘祛痘印</h5>
                <h5>美白嫩肤</h5>
                <h5>除皱抗衰老</h5>
                <h5>口腔美容</h5>
              </li>
              <li>
                <h5>上海美莱</h5>
                <h5>杭州美莱</h5>
                <h5>宁波美莱</h5>
                <h5>苏州美莱</h5>
                <h5>厦门美莱</h5>
                <h5>南京美莱</h5>
                <h5>苏州紫馨</h5>
                <h5>福州美莱华美</h5>
                <h5>泉州美莱华美</h5>
              </li>
              <li>
                <h5>长沙美莱</h5>
                <h5>衡阳美莱</h5>
                <h5>郑州美莱</h5>
                <h5>武汉美莱</h5>
                <h5>洛阳美莱</h5>
                <h5>济南美莱</h5>
                <h5>合肥美莱</h5>
                <h5>衡阳美莱</h5>
              </li>
              <li>
                <h5>广州美莱</h5>
                <h5>广州紫馨</h5>
                <h5>深圳美莱</h5>
                <h5>南宁美莱</h5>
                <h5>石狮美莱</h5>
                <h5>桂林美莱</h5>
                <h5>海口美莱</h5>
              </li>
              <li>
                <h5>北京美莱</h5>
                <h5>天津美莱</h5>
                <h5>石家庄美莱</h5>
                <h5>西安美莱</h5>
                <h5>沈阳美莱</h5>
                <h5>哈尔滨美莱</h5>
                <h5>长春美莱</h5>
              </li>
              <li>
                <h5>成都美莱</h5>
                <h5>成都华美紫馨</h5>
                <h5>重庆华美</h5>
                <h5>万州华美</h5>
                <h5>昆明美莱</h5>
                <h5>贵阳美莱</h5>
                <h5>贵阳华美美莱</h5>
                <h5>曲靖华美美莱</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="foot_div">
        <p>
          版权所有 © 美莱医疗美容连锁医院集团&nbsp;&nbsp;客服电话
          <span>400-898-0000</span>
          <span>粤ICP备14044911号-12</span>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style lang="scss" scoped>
#foot{
  width:100%;
  height: 826px;
  background: #d54;
   #topA{
     height: 137px;
     background: #333;
     display: flex;
     justify-content: center;
     align-items: center;
      img{
        width:60px;
        height: 67px;
        cursor: pointer;
      }
   }
   #foot_logo{
     height: 237px;
     background: #333;
     display: flex;
     justify-content: center;
     align-items: center;
     border-top: #3d3d3d solid 1px;
     img{
       width:218px;
       height: 141px;
       cursor: pointer;
     }
   }
   #foot_nav{
     height: 390px;
     background: #1e1e1e;
     .top{
       height: 110px;
       /*background: chocolate;*/
     }
     .bot{
       height: 280px;
       /*background: bisque;*/
       border-top: 1px solid #3d3d3d;
       .nav_box{
         ul{
           li{
             height: 280px;
             display: flex;
             flex-flow: column;
             margin: 0 26px 0 13px;
             /*justify-content: space-between;*/
           }
         }
       }
     }
     .nav{
       .nav_box{
         height: 100%;
         width:1200px;
         margin: 0 auto;
         /*background: darkslateblue;*/
         ul{
           width:100%;
           height: 100%;
           list-style: none;
           display: flex;
           align-items: center;
           justify-content: space-around;
           color:#fff;
           margin: 0;
           padding: 0;
            li{
              /*background: #e57;*/
              h3{
                font-size: 16px;
                font-weight: 2;
              }
              h5{
                font-size: 14px;
                font-weight: 2;
                color:#999;
                margin: 8px 0 3px 0;
                padding: 0;
              }
              h5:hover{
                color:#fff;
              }
            }
         }
       }
     }
   }
   #foot_div{
     width:100%;
     height: 65px;
     background: #000;
     color:#fff;
     p{
       margin: 0;
       height: 65px;
       line-height: 65px;
       font-size: 14px;
        span{
          color:#333;
          cursor: pointer;
        }
       span:hover{
         color:#4F94CD;
       }
     }
   }
}
</style>
