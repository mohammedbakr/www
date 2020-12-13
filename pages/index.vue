<template>
  <v-app class="app">

    <!-- Intro -->
    <v-parallax
      src="/img/main-banner.jpg" alt="Main banner" height="600">
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1>Innovative Information <u>Security</u> Solutions &amp; Services.</h1>
            <p class="title mt-4">
              Egirna Technologies Limited is an information security solutions and services provider based in Egypt with global reach. The company focus is providing innovative and budget conscious information security solutions and services. Our team members expertise ranging from young enthusiasts to +20 years of experience in the field.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <!-- Products -->
    <v-container id="products" class="mt-10 py-10">
      <v-row>
        <v-col class="6">
          <v-row>
            <v-col cols="3" md="2">
              <v-btn
                elevation="2"
                fab
                x-large
              >
                <v-icon color="orange darken-2">mdi-flag</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <h1 class="display-2 font-weight-bold" style="color: #0081c3">SquidVA</h1>
              <h3 class="headline font-weight-bold" style="color: #0081c3">Squid based Virtual Appliance</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p class="title" style="color: #6e7a85">A hassle free virtual appliance of Ubuntu with Squid Cache &amp; ClamAV preinstalled for your convenience!</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" class="hidden-sm-and-down">
          <v-img
            src="/img/proxyeg.png"
            alt="Proxy image"
            width="350"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col cols="6" class="hidden-sm-and-down">
          <v-img
            src="/img/squidcp.png"
            alt="Proxy image"
            width="500"
          ></v-img>
        </v-col>
        <v-col class="6">
          <v-row>
            <v-col cols="3" md="2">
              <v-btn
                elevation="2"
                fab
                x-large
              >
                <v-icon color="orange darken-2">mdi-signal</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <h1 class="display-2 font-weight-bold" style="color: #0081c3">SquidCP</h1>
              <h3 class="headline font-weight-bold" style="color: #0081c3">Squid Configuration Manager</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p class="title" style="color: #6e7a85">
                Manage your access control lists with an easy to use ACL Manager.<br>
                Configure your basics preferences using the configuration manager for network and cache parameters
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Services -->
    <v-row id="services" class="mt-10 py-10 mx-1" style="background-color: #F4F4F4">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="display-2 font-weight-bold" style="color: #0081c3;">Services We Provide</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="2" md="1">
                <v-icon x-large color="orange darken-2">mdi-signal</v-icon>
              </v-col>
              <v-col>
                <h2 class="headline font-weight-bold" style="color: #0081c3">Professional Services</h2>
                <p class="title" style="color: #6e7a85">We will help you plan, design, implement, operate, and manage your network protection solutions</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="2" md="1">
                <v-icon x-large color="orange darken-2">mdi-signal</v-icon>
              </v-col>
              <v-col>
                <h2 class="headline font-weight-bold" style="color: #0081c3">Outsourcing</h2>
                <p class="title" style="color: #6e7a85">Maintain the operational aspects of your network protection solutions by utilizing the services of our onsite or remote engineers</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-row>

    <!-- About -->
    <v-row id="about" class="mt-10 mx-1">
      <v-container>
        <v-row>
          <v-col cols="12" md="7" class="mt-10 pt-10">
            <h1 class="display-2 font-weight-bold" style="color: #0081c3;">About Egirna Technologies</h1>
            <p class="title mt-4" style="color: #6e7a85">
              Egirna Technologies Limited is an information security solutions and services provider based in Egypt with global reach. The company focus is providing innovative and budget conscious information security solutions and services. Our team members expertise ranging from young enthusiasts to +20 years of experience in the field.
            </p>
          </v-col>
          <v-col cols="5" class="hidden-sm-and-down pt-0">
            <v-img
              src="/img/home-about.jpg"
              alt="About image"
              width="400"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>

export default {}
</script>

<style scoped>
.app {
  /* font-family: Arial, Helvetica, sans-serif; */
  font-family: 'Roboto', 'Condensed', 'Montserrat', sans-serif;
}
</style>
