<template>
  <div class="">
    <p :class='claName'>测试绑定class</p>
    <hr>
    <p :class='{classA:isOk}'>绑定classA并判断，isOk为true时classA生效，false时不生效</p>
    <hr>
    <p :class='[claA,claB]'>绑定数组中的class</p>
    <hr>
    <p :class='isOk?claC:claD'>绑定class中使用三元表达式判断</p>
    <hr>
    <p :style='{color:red,fontSize:font}'>绑定样式</p>
    <hr>
    <p :style='styleObj'>用对象方式绑定style</p>
  </div>
</template>

<script>
var styleObj={
  color:'red',
  fontSize:'30px'
}
export default {
  data(){
    return{
      claName:'className',
      claA:'classA',
      claB:'classB',
      claC:'classC',
      claD:'classD',
      isOk:true,
      styleObj
    }
  }
}
</script>

<style lang="css">
  .className{
    color:red;
  }
  .classA{
    color:gray;
  }
  .classB{
    font-weight:900
  }
  .classC{
    color:blue
  }
  .classD{
    color:lightGreen
  }
</style>
