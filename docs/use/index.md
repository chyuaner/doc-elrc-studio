---
head:
  - - meta
    - http-equiv: refresh
      content: 0;url=./step
---

# 正在跳轉中...

如果您沒有被自動重新導向，請點選 [這裡](./step)。

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  router.go('./step')
})
</script>
