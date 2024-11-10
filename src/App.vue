<template>
  <div class="bg-black/80 h-svh flex flex-col justify-between items-center movies-questionnaire">
    <div class="flex flex-col">
      <header class="flex justify-center pt-10 pb-8">
        <img src="/logo.webp" alt="Logo" width="150" height="112.5">
      </header>
      <main>
        <Questionnaire/>
      </main>
    </div>
    <footer>
      <ul class="flex gap-[30px] justify-center items-center pb-5 text-white/45">
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Terms of Use</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Questionnaire from './components/Questionnaire.vue'

export default {
  components: {
    Questionnaire,
  },
  setup() {},
}
</script>

<style>
.movies-questionnaire {
  background-image: url(/images/movies_bg.png);
  background-size: cover;
  background-position: center;
}
</style>
