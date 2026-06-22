<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import type { NavItem } from "../data/home";

const props = defineProps<{
  brand: string;
  navItems: NavItem[];
  currentPath: string;
}>();

const isScrolled = ref(false);

const isActive = (href: string) => {
  if (href === "/") {
    return props.currentPath === "/";
  }

  return props.currentPath.startsWith(href);
};

const updateScrolled = () => {
  isScrolled.value = window.scrollY > 12;
};

onMounted(() => {
  updateScrolled();
  window.addEventListener("scroll", updateScrolled, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrolled);
});
</script>

<template>
  <nav
    class="sticky top-4 z-30 mb-16 flex flex-col items-start gap-5 rounded-lg border px-4 py-3 transition-all duration-300 md:mb-20 md:flex-row md:items-center md:justify-between md:px-5"
    :class="
      isScrolled
        ? 'border-white/[0.05] bg-slate-950/58 shadow-[0_18px_52px_rgba(0,0,0,0.22)] backdrop-blur-[20px]'
        : 'border-white/[0.04] bg-white/[0.025] backdrop-blur-xl'
    "
  >
    <a class="group inline-flex items-center gap-3 text-base font-semibold text-white" href="/">
      <span
        class="h-2.5 w-2.5 rounded-sm bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.42)] transition-transform group-hover:translate-x-0.5"
      ></span>
      {{ brand }}
    </a>

    <div class="flex flex-wrap gap-2 text-sm text-slate-300">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        class="rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.06] hover:text-white"
        :class="isActive(item.href) ? 'bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]' : ''"
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>
