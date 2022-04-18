<template>
  <div class="container">
    <div class="error">
      <h4>404</h4>
      <a href="/">返回首页</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container a {
  font-size: 32px;
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}

.error h4 {
  font-size: 50px;
  margin-bottom: 10px;
}
</style>
