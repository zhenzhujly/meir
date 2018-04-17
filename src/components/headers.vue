<template>
  <div id="head">
    <div id="head_top">
      <div class="left box">
        <div>
          客服电话：
          <a href="">400-898-0000</a>
        </div>
        <div>
          当前城市：
          <a href="">北京</a>
        </div>
      </div>
      <div class="right box">
        <div>
          官方微信
          <img src="../assets/img_1.png" alt="">
        </div>
        <div>
          官方微博
          <img src="../assets/img_2.png" alt="">
        </div>
      </div>
    </div>
    <div id="logo">
      <img src="../assets/logo.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
  #head{
    #head_top{
      width:100%;
      height: 40px;
      background: #000;
      color: #fff;
      display: flex;
      justify-content: space-between;
      .box{
        height: 100%;
        /*background: #a54 ;*/
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        a{
          text-decoration: none;
          color:#fff;
        }
        img{
          margin: 0 0 -7px 0;
        }
      }
      .left{
        width:22%;
      }
      .right{
        width:16%;
      }
    }
    #logo{
      height: 147px;
      width:100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #000;
      img{
        width: 184px;
        height: 107px;
      }
    }
  }
</style>
