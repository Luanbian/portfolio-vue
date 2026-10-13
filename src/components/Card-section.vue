<template>
  <All>
    <Space>
      <Card v-for="hability in habilities" :key="hability.id">
        <BoxIcon
          v-bind:style="{
            backgroundColor: hability.dark
              ? 'var(--square-color)'
              : 'var(--light-color)',
          }"
        >
          <img :src="hability.icon" />
        </BoxIcon>
        <Subtitle>
          {{ $t(hability.title) }}
        </Subtitle>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 0 16px 16px">
          <span v-for="tech in hability.techs" :key="tech.name" :title="tech.name" :aria-label="tech.name" role="img" style="display: inline-flex">
            <component :is="tech.icon" style="height: 40px; width: auto; max-width: 96px" />
          </span>
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
import IconNextjs from "~icons/logos/nextjs-icon";
import IconJavascript from "~icons/logos/javascript";
import IconTypescript from "~icons/logos/typescript-icon";
import IconRedux from "~icons/logos/redux";
import IconYew from "~icons/thesvg-color/yew";
import IconWebassembly from "~icons/logos/webassembly";
import IconTailwind from "~icons/logos/tailwindcss-icon";
import IconVite from "~icons/logos/vitejs";
import IconNode from "~icons/logos/nodejs-icon";
import IconPython from "~icons/logos/python";
import IconFastapi from "~icons/logos/fastapi-icon";
import IconGo from "~icons/logos/go";
import IconRust from "~icons/logos/rust";
import IconGit from "~icons/logos/git-icon";
import IconMongo from "~icons/logos/mongodb-icon";
import IconGraphql from "~icons/logos/graphql";
import IconPostgresql from "~icons/logos/postgresql";
import IconDocker from "~icons/logos/docker-icon";
import IconVitest from "~icons/logos/vitest";
import IconPlaywright from "~icons/logos/playwright";
import IconGithubActions from "~icons/logos/github-actions";
import IconAws from "~icons/logos/aws";
import IconClaude from "~icons/logos/claude-icon";
import IconClaudeCode from "~icons/logos/claude-code";
import IconMcp from "~icons/simple-icons/modelcontextprotocol";
import IconAiSdk from "~icons/logos/vercel-ai-sdk";
import IconLangchain from "~icons/logos/langchain-icon";
import IconOpenai from "~icons/logos/openai-icon";
import IconHuggingface from "~icons/devicon/huggingface";
import IconOllama from "~icons/devicon/ollama";
import IconPinecone from "~icons/logos/pinecone-icon";

const habilities = [
  {
    id: 1,
    icon: "/images/monitor.svg",
    title: "message.habilities.frontend",
    techs: [
      { name: "React", icon: IconReact },
      { name: "Next.js", icon: IconNextjs },
      { name: "JavaScript", icon: IconJavascript },
      { name: "TypeScript", icon: IconTypescript },
      { name: "Redux", icon: IconRedux },
      { name: "Yew", icon: IconYew },
      { name: "WebAssembly", icon: IconWebassembly },
      { name: "Tailwind CSS", icon: IconTailwind },
      { name: "Vite", icon: IconVite },
    ],
  },
  {
    id: 2,
    dark: true,
    icon: "/images/database.svg",
    title: "message.habilities.backend",
    techs: [
      { name: "TypeScript", icon: IconTypescript },
      { name: "Node.js", icon: IconNode },
      { name: "Python", icon: IconPython },
      { name: "FastAPI", icon: IconFastapi },
      { name: "Go", icon: IconGo },
      { name: "Rust", icon: IconRust },
    ],
  },
  {
    id: 3,
    icon: "/images/code.svg",
    title: "message.habilities.extras",
    techs: [
      { name: "Git", icon: IconGit },
      { name: "MongoDB", icon: IconMongo },
      { name: "GraphQL", icon: IconGraphql },
      { name: "PostgreSQL", icon: IconPostgresql },
      { name: "Docker", icon: IconDocker },
      { name: "Vitest", icon: IconVitest },
      { name: "Playwright", icon: IconPlaywright },
      { name: "GitHub Actions", icon: IconGithubActions },
      { name: "AWS", icon: IconAws },
    ],
  },
  {
    id: 4,
    dark: true,
    icon: "/images/ai.svg",
    title: "message.habilities.ai",
    techs: [
      { name: "Claude", icon: IconClaude },
      { name: "Claude Code", icon: IconClaudeCode },
      { name: "MCP", icon: IconMcp },
      { name: "Vercel AI SDK", icon: IconAiSdk },
      { name: "LangChain", icon: IconLangchain },
      { name: "OpenAI", icon: IconOpenai },
      { name: "Hugging Face", icon: IconHuggingface },
      { name: "Ollama", icon: IconOllama },
      { name: "Pinecone", icon: IconPinecone },
    ],
  },
];
</script>
