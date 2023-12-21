<template>
  <v-radio-group
    color="primary"
    v-bind:="$attrs"
    inline
    class="custome_radios align-center"
    @change="updateValue($event)"
    :label="label"
    :rules="[useInputRules().required]"
    hide-details
  >
    <v-radio
      v-for="radio in items"
      class="radio"
      :class="{ active: radio.value == modelValue }"
      :key="radio.value"
      :label="radio.name"
      :value="radio.value"
      hide-details
    ></v-radio>
  </v-radio-group>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  label: {
    required: true,
    type: String,
  },
  modelValue: {
    required: true,
    type: String,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>

<style lang="scss">
.custome_radios {
  .v-input__control {
    & > .v-label {
      color: var(--main_txt) !important;
      opacity: 1 !important;
      font-weight: bold !important;
    }
  }
  .v-selection-control {
    .v-selection-control__wrapper {
      display: none !important;
    }
    .v-label {
      color: var(--main_txt) !important;
      opacity: 1 !important;
      border: 1px solid var(--border) !important;
      margin: 0 !important;
      padding: 8px 12px;
      background: var(--main_bg) !important;
    }
    &.active {
      .v-label {
        border: 2px solid var(--main_txt) !important;
      }
    }

    &:first-child {
      .v-label {
        border-radius: 0 15px 15px 0 !important;
      }
    }
    &:last-child {
      .v-label {
        border-radius: 15px 0 0 15px !important;
      }
    }
  }
}

body.ltr {
  .custome_radios {
    .v-selection-control {
      &:first-child {
        .v-label {
          border-radius: 15px 0 0 15px !important;
        }
      }
      &:last-child {
        .v-label {
          border-radius: 0 15px 15px 0 !important;
        }
      }
    }
  }
}
</style>
