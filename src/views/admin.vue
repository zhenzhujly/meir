<template>
<div id="admin">
  <header>
    <headers></headers>
  </header>
  <section>
    <center></center>
  </section>
  <footer>
    <foot></foot>
    <!--<lop></lop>-->
  </footer>
</div>
</template>

<script>
  import headers from '../components/headers'
  import foot from '../components/foot'
  import center from '../components/center'
  // import lop from '../components/lop'
    export default {
        name: "admin",
      components:{
          headers,
          foot,
          center,
          // lop
      }
    }
</script>

<style lang="scss" scoped>

</style>
