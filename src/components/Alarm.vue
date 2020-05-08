<template>
  <div class="q-pa-md">
    <q-btn
      push
      icon="alarm"
      color="primary"
      label="Alarm"
    >
      <q-popup-proxy>
        <q-banner>
          <template v-slot:avatar>
            <q-icon
              name="alarm"
              color="primary"
            />
          </template>
          New alarm
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>

</template>

<script>
export default {
  name: 'Alarm'
}
</script>

<style>
</style>
