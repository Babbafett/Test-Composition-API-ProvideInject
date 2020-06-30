<template>
  <div>
    <p>{{nickname}}</p>
  </div>
</template>

<!-- script componennnt kanban card //-->
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useAuth } from './services/auth.service';

/**
 * component of kanban board
 */
export default defineComponent({
  setup() {
    const authService = useAuth();
    const nickname = ref('');

    onMounted(async () => {
      nickname.value = await authService.getUserInfo();
    });
    return { nickname };
  },
});
</script>
<!-- //-->
<style lang="scss">
</style>
