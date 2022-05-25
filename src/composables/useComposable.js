import { ref, computed } from 'vue'

const isSidebarOpen = ref(false)
function toggeleSidebar () {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleSidebar = computed(() => isSidebarOpen.value)
export default function useComposable () {
  return {
    toggeleSidebar,
    handleSidebar
  }
}
