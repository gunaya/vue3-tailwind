<template>

  <div class="bg-white dark:bg-gray-900 w-full h-full min-w-screen min-h-screen">
    <!-- navbar -->
    <nav class="mx-auto px-2">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full pt-2 content-center justify-end">
          <theme-toggler/>
        </div>
      </div>
    </nav>

    <!-- content -->
    <div class="flex flex-col">
      <img alt="Vue logo" src="./assets/logo.png" class=" w-40 mx-auto">
      <div class=" mx-auto font-mono">
        <p class="text-4xl font-bold text-gray-800 dark:text-white"> {{ theme == 'dark' ? 'Dark ': 'Light ' }} Mode</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import { computed } from 'vue';
import ThemeToggler from './components/ThemeToggler.vue';
import { useStore } from "vuex";

export default {
  name: 'App',
  components: { ThemeToggler },
  setup() {
    const store = useStore();

    return {
      theme: computed(() => store.state.ThemeModule.theme_color)
    }
  }
}
</script>

<style>
</style>
