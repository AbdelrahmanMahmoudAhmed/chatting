<template>
  <q-page class="flex column">
    <q-banner class="text-center bg-grey-4">
      user is offline.
      <template v-slot:action> </template>
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="(message, i) in messages"
        :key="i"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-form @submit="sendMessage">
            <q-input
              bg-color="white"
              v-model="newMessage"
              label="Message"
              dense
              outlined
              rounded
            >
              <template v-slot:after>
                <q-btn
                  @click="sendMessage"
                  round
                  dense
                  flat
                  icon="send"
                  color="white"
                  type="submit"
                />
              </template>
            </q-input>
          </q-form>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const newMessage = ref("");
    const messages = ref([
      {
        text: "hey , how are you ?",
        from: "me",
      },
      {
        text: "good thanks bodda , how are you ?",
        from: "them",
      },
      {
        text: "pretty good",
        from: "me",
      },
    ]);

    const sendMessage = () => {
      messages.value.push({
        text: newMessage.value,
        from: "me",
      });
    };

    return {
      newMessage,
      messages,
      sendMessage,
    };
  },
};
</script>

<style></style>
