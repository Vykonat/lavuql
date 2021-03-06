<template lang="pug">
lvql-layout( name="Default" )
  .CookieConsentView
    grid-row
      grid-item( fill )
        h1 Cookie Policy for {{ appStrings.APP_NAME }}
        | This is the Cookie Policy for {{ appStrings.APP_NAME }}, accessible from {{ appStrings.APP_URL }}
    grid-row
      grid-item
        panel
          panel-header( title="What Are Cookies" )
          panel-body
            | As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded 
            | to your computer, to improve your experience. This page describes what information they gather, how we use it and why we 
            | sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this 
            | may downgrade or 'break' certain elements of the sites functionality.
            | For more general information on cookies see the 
            a( href="https://en.wikipedia.org/wiki/HTTP_cookie" ) Wikipedia article on HTTP Cookies.

      grid-item
        panel
          panel-header( title="Disabling Cookies" )
          panel-body
            | You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). 
            | Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling 
            | cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is 
            | recommended that you do not disable cookies.

    grid-row
      grid-item
        panel
          panel-header( title="How we use cookies" )
          panel-body
            | We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options 
            | for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended 
            | that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service 
            | that you use.
      
      grid-item
        panel
          panel-header( title="The Cookies We Set" )
          panel-body
            strong Account related cookies
            br
            | If you create an account with us then we will use cookies for the management of the signup process and general 
            | administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards 
            | to remember your site preferences when logged out.
            br
            strong Login related cookies
            br
            | We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every 
            | single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can 
            | only access restricted features and areas when logged in.

    grid-row
      grid-item
        panel
          panel-header( title="Third Party Cookies" )
          panel-body
            | In some special cases we also use cookies provided by trusted third parties. The following section details which third 
            | party cookies you might encounter through this site.
            ul
              li
                | This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping 
                | us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as 
                | how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                | For more information on Google Analytics cookies, see the official 
                a( href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage") Google Analytics page.
              br
              li
                | We also use social media buttons and/or plugins on this site that allow you to connect with your social network in 
                | various ways. For these to work the following social media sites including Facecbook and Twitter, will set cookies through 
                | our site which may be used to enhance your profile on their site or contribute to the data they hold for various 
                | purposes outlined in their respective privacy policies.

      grid-item
        panel
          panel-header( title="More Information" )
          panel-body
            | Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure 
            | whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use 
            | on our site. 
            br
            | However if you are still looking for more information then you can contact us through one of our preferred contact methods:
            ul
              li 
                a( :href="mailToLink") Email: {{ appStrings.APP_EMAIL }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  APP_NAME,
  APP_URL,
  APP_EMAIL
} from '../../../../common/config/app.config';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo(
      'Cookie Consent',
      'Lavuql cookie consent page',
      'cookie-consent',
      ''
    )
  }
})
export default class CookieConsentView extends Vue {
  appStrings = {
    APP_NAME,
    APP_EMAIL,
    APP_URL
  };

  get mailToLink() {
    return `mailto: ${APP_EMAIL}`;
  }
}
</script>
