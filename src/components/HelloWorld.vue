<template>
  <div>
    <v-row>
      <v-col md="6">Hello</v-col>
      <v-col md="6">World!</v-col>
    </v-row>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


