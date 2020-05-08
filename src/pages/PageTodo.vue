<template>
  <q-page padding>
    <q-separator spaced />
    <div class="row justify-center">
      <div class="col-10">
        <q-list
          bordered
          separator
        >
          <task
            v-for="(task, key) in tasks"
            :key="key"
            :task="task"
            :id="key"
          ></task>
        </q-list>
      </div>
    </div>
    <q-separator spaced />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ tasks: 'tasks' })
  },
  components: {
    task: require('components/Tasks/Task.vue')
      .default
  }
}
</script>

<style>
</style>
