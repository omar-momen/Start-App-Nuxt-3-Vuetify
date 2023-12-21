<template>
  <v-form class="contact_form custom_card pt-3 px-4" @submit.prevent="sendForm">
    <h4 class="h_4 mb-5">{{ $t("pages.support.form_title") }}</h4>

    <BaseInput
      up_mode
      v-model="contact.first_name"
      :label="$t('labels.first_name')"
    />
    <BaseInput
      up_mode
      v-model="contact.last_name"
      :label="$t('labels.last_name')"
    />
    <BaseInput
      v-model="contact.email"
      :label="$t('labels.email')"
      type="email"
      up_mode
    />
    <BaseInput
      v-model="contact.message"
      :label="$t('labels.message')"
      type="textarea"
      up_mode
    />

    <base-button
      class="with_icon w-100 animate filled block_center xl mt-0"
      :loading="loading"
      :disabled="loading"
      @click="submit"
      :label="$t('labels.send')"
      aria-label="SEND"
    >
      <Icon name="mdi:send" size="20" />
      {{ $t("form.send") }}
    </base-button>
  </v-form>
</template>

<script setup>
const contact = reactive({
  first_name: "",
  last_name: "",
  email: "",
  message: "",
});

const sendForm = () => {
  console.log(contact);
};
</script>

<style lang="scss" scoped>
.contact_form {
  width: 500px;
  position: absolute;
  top: 100px;
  right: 10vw; // RTL

  @media (max-width: 1280px) {
    position: static;
    margin: 50px auto;

    max-width: 95%;
  }
}
</style>
