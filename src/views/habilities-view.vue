<template>
    <Principal>
        <Title>
            Talentos
        </Title>
        <Bar/>
    </Principal>
    <CardSection/>
    <div style="display: flex; justify-content: center;">
        <ButtonAbout>
            Leia sobre mim
        </ButtonAbout>
    </div>
</template>

<script setup lang="ts">
import { Principal, ButtonAbout } from '../styles/habilities-styled'
import { Bar, Title } from '../styles/presentation-styled'
import CardSection from '../components/Card-section.vue'
</script>
