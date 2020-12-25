<template>
  <div class="homePage">
    <h1>{{ $t("common.music") }}</h1>
    <el-select v-model="value" @change="langChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      options: [{
        value: 'en',
        label: 'English'
      }, {
        value: 'zh',
        label: '中文'
      }],
      value: 'zh'
    }
  },
  methods: {
    langChange(val) {
      this.$i18n.locale = val === 'zh' ? 'zh' : 'en'
    }
  }
}
</script>

<style>
</style>
