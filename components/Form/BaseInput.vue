<template>
  <!-- =========== Text && Number && Email =========== -->
  <div
    v-bind:="$attrs"
    class="custom_input"
    v-if="
      type == 'text' || type == 'tel' || type == 'email' || type == 'number'
    "
  >
    <label v-if="label && up_mode">{{ label }}</label>
    <v-text-field
      :aria-label="`input ${type}`"
      :name="`input ${type + Math.random()}`"
      v-bind:="$attrs"
      :type="type"
      :class="[type]"
      :rules="allRules"
      :label="up_mode ? '' : label"
      variant="solo"
      :required="required"
      @click:clear="clearValue"
      @input="updateValue"
    >
      <template v-slot:append-inner>
        <Icon v-if="required" size="10" color="#db0000" name="mdi:asterisk" />

        <slot name="appendInner"></slot>
      </template>
    </v-text-field>
  </div>

  <!-- =========== Textarea =========== -->
  <div v-bind:="$attrs" class="custom_input" v-else-if="type == 'textarea'">
    <label v-if="label && up_mode">{{ label }}</label>

    <v-textarea
      v-bind:="$attrs"
      class="custom_input"
      :class="[type]"
      :rules="allRules"
      :label="up_mode ? '' : label"
      variant="solo"
      @input="updateValue"
      @click:clear="clearValue"
      :required="required"
      :aria-label="`input ${type}`"
      :name="`input ${type}`"
    >
      <template v-slot:append-inner>
        <Icon v-if="required" size="10" color="#db0000" name="mdi:asterisk" />

        <slot name="appendInner"></slot>
      </template>
    </v-textarea>
  </div>

  <!-- =========== Password =========== -->
  <div v-bind:="$attrs" class="custom_input" v-else-if="type == 'password'">
    <v-text-field
      v-bind:="$attrs"
      class="custom_input"
      :class="[type]"
      :rules="allRules"
      @input="updateValue"
      :label="up_mode ? '' : label"
      variant="solo"
      :required="required"
      :type="showPass ? 'text' : 'password'"
      :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="showPass = !showPass"
      @click:clear="clearValue"
      :aria-label="`input ${type}`"
      :name="`input ${type}`"
    >
      <slot />
      <template v-slot:append-inner>
        <Icon v-if="required" size="10" color="#db0000" name="mdi:asterisk" />

        <div class="ms-2">
          <slot name="appendInner"></slot>
        </div>
      </template>
    </v-text-field>
  </div>

  <div class="unsuported input type" v-else></div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    required: true,
  },
  rules: {
    required: false,
    type: Array,
    default: () => [],
  },
  type: {
    default: "text",
    type: String,
  },
  required: {
    required: false,
    default: false,
    type: Boolean,
  },
  label: {
    required: false,
    default: "",
    type: String,
  },
  up_mode: {
    required: false,
    default: false,
    type: Boolean,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};

let default_rules = [
  props.required ? useInputRules().required : () => true,
  props.type == "email" ? useInputRules().email : () => true,
];

const allRules = computed(() => {
  return [...default_rules, ...props.rules];
});

const showPass = ref(false);

const clearValue = () => {
  emits("update:modelValue", null);
};
</script>

<style lang="scss">
.custom_input {
  margin-bottom: 10px;
  label {
    color: var(--main_txt);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    display: block;
  }

  .v-input {
    .v-input__control {
      .v-field {
        border: 1px solid var(--border);
        box-shadow: 0px 10px 40px var(--shadow);
        // background: var(--input_bg);
        // border-radius: 15px;

        .v-field__overlay {
        }

        .v-field__loader {
        }
        .v-field__field {
          label {
          }

          input {
            // &::placeholder {
            //   opacity: 1;
            //   color: var(--placholder);
            // }
          }
        }

        .v-field__clearable {
        }

        .v-field__outline {
          .v-field__outline__start {
          }
          .v-field__outline__end {
          }
        }
      }
    }

    .v-input__details {
      .v-messages {
        & > div:first-child {
          // margin-bottom: 15px;
        }
      }
    }

    &.dark {
      .v-input__control {
        .v-field {
          // border: 1px solid #39383882;
          // background: #333;
          // color: #fff;
        }
      }
    }
  }
}
</style>
