<script setup>

</script>

<template>
     <div class="home-container">
            <h1 class="greeting-text">Howdy, Welcome to My Page!</h1>
            <p>Check out my projects here ⬇️</p>
             <router-link to="/projects" class="button-link">
                VIEW PROJECTS
                <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="8,6 18,12 8,18" fill="currentColor"/>
                </svg>
            </router-link>
        </div>
</template>

<style scoped>
    .home-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 200px;
        height: 100vh;
    }
    
    h1 {
        font-size: 40px;
        text-align: center;
    }

    p {
        color: black;
        text-align: center;
        font-size: larger;
    }

    .highlight-box {
        border-radius: 24px;
        display: column;
    }

    .button-link {
        background: #fff;
        color: #000;
        border-radius: 32px;
        border:2px solid #000;
        cursor: pointer;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.3s ease;
        padding: 10px 20px;
        width: 200px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 0 0 #000;
        gap: 8px;
    }

    .button-link:hover {
        background: #000;
        color: #fff;
    }
</style>