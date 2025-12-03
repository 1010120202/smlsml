<template>
    <el-dropdown trigger="click" @command="handleSetLanguage">
    <span class="el-dropdown-link">
        {{ $t('message.语言切换') }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh-CN">{{ $t('message.中文') }}</el-dropdown-item>
        <el-dropdown-item command="en-US">{{ $t('message.英文') }}</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
  name: 'LangSelect',
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>