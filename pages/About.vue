<script setup>

</script>

<template>
  <div class="about-container">
            <h1>About Me</h1>
            <!-- <p>I'm a student learning web development, and I'm excited about building modern websites!</p> -->
            <p class="about-desc">My name is Qimah, I'm a <strong>curious learner</strong> and enjoy learning new things! <br> Currently, I'm learning web development and enjoy building and designing websites.</p>
            
            <h2>What I'm Learning:</h2>
            <!-- <ul>
                <li>HTML & CSS for structure and styling</li>
                <li>JavaScript for making websites interactive</li>
                <li>Vue.js for building dynamic applications</li>
                <li>React for building web applications</li>
                <li>Vue Router for navigation (like this website!)</li>
            </ul> -->
            <div class="card-collection">
                <div class ="card">
                    <img src="/src/assets/html-css-js-logo.png" alt="html-css-js-logo" class="card-image">
                    <div class="card-content">
                        <p>HTML & CSS for structure and styling</p>
                        <p>JavaScript for making websites interactive</p>
                    </div>
                </div>

                <div class ="card">
                    <img src="/src/assets/react.png" alt="react-logo" class="card-image"
                    height="70" width="120">
                    <div class="card-content">
                        <p>React for building web applications</p>
                    </div>
                </div>
                <div class ="card">
                    <img src="/src/assets/vue.svg" alt="react-logo" class="card-image"
                    height="70" width="120">
                    <div class="card-content">
                        <p>Vue.js and Vue Router to create websites</p>
                    </div>
                </div>

            </div>
            
            <!-- <div class="highlight-box">
                <p><strong>Fun fact:</strong> This entire website is actually just one HTML file that shows different content using Vue Router!</p>
            </div> -->
        </div>
</template>

<style scoped>
.about-container {
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-top: 40px;
}
p {
    color: #222;
    font-family: Verdana, sans-serif;
    text-align:center;
    margin: 0;
}
p.about-desc {
    text-align: center;
    padding: 0;
}

.card {
    /* background-color: rgb(251, 112, 31); */
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  transition: transform 500ms;
}

/* .card-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
} */

.card-collection {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.card:hover {
    /* transform: scale(1.05) 500ms ease; */
    transform: scale(1.05);
}

.card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-top: 25px;
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

.card-content {
  /* padding: 24px; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1rem;
  font-family: 'Verdana', sans-serif;
  margin-bottom: 0;
}

/* li {
    list-style-type: none;
} */
h1 {
    margin-bottom: 0px;
    font-size: 40px;
    padding: 0 auto;
}

h2 {
    padding: 12px 0px;
}

.highlight-box {
    border-radius: 20px;
}
</style>