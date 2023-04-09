<template>
    <Project v-for="project in projects" :key="project.id">
        <ProjectImage>
            <img :src="project.image" style="width: 100%;"/>
        </ProjectImage>
        <BoxDesc>
            <ProjectTitle>{{ project.text }}</ProjectTitle>
            <ProjectDesc>{{ project.description }}</ProjectDesc>
        </BoxDesc>
    </Project>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Project, BoxDesc, ProjectImage, ProjectTitle, ProjectDesc } from '../styles/project-styled'

export default defineComponent({
  name: 'Projects-section',
  data () {
    return {
      projects: [
        {
          id: 1,
          image: '../../assets/images/bluecore.jpg',
          text: 'Desenvolvedor fullstack na Bluecore.it',
          description: 'Responsável pela criação de softwares modernos e robustos usando Javascript e metodologias ágeis'
        },
        {
          id: 2,
          image: '../../assets/images/portal.png',
          text: 'Desenvolvedor javascript no Portal do conhecimento',
          description: 'Responsável por criar atividades online com javascript como uma solução para as escolas durante a pandemia'
        }
      ]
    }
  },
  components: { Project, BoxDesc, ProjectImage, ProjectTitle, ProjectDesc }
})
</script>
