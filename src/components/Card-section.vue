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
        <div v-for="(row, rowIndex) in hability.rows" :key="rowIndex" style="display: flex; gap: 10px; margin-bottom: 10px">
          <component :is="tech" v-for="(tech, index) in row" :key="index" style="width: 40px; height: 40px" />
        </div>
      </Card>
    </Space>
  </All>
</template>

<script setup lang="ts">
import "../styles/variables.css";
import { All, BoxIcon, Card, Space } from "../styles/habilities-styled";
import { Subtitle } from "../styles/presentation-styled";
import IconReact from "~icons/logos/react";
import IconJavascript from "~icons/logos/javascript";
import IconTypescript from "~icons/logos/typescript-icon";
import IconRedux from "~icons/logos/redux";
import IconNextjs from "~icons/logos/nextjs-icon";
import IconRuby from "~icons/logos/ruby";
import IconRails from "~icons/logos/rails";
import IconNode from "~icons/logos/nodejs-icon";
import IconJava from "~icons/logos/java";
import IconSpring from "~icons/logos/spring-icon";
import IconJest from "~icons/logos/jest";
import IconGit from "~icons/logos/git-icon";
import IconMongo from "~icons/logos/mongodb-icon";
import IconGraphql from "~icons/logos/graphql";
import IconPostgresql from "~icons/logos/postgresql";
import IconDocker from "~icons/logos/docker-icon";
import IconRspec from "~icons/devicon/rspec";

const habilities = [
  {
    id: 1,
    icon: "/images/monitor.svg",
    title: "Frontend",
    rows: [
      [IconReact, IconJavascript, IconTypescript],
      [IconRedux, IconNextjs],
    ],
  },
  {
    id: 2,
    middle: true,
    icon: "/images/database.svg",
    title: "Backend",
    rows: [
      [IconRuby, IconRails],
      [IconTypescript, IconNode, IconJava, IconSpring],
    ],
  },
  {
    id: 3,
    icon: "/images/code.svg",
    title: "Extras",
    rows: [
      [IconJest, IconGit, IconMongo, IconGraphql],
      [IconPostgresql, IconDocker, IconRspec],
    ],
  },
];
</script>
