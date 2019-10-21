<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  var deviceWidth = document.documentElement.clientWidth;
  if(deviceWidth > 375) deviceWidth = 375;
  document.documentElement.style.fontSize = deviceWidth/3.75 + 'px';
  export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
