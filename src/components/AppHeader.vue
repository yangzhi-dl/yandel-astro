<script setup lang="ts">
import type { NavItem } from "../data/home";

const props = defineProps<{
  brand: string;
  navItems: NavItem[];
  currentPath: string;
}>();

const isActive = (href: string) => {
  if (href === "/") {
    return props.currentPath === "/";
  }

  return props.currentPath.startsWith(href);
};
</script>

<template>
  <nav
    class="mb-16 flex flex-col items-start gap-5 md:mb-20 md:flex-row md:items-center md:justify-between"
  >
    <a class="group inline-flex items-center gap-3 text-base font-semibold text-stone-100" href="/">
      <span
        class="h-2.5 w-2.5 rounded-sm bg-emerald-300 transition-transform group-hover:translate-x-0.5"
      ></span>
      {{ brand }}
    </a>

    <div class="flex flex-wrap gap-2 text-sm text-stone-300">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.06] hover:text-white"
        :class="isActive(item.href) ? 'bg-white/[0.08] text-white' : ''"
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>
