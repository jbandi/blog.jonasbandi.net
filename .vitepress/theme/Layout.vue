<template>
  <div class="antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="The Vue Point">
          <img
            class="inline-block mr-2"
            style="width: 36px; height: 31px"
            alt="logo"
            src="https://www.jonasbandi.net/favicon.png"
          />
          <span v-if="!isIndex" class="hidden md:inline">Brain Dump</span>
        </a>
        <div class="text-base text-gray-500 leading-5">
          <a class="hover:text-gray-700 mr-4" href="/feed.rss">RSS Feed</a>
          <a
            class="hover:text-gray-700"
            href="https://www.jonasbandi.net/"
            target="_blank"
            rel="noopener"
            >Hompage →</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="isIndex" />
      <Archive v-if="isArchive" />
      <Article v-if="!isIndex && !isArchive" />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Archive from './Archive.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/' || route.path.includes('overview'))
const isArchive = computed(() => route.path.includes('archive'))
console.log('Rendering Layout', route.path, isIndex.value, isArchive.value);
</script>
