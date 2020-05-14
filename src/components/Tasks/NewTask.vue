<template>
  <form @submit.prevent="addNewTask">
    <div class="
    row
    text-center">

      <div class="col">
        <q-input
          class="q-mr-sm"
          outlined
          v-model="taskToSubmit.name"
          label="New task"
          ref="name"
        />
      </div>
      <div class="col">
        <q-input
          class="q-mr-sm"
          outlined
          label="Due date"
          v-model="taskToSubmit.date"
        >
          <template v-slot:append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy>
                <q-date v-model="taskToSubmit.date" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col">
        <q-input
          class="q-mr-sm"
          outlined
          label="Due time"
          v-model="taskToSubmit.time"
        >
          <template v-slot:append>
            <q-icon
              name="access_time"
              class="cursor-pointer"
            >
              <q-popup-proxy
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="taskToSubmit.time" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col">
        <q-btn
          class="q-mt-sm"
          rounded
          color="primary"
          size="md"
          type="submit"
          label="Add task"
        />
      </div>

    </div>
  </form>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      taskToSubmit: {
        name: '',
        date: '',
        time: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions(['addTask']),
    addNewTask () {
      console.log('addNewTask')
      this.$refs.name.validate()
      console.log(this.$refs.name)
      if (this.taskToSubmit.name) {
        console.log('LoL', this.taskToSubmit.date)
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.taskToSubmit = {
        name: '',
        date: '',
        time: '',
        completed: false
      }
    }
  }
}
</script>

<style>
</style>
