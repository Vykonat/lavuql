<template lang="pug">
  .navigation
    navbar
      template( v-slot:middle )
        router-link.brand( :to="{ name: 'app.home' }" ) {{ appName }}
      template( v-if="$auth.check()", v-slot:right )
        lvql-button( :is-ghost="true", tag="router-link", :target="{ name: 'app.home' }", variant="primary" ) {{ $t('navigation.home') }}

    nav-drawer
      language-select
      nav-drawer-group( :title="$t('navigation.manage')" )
        nav-drawer-group-item( icon="fas fa-users" :to="{ name: 'admin.users' }" ) {{ $t('navigation.users') }}
        nav-drawer-group-item( icon="fas fa-book" :to="{ name: 'admin.blogPosts' }" ) {{ $t('navigation.blogPosts') }}
        nav-drawer-group-item( icon="fas fa-comments" :to="{ name: 'admin.comments' }" ) {{ $t('navigation.comments') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { APP_NAME } from '../../../../common/config/app.config';
import LanguageSelect from '../LanguageSelect/LanguageSelect.vue';

@Component({
  components: {
    LanguageSelect: LanguageSelect
  }
})
export default class AdminNavigation extends Vue {
  private get appName(): string {
    if (typeof APP_NAME !== 'undefined') {
      return APP_NAME;
    }

    return 'App name';
  }
}
</script>


<style lang="scss" scoped>
@import '~styles/app';

.brand {
  font-size: fontSize(h4);
  font-weight: fontWeight('headings');
  color: color('primary');
  margin-top: space(4);

  &:hover {
    color: color('primary', 'dark');
  }
}
</style>
