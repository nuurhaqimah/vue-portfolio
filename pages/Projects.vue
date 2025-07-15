<script setup>
const projects = [
  {
    title: "This Website",
    desc: "This project is made using Vue Router to create multiple pages in a single-page application.",
    class: "project-box box1 box-slide-left",
    delay: 0,
    showButton: false
  },
  {
    title: "Post App",
    desc: "A simple post app where users can create, view, edit, and delete posts.",
    class: "project-box box2 box-slide-top",
    delay: 0.6,
    showButton: true,
    url: "https://post-app-kohl-two.vercel.app/"
  },
  {
    title: "Todo List App",
    desc: "A simple app to keep track of tasks (coming soon!)",
    class: "project-box box3 box-slide-bottom",
    delay: 0.9,
    showButton: false
  },
  {
    title: "User directory App",
    desc: "A user directory app using an API to fetch data",
    class: "project-box box4 box-slide-right",
    delay: 0.3,
    showButton: true,
    url: "https://user-directory-app-blue.vercel.app/"
    
  }
];
//hover effect only enables after slide transition
function enableHover(event) {
  event.target.style.pointerEvents = "auto";
}
</script>

<template>
  <div class="project-container">
    <h1>My Projects</h1>
    <p>Here are some things I'm working on:</p>

    <!-- <div class="project-grid">
     <div class="box1">
        <h3>This Website</h3>
        <p>My first project using Vue Router to create multiple pages in a single-page application.</p>
     </div>
     <div class="box2">
         <h3>Post App</h3>
         <p>A simple post app where users can create, view, edit, and delete posts.</p>
      </div>
     <div class="box3">
          <h3>Todo List App</h3>
          <p>A simple app to keep track of tasks (coming soon!).</p>
     </div>
     <div class="box4">
          <h3>User directory App</h3>
          <p>A user directory app using an API to fetch data (coming soon!).</p>
      </div>
    </div> -->
      <div class="project-grid">
        
            <div
          v-for="(project, index) in projects"
          :key="index"
          :class="project.class"
          :style="{ animationDelay: `${project.delay}s`}" @animationend="enableHover($event)"
          >

          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <a v-if="project.showButton"
          class="view-button"
          :href="project.url"
          target="_blank"
          >VIEW</a>
          </div>
       
      </div>


  </div>

  
</template>

<style scoped>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.project-container {
  width: 100%;
  max-width: 100vw;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 0;

}
h1 {
 margin: 0px auto;
 font-size: 40px;
}

p {
    color: #222;
    font-size: 20px;
    text-align: center;
}

h1, p {
  text-align: center;
}

/* project description */
.project-box p {
  font-size: 16px;
  margin: 0;
  text-align: center;
}

/* project title */
.project-box h3 {
  margin: 0 8px 8px 0;
  text-align: center;
}

.box2 h3 {
  padding-top: 10px;
}

.box4 h3 {
  padding-top: 30px;
}

/* styling for each boxes */
.project-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 100%; 
  height: 140px;
  width: 100%;           
  padding: 16px;
  overflow: hidden;
  margin: 0;
  transition: transform 500ms ease, box-shadow 300ms ease;
   pointer-events: none; /*disable interaction initially */
  justify-self: center;
  align-self: center;
}

.project-grid {  
  display: grid;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 2fr 1.4fr; */
  grid-template-rows: repeat(2, minmax(140px, 180px));
  grid-auto-flow: row;
  gap: 0px 40px;
  grid-template-areas:
    "box1 box1 box2"
    "box3 box4 box4";
  perspective: 1000px;
  box-sizing: border-box;
}

a.view-button {
  align-self: flex-end;
  padding: 10px 20px;
  margin-right: 10px;
  margin-top: auto;
  background: #fff;
  color: #000;
  border: none;
  text-decoration: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  transition: background 0.3s ease;
}

a.view-button:hover {
  background: #ceccc9;
  
}

.project-box:hover {
  transform: translateX(0) scale(1.1);
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);

}



.box1 { grid-area: box1; }

.box2 { grid-area: box2; }

.box3 { grid-area: box3; }

.box4 { grid-area: box4; }

.box-slide-left {
  opacity: 0;
  transform: translateX(-100px);
  animation: slideInLeft 0.5s ease-out forwards;
}

.box-slide-right {
  opacity: 0;
  transform: translateX(100px);
  animation: slideInRight 0.5s ease-out forwards;
}

.box-slide-top {
  opacity: 0;
  transform: translateY(-100px);
  animation: slideInTop 0.5s ease-out forwards;
}

.box-slide-bottom {
  opacity: 0;
  transform: translateY(100px);
  animation: slideInBottom 0.5s ease-out forwards;
}

@keyframes slideInLeft {
  to { opacity: 1; transform: none; }
}
@keyframes slideInRight {
  to { opacity: 1; transform: none; }
}
@keyframes slideInTop {
  to { opacity: 1; transform: none; }
}
@keyframes slideInBottom {
  to { opacity: 1; transform: none; }
}

/* .box1, .box2, .box3, .box4 {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease-out forwards;
  border-radius: 20px;
}


@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */

</style>