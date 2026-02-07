<template>
  <All>
    <Space>
      <Card v-for="hability in habilities" :key="hability.id">
        <BoxIcon
          v-bind:style="{
            backgroundColor: hability.middle
              ? 'var(--square-color)'
              : 'var(--light-color)',
          }"
        >
          <img :src="hability.icon" />
        </BoxIcon>
        <Subtitle>
          {{ hability.title }}
        </Subtitle>
        <div style="display: flex">
          <img :src="hability.desc.item1" />
          <img :src="hability.desc.item2" />
          <img :src="hability.desc.item3" />
          <img :src="hability.desc.item4" />
        </div>
        <div style="display: flex; gap: 10px">
          <img :src="hability.desc.item5" />
          <img :src="hability.desc.item6" />
          <img :src="hability.desc.item7" />
          <img :src="hability.desc.item8" />
          <img :src="hability.desc.item9" />
        </div>
      </Card>
    </Space>
  </All>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../styles/variables.css";
import { All, BoxIcon, Card, Space } from "../styles/habilities-styled";
import { Subtitle } from "../styles/presentation-styled";

export default defineComponent({
  name: "Card-section",
  data() {
    return {
      habilities: [
        {
          id: 1,
          icon: "/images/monitor.svg",
          title: "Frontend",
          desc: {
            item2: "/images/react-icon.svg",
            item3: "/images/javascript-icon.svg",
            item4: "/images/typescript-icon.svg",
            item5: "/images/redux-icon.svg",
            item6: "/images/nextjs-icon.svg",
          },
        },
        {
          id: 2,
          middle: true,
          icon: "/images/database.svg",
          title: "Backend",
          desc: {
            item1: "/images/ruby-icon.svg",
            item2: "images/rails-icon.svg",
            item6: "/images/typescript-icon.svg",
            item7: "/images/node-icon.svg",
            item8: "/images/java-icon.svg",
            item9: "/images/spring-icon.svg",
          },
        },
        {
          id: 3,
          icon: "/images/code.svg",
          title: "Extras  ",
          desc: {
            item1: "/images/jest-icon.svg",
            item2: "/images/git-icon.svg",
            item3: "/images/mongo-icon.svg",
            item4: "/images/graphql-icon.svg",
            item5: "/images/postgresql-icon.svg",
            item6: "/images/docker-icon.svg",
            item7: "/images/rspec-icon.svg",
          },
        },
      ],
    };
  },
  components: { All, BoxIcon, Card, Subtitle, Space },
});
</script>
