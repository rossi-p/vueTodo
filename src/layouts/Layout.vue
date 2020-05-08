<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          class="toggle-nav-mobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Todo List
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <div class="row justify-center">
        <Alarm></Alarm>
      </div>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="200"
      show-if-above
      bordered
      content-class="bg-grey-4"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
      </q-list>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import Alarm from 'components/Alarm'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    Alarm
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Todo',
          caption: '',
          icon: 'list',
          link: '/'
        },
        {
          title: 'Settings',
          caption: '',
          icon: 'settings',
          link: '/settings'
        }
      ]
    }
  }
}
</script>

<style>
@media screen and (min-width: 767px) {
  .toggle-nav-mobile {
    display: none;
  }
}
</style>
