<template>
    <Principal>
        <Title>
            Projetos recentes
        </Title>
        <Bar/>
        <ProjectSection/>
    </Principal>
</template>

<script setup lang="ts">
import { Principal } from '../styles/habilities-styled'
import { Bar, Title } from '../styles/presentation-styled'
import ProjectSection from '../components/Project-section.vue'
</script>
