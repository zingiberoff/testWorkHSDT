<template>
   <div>
      <h2 class="title">{{topic.title}}</h2>
      <PrimaryNews :news="topic.primaryNews"></PrimaryNews>
      <SmallNews :key="index"
                 :news="news"
                 v-for="(news,index) in topic.secondNews"></SmallNews>
   </div>
</template>

<script lang="ts">
  import { ITopic } from '@/components/GraySection/interfaces';
  import SmallNews from './SmallNews.vue'
  import PrimaryNews from './PrimaryNews.vue'
  import Vue, { PropType } from 'vue'

  export default Vue.extend({
      components: { PrimaryNews, SmallNews },
      name: "topic",
      props: { topic: { type: Object as PropType<ITopic> } },
  });
</script>

<style lang="scss" scoped>

h2.title {
   font-style: normal;
   font-weight: 900;
   font-size: 18px;
   line-height: 24px;
   letter-spacing: 0.098em;
   text-transform: uppercase;
   color: #F42F3A;
   text-align: left;
   margin-bottom: 8px;
}

</style>
