<template>
  <v-file-input
    :multiple="props.multiple"
    :chips="props.multiple"
    :rules="allRules"
    :clearable="clearable"
    :label="label"
    @change="chooseImage"
    @click:clear="clearValue"
    show-size
    counter
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="fileName in fileNames" :key="fileName">
        <v-chip size="small" label color="green" class="me-2">
          {{ fileName }}
        </v-chip>
      </template>
    </template>
  </v-file-input>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    required: true,
  },
  multiple: {
    required: false,
    default: false,
    type: Boolean,
  },
  rules: {
    require: false,
    type: Array,
    default: () => [],
  },
  clearable: {
    required: false,
    default: true,
    type: Boolean,
  },
  data_src: {
    required: false,
    default: null,
  },
  label: {
    type: String,
    default: "Main File",
    required: false,
  },
  icon: {
    type: String,
    default: "mdi:paperclip",
    required: false,
  },
});

const file = ref({
  file_obj: null,
  file_src: "",
});

const filesToUplode = ref([]);
const _data_src = props.multiple
  ? ref(props.data_src || [])
  : ref(props.data_src);

const _files = computed(() => {
  if (props.multiple) {
    return [...filesToUplode.value, ..._data_src.value];
  } else {
    _data_src.value;
  }
});

const chooseImage = (e) => {
  if (props.multiple) {
    let files = Array.from(e.target.files);

    if (files.length > 5) {
      alert("The max limit is 5 files at a time");
      return;
    }

    files.forEach((file) => {
      if (file) {
        let src = URL.createObjectURL(file);
        filesToUplode.value.push({
          file_obj: file,
          src: src,
          name: file.name,
          uniqeID: Math.random().toString(16).slice(2),
        });
      }

      e.target.value = null;
    });

    emits("update:modelValue", _files.value);
  } else {
    file.value.file_obj = e.target.files[0];
    if (file.value.file_obj) {
      file.value.src = URL.createObjectURL(file.value.file_obj);
    }
    emits("update:modelValue", file.value);
  }

  e.target.value = null;
};

const clearValue = () => {
  emits("update:modelValue", null);

  if (props.multiple) {
    _data_src.value = [];
  } else {
    _data_src.value = null;
  }
  filesToUplode.value = [];
};

const allRules = computed(() => {
  if (!props.required) {
    return [];
  }
  let default_rules = [
    (val) => {
      if (!val) {
        return "This field is required";
      } else {
        return true;
      }
    },
  ];

  return [...props.rules, ...default_rules];
});
</script>

<style lang="scss" scoped></style>
