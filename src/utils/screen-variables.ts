import Vue, { reactive } from 'vue'

function calculateSizes(screen: number): string {
  if (screen >= 1380) return 'lg'
  else if (screen >= 990) return 'md'
  else if (screen <= 580) return 'xs'
  else return ''
}

const screen = reactive({
  width: window.innerWidth,
  size: calculateSizes(window.innerWidth),
})

window.addEventListener('resize', () => {
  screen.width = window.innerWidth
  screen.size = calculateSizes(window.innerWidth)
})

export default screen
