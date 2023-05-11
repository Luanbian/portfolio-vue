<template>
    <Principal>
        <Titlee>
            {{ $t('message.projectTitle') }}
        </Titlee>
        <Bar/>
        <ProjectSection/>
    </Principal>
</template>

<script setup lang="ts">
import { Principal } from '../styles/habilities-styled'
import { Bar, Titlee } from '../styles/presentation-styled'
import ProjectSection from '../components/Project-section.vue'
</script>
