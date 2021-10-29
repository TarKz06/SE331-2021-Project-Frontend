<template>
  <div class="networkError">
    <h1>Some thing wrong!!</h1>
    <br>  
    <h3>
      Looks like you're experiencing some network issue or you don't have permission to use this page. 
    </h3>
    <h3>
      please take a breath and <a href="#" @click="router.go(-1)"> click here </a> to try again.
      </h3>
  </div>
</template>
