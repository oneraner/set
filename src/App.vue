<template>
  <div id="app">
    <nav class="container">
      <ul class="row justify-content-around">
        <li class="mt-3 mb-3"><router-link to="/" class="darkbutton">首頁 Index</router-link></li>
        <li class="mt-3 mb-3"><router-link to="/chart" class="darkbutton">圖表 Chart</router-link></li>
        <li class="mt-3 mb-3"><router-link to="/drag" class="darkbutton">區塊拖曳 Drag & Drop</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all.scss";
@import "~bootstrap/scss/bootstrap";
</style>
