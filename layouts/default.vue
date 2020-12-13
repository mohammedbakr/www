<template>
  <v-app>
    <v-app-bar
      fixed
      color="white"
    >
      <v-container>
        <v-row justify="center" align="center">
          <nuxt-link to="/">
            <v-img
              src="/img/logo-75.png"
              alt="Egirna Technologies"
              width="250"
            ></v-img>
          </nuxt-link>
          <v-spacer />
          <v-col v-for="(item, i) in items" :key="i" class="hidden-sm-and-down px-1" style="flex-grow: 0;">
            <v-btn color="deep-orange" text dark :to="item.to">
              {{ item.title }}
            </v-btn>
          </v-col>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="my-10">
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="drawer"
      :right="true"
      temporary
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      absolute
      app
      color="#0b3655"
    >
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12" md="6">
            <img
              src="/img/logo-footer.png"
              alt="Footer logo"
              width="300"
            >
          </v-col>
          <v-col cols="12" md="6">
            <v-btn text dark>Terms and Conditions</v-btn>
            <v-btn text dark>Privacy Policy</v-btn>
            <v-btn text dark>Support</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          title: 'Welcome',
          to: '/'
        },
        {
          title: 'Products',
          to: '/#products'
        },
        {
          title: 'Services',
          to: '/#services'
        },
        {
          title: 'About',
          to: '/#about'
        },
        {
          title: 'Support',
          to: '/support'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ],
    }
  }
}
</script>
