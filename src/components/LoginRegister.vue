<template>
  <p>{{ tab }}</p>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      outlined
      v-model="formData.name"
      label="name"
      type="name"
      class="q-mb-md"
    />
    <q-input
      outlined
      v-model="formData.email"
      label="email"
      type="email"
      class="q-mb-md"
    />
    <q-input
      outlined
      v-model="formData.password"
      label="password"
      type="password"
      class="q-mb-md"
    />
    <div class="row">
      <q-space />
      <q-btn color="primary" :label="tab" type="submit" />
    </div>
  </q-form>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  props: ["tab"],
  setup(props) {
    const store = useStore();
    const formData = ref({
      name: ref(""),
      email: ref(""),
      password: ref(""),
    });
    const submitForm = () => {
      if (props.tab == "login") {
        console.log("login the user");
        store.dispatch("login", formData.value);
      } else if (props.tab == "register") {
        store.dispatch("register", formData.value);
      }
    };

    return {
      formData,
      submitForm,
    };
  },
};
</script>

<style></style>
