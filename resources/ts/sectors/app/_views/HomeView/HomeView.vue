<template lang="pug">
  lvql-layout( name="Stack" )
    .HomeView
      .carouselWrapper
        carousel
          grid.content
            grid-row
              grid-item( fill )
                h1.title {{ APP_NAME }}
                h4.subTitle {{ $t('core.slogan') }}
                br
                lvql-button( variant="primary", tag="a", target="https://github.com/Vykonat/lavuql" ) {{ $t('core.cta') }}

      page-section(
        title="title",
        :link="{ name: 'auth.register' }"
        image="./assets/images/mobile.svg",
      )
        template( v-slot:text ) Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.
        template( v-slot:button ) Click for more
        
      page-section(
        title="title",
        :link="{ name: 'auth.login' }"
        image="./assets/images/ideas.svg",
        :flip="true",
        background="alternative",
      )
        template( v-slot:text ) Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
        template( v-slot:button ) Click for more
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { APP_NAME } from '../../../../common/config/app.config';
import { generateRandomPhoto } from '../../../../common/utils/generateRandomPhoto.util';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo(
      'A complete PWA boilerplate built on Laravel, Vue, and GraphQL',
      'Lavuql is the most complete open-source Progressive Web App boilerplate built on Laravel, Vue, and GraphQL. With features such as i18n, SEO meta tags, tests, and automatic zero-downtime deployments right out of the box you can skip the boilerplate hassles and focus on building your product.',
      '',
      '/assets/images/lavuql-logo.png'
    )
  }
})
export default class HomeView extends Vue {
  APP_NAME = APP_NAME;

  private get randomPhoto() {
    return generateRandomPhoto();
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.content {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  flex-flow: column;
}

.carouselWrapper {
  max-height: 80vh;
  min-height: 80vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.title,
.subTitle {
  text-shadow: 0 2px 1px color('shadow');
}

.title {
  color: color('primary');
}

.subTitle {
  color: color('text', 'inverse');
}
</style>
