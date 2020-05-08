<template>
  <q-item
    @click="updateTask({id:id, updates: {completed: !task.completed}})"
    clickable
    :class="!task.completed ? 'bg-grey-4' : 'bg-green-3'"
  >
    <q-item-section
      side
      top
    >
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{task.name}} </q-item-label>
    </q-item-section>
    <q-item-section
      side
      top
    >
      {{task.date}}
      <q-item-label>
        <small>{{task.time}}</small>
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="toDelete(id)"
        outline
        round
        color="negative"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions(['updateTask', 'deleteTask']),
    toDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Delete Task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>

<style>
</style>
