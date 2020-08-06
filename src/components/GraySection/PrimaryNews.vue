<template>
  <div class="primary-news">
      <picture>
         <source :key="index"
                 :media="pictureSource.media"
                 :srcset="pictureSource.srcset"
                 v-for="(pictureSource, index) in news.pictures">
         <img :alt="news.title" :src="news.image" :title="news.title">
      </picture>
      <h3>{{news.title}}</h3>
   </div>
</template>

<script lang="ts">
   import Vue, { PropType } from 'vue'
   import { IPrimaryNews } from "@/components/GraySection/interfaces";

   export default Vue.extend({
       name: "PrimaryNews",
       props: {
           news: {
               type: Object as PropType<IPrimaryNews>
           }
       }
   });

</script>

<style lang="scss" scoped>

.primary-news {
   picture {
      width: 100%;

      img {
         width: 100%;
      }
   }

   margin-bottom: 32px;

   h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-top: 4px;
   }
}
</style>
