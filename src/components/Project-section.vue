<template>
  <Project v-for="project in projects" :key="project.id">
    <ProjectImage>
      <img :src="project.image" style="width: 100%" />
    </ProjectImage>
    <BoxDesc>
      <ProjectTitle>{{ $t(project.text) }}</ProjectTitle>
      <ProjectDesc>{{ $t(project.description) }}</ProjectDesc>
    </BoxDesc>
  </Project>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Project,
  BoxDesc,
  ProjectImage,
  ProjectTitle,
  ProjectDesc,
} from "../styles/project-styled";

export default defineComponent({
  name: "Projects-section",
  data() {
    return {
      projects: [
        {
          id: 1,
          image: "/images/bluecore.jpg",
          text: "message.projectOne.projectOneText",
          description: "message.projectOne.projectOneDesc",
        },
        {
          id: 2,
          image: "/images/portal.png",
          text: "message.projectTwo.projectTwoText",
          description: "message.projectTwo.projectTwoDesc",
        },
        {
          id: 3,
          image: "/images/abmax.jpg",
          text: "message.projectThree.projectThreeText",
          description: "message.projectThree.projectThreeDesc",
        },
        {
          id: 4,
          image: "/images/jbtec.png",
          text: "message.projectFour.projectFourText",
          description: "message.projectFour.projectFourDesc",
        },
        {
          id: 5,
          image: "/images/vtru.jpg",
          text: "message.projectFive.projectFiveText",
          description: "message.projectFive.projectFiveDesc",
        },
      ],
    };
  },
  components: { Project, BoxDesc, ProjectImage, ProjectTitle, ProjectDesc },
});
</script>
