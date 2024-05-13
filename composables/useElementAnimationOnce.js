import { ref, nextTick } from 'vue'
export function useElementAnimationOnce() {
  const animationend = ref(false)
  const targetIsVisible = ref(false)
  const handler = () => {
    animationend.value = true
  }
  const onIntersectionObserver = ([{ isIntersecting, target }]) => {
    nextTick(() => {
      if (!animationend.value) {
        targetIsVisible.value = isIntersecting
      }
      target.removeEventListener('animationend', handler)
      target.addEventListener('animationend', handler)
    })
  }
  return {
    onIntersectionObserver,
    targetIsVisible
  }
}