<template>
   <div class="news">
      <img :src="news.image" alt="">
      <h3>{{news.title}}</h3>
   </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue'
  import { INews } from "@/components/GraySection/interfaces";

  export default Vue.extend({
      name: "SmallNews",
      props: { news: { type: Object as PropType<INews> } },
  });
</script>



<style lang="scss" scoped>
   .news {
      display: flex;
      align-items: center;

      margin-bottom: 32px;

      &:last-of-type {
         margin-bottom: 0;
      }

      img {
         width: 80px;
         height: 80px;
      }

      h3 {
         font-family: Georgia, serif;
         font-style: normal;
         font-weight: normal;
         font-size: 16px;
         line-height: 24px;
         margin-left: 16px;
         @media (min-width: 960px) and (max-width: 1366px) {
            margin-left: 12px;
         }
      }
   }
</style>
