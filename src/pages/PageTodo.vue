<template>
  <q-page padding>

    <div class="row justify-center">

      <div class="col-10">
        <newTask></newTask>
        <q-separator spaced />
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
        <q-separator spaced />
      </div>

    </div>

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
      .default,
    newTask: require('components/Tasks/NewTask.vue')
      .default
  }
}
</script>

<style>
</style>
