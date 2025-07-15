<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

import { watchEffect } from 'vue';

watchEffect(() => {
  if (route.path === '/') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<template>
  <div class="nav-container">
      <!-- Navigation that stays the same on all pages -->
      <nav>
        
          <div class="nav-left"><router-link to="/" className="myName">NUURHAQIMAH METALI</router-link></div>

          <div class="nav-right router-links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>

        
      </nav>

      <!-- This is where different pages will appear -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<style>

    html, body {
      font-family: Arial, sans-serif;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
    }

    #app {
  min-height: 100%;
  cursor: url('/src/assets/cursor.png'), auto;

}

    .nav-container {
      /* max-width: 800px; */
      /* margin: 0 auto; */
      min-height: 100vh;
      width: 100%;
      box-sizing: border-box;
    }

    .content {
      padding: 0;
      min-height: 100vh;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    nav {
      /* background: #4caf50; */
      display: flex;
      justify-content: space-between;
      background: black;
      padding: 1rem;
      margin: 0;
      border: solid 8px white;
    }

    .nav-left a {
      text-decoration: none;
      color: #fff;
    }
    .nav-left a:hover {
      color:rgb(251, 112, 31);
      transition: 300ms ease-out;

    }

    .nav-right a {
      /* color: white; */
      text-decoration: none;
      /* margin-right: 20px; */
      padding: 10px 15px;
      background: linear-gradient(to right, rgb(251, 112, 31) 50%, #fff 50%);
      background-size: 200% 100%;
      background-position: 100% 0%;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }

    .nav-right a:hover {
      color: rgb(251, 112, 31);
      background-position: 0 0;
      transition: 700ms ease;
    }

    .myName {
 
      font-weight: bold;
      letter-spacing: .8px;
    }

    .content h1 {
      color: #333;
      /* border-bottom: 2px solid #4caf50; */
      padding-bottom: 10px;
    }

    .content p {
      line-height: 1.6;
      color: #666;
    }

    .highlight-box, .project-box {
      background: rgb(253, 131, 60);
      padding: 20px;
      border-radius: 24px;
      margin: 20px 0;
    }

</style>
