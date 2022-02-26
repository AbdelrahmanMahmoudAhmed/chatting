<template>
  <div class="q-pa-md">
    <q-list separator>
      <q-item
        v-for="contact in contacts"
        :key="contact.id"
        class="q-my-sm full-width"
        to="/chat"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="contact.online ? 'green' : 'grey-5'">
            {{ contact.online ? "online" : "offline" }}
          </q-badge>
          <!-- <q-icon name="chat_bubble" color="green" /> -->
        </q-item-section>
      </q-item>
      <!--
    <q-separator />
    <q-item-label header>Offline</q-item-label> -->

      <q-item
        v-for="contact in offline"
        :key="contact.id"
        class="q-mb-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="grey" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
const contacts = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
    online: true,
  },
  {
    id: 2,
    name: "Mallorie Alessandrini",
    online: true,
  },
  {
    id: 3,
    name: "Elisabetta Wicklen",
    online: false,
  },
  {
    id: 4,
    name: "Seka Fawdrey",
    online: true,
  },
];

const offline = [];

export default {
  setup() {
    return {
      contacts,
      offline,
    };
  },
};
</script>
