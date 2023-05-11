<template>
  <div>
    <LocaleSwitcher/>
    <presentationView/>
    <habilitiesView/>
    <projectsView/>
    <referencesView/>
    <aboutView/>
    <contactView/>
    </div>
</template>

<script setup lang="ts">
import presentationView from './views/presentation-view.vue'
import habilitiesView from './views/habilities-view.vue'
import projectsView from './views/projects-view.vue'
import referencesView from './views/references-view.vue'
import aboutView from './views/about-view.vue'
import contactView from './views/contact-view.vue'
import LocaleSwitcher from './components/LocaleSwitcher.vue'
</script>
