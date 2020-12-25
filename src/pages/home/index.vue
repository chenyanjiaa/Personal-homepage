<template>
  <div class="homePage">
    <h1>{{ $t("common.music") }}</h1>
    <el-date-picker
      v-model="value1"
      type="date"
      :placeholder="$t('datepicker.selectDate')">
    </el-date-picker>
    <el-select v-model="value" @change="langChange" class="langBtn">
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
        value: 'zh',
        label: '中文'
      }, {
        value: 'en',
        label: 'English'
      }],
      value: 'zh',
      value1: ''
    }
  },
  methods: {
    langChange(val) {
      this.$i18n.locale = val === 'zh' ? 'zh' : 'en'
    }
  }
}
</script>

<style scoped>
  .homePage {
    background: snow;
  }
  .langBtn {
    width: 100px;
  }
</style>
