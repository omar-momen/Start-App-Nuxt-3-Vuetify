<template>
  <v-menu location="start">
    <template v-slot:activator="{ props }">
      <span v-bind="props">
        <Icon size="30" color="#6D6D6D" name="mdi:attachment" />
      </span>
    </template>

    <ul class="uplode_options">
      <li>
        <input
          class="uplode_iamge uplode_Input"
          type="file"
          id="uplode_iamge"
          name="uplode_image"
          accept="image/*"
          @change="$emit('fileUploded', $event, 'image')"
        />
        <label for="uplode_iamge"
          ><Icon color="#fff" name="mdi:tooltip-image"
        /></label>
      </li>
      <li>
        <input
          class="uplode_video uplode_Input"
          type="file"
          id="uplode_video"
          name="uplode_video"
          accept="video/*"
          @change="$emit('fileUploded', $event, 'video')"
        />
        <label for="uplode_video">
          <Icon color="#fff" name="mdi:file-video" />
        </label>
      </li>
      <li>
        <input
          class="uplode_document uplode_Input"
          type="file"
          id="uplode_document"
          name="upload_file"
          accept=".pdf, .txt, .doc, .docx"
          @change="$emit('fileUploded', $event, 'document')"
        />
        <label for="uplode_document">
          <Icon color="#fff" name="mdi:file-document-edit" />
        </label>
      </li>
    </ul>
  </v-menu>
</template>

<style lang="scss">
a.file_preview {
  background-color: #3c3d43;
  min-height: auto;
  padding: 7px 10px;
  display: flex;
  border-radius: 10px;

  span.icon {
    background: #ff5588;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-inline-end: 10px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    font-size: 15px;

    span {
      &:first-child {
        font-weight: bold;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
