<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul
        class="
          flex
          justify-center
          xl:block
          space-x-8
          sm:space-x-12
          xl:space-x-0 xl:space-y-8
        "
      >
        <li class="flex items-center space-x-2">
          <img
            :src="'https://gravatar.com/avatar/e6f60d485649907ed1efc82a3cfc1d28'"
            alt="author image"
            class="w-10 h-10 rounded-full"
          />
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd class="text-gray-900">Jonas Bandi</dd>
            <dt class="sr-only">Twitter</dt>
            <dd>
              <a
                :href="'https://twitter.com/@jbandi'"
                target="_blank"
                rel="noopnener noreferrer"
                class="link"
                >@jbandi</a
              >
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
