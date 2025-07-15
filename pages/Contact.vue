<script setup>
    import { ref } from 'vue';
    const name = ref('');
    const message = ref('');
    const sent = ref(false);
    
    function sendMessage() {
          // In a real website, this would send the message to a server
          console.log('Message from:', name.value, '- Message:', message.value)
          sent.value = true
          name.value = ''
          message.value = ''

          // Hide the success message after 3 seconds
          setTimeout(() => {
            sent.value = false
          }, 3000)
        }
</script>

<template>
  <div class="contact-container">
    <!-- form section  -->
    <div class="form-section">
     <h2>Send me a message:</h2>
     <form @submit.prevent="sendMessage">
       <p>
         <label>Name:</label><br>
         <input type="text" v-model="name" />
       </p>
       <p>
         <label>Your Message:</label><br>
         <textarea v-model="message"></textarea>
       </p>
       <button type="submit">Send Message</button>
     </form>
     <div v-if="sent" class="highlight-box" style="margin-top: 20px;">
       <p class="thanks-message">✅ Thanks for your message! (This is just a demo, so it wasn't actually sent.)</p>
     </div>
    </div>
    
     <!-- Contact Section -->
    <div class="contact-content">
      <h1>Get in Touch 📧</h1>
      <p class="subtitle">Don't be a stranger! Here's how you can reach me:</p>
      <div class="link-boxes">
        <a class="link-box" href="mailto:nuur.haqimah@gmail.com" target="_blank">
          <div class="link-text">
            <span class="link-label">EMAIL</span>
            <div class="link-main">nuur.haqimah@gmail.com</div>
          </div>
          <svg class="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 13L13 7M13 7H7M13 7V13" stroke="#222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a class="link-box" href="https://github.com/nuurhaqimah" target="_blank">
          <div class="link-text">
            <span class="link-label">GITHUB</span>
            <div class="link-main">@nuurhaqimah</div>
          </div>
          <svg class="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 13L13 7M13 7H7M13 7V13" stroke="#222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
      

</template>

<style scoped>
 html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
a {
    
    text-decoration: none;
}

p, a {
    color: black;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.contact-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 90px;
  margin: 0;
  padding-top: 150px;
  box-sizing: border-box;
}
.form-section,
.contact-content {
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.link-boxes {
  display: flex;
  flex-direction: column;
  /* width: 400px;
  height: 100px; */
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
}

.subtitle {
  margin-top: 0;
  display: flex;
  justify-content: center;
}

.link-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fc8541;
  border-radius: 24px;
  padding: 10px 24px;
  min-width: 300px;
  text-decoration: none;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  color: #222;
}

.link-box:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  background: #f87529;
}

.link-label {
  font-size: 0.85em;
  color: #222;
  letter-spacing: 1px;
  font-weight: 500;
}

.link-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.link-main {
  font-size: 1.15em;
  font-weight: bold;
  margin-top: 2px;
  color: #222;
}

.link-main:hover {
    color: #fff;
}

.arrow-icon {
  margin-left: 16px;
  height: 28px;
  width: 28px;
  margin-top: 16px;

}

.link-box:hover .arrow-icon path:hover {
  stroke: #fff;
}


input[type="text"],
textarea  {
  border: 1px solid #000;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 4px 0 0 #000;
  outline: none;
  /* width: 400px; */
  width: 400px;
  max-width: 350px;
  padding: 6px 12px;
  margin-top: 5px;
  box-sizing: border-box;
}

textarea {
  height: 100px;
}

button[type="submit"] {
  background: #222;
  color: white;
  padding: 6px 12px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-top: 8px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background: #fc8541;
  color: #222;
}

input[type="text"],
textarea,
button[type="submit"] {
  box-sizing: border-box;
}

.thanks-message {
  display:block;
}

</style>