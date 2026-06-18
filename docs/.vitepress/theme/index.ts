import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const router = useRouter()
    let activeSidebarObserver: IntersectionObserver | null = null

    if (typeof window !== 'undefined') {
      let isTransitioning = false
      const normalizePath = (path: string) => {
        return decodeURIComponent(path.split('#')[0].split('?')[0])
          .replace(/\/$/, '')
          .replace(/\.html$/, '')
      }
      router.onBeforeRouteChange = (to) => {
        if (isTransitioning) return true

        if (normalizePath(to) === normalizePath(window.location.pathname)) {
          return true
        }

        if ((document as any).startViewTransition) {
          isTransitioning = true
          const transition = (document as any).startViewTransition(async () => {
            try {
              await router.go(to)
            } finally {
              isTransitioning = false
            }
          })
          if (transition && transition.finished) {
            transition.finished.then(() => {
              updateActiveSidebar()
            })
          }
          return false
        }
      }
    }
    
    const updateActiveSidebar = () => {
      if (activeSidebarObserver) {
        activeSidebarObserver.disconnect()
        activeSidebarObserver = null
      }

      setTimeout(() => {
        const sidebarLinks = document.querySelectorAll('.VPSidebarItem .VPLink')
        const currentPath = decodeURIComponent(window.location.pathname)
          .replace(/\/$/, '')
          .replace(/\.html$/, '')

        // 收集當前頁面在側邊欄中的錨點連結
        const hashLinks: { el: HTMLElement, hash: string, target: HTMLElement | null }[] = []

        sidebarLinks.forEach((el) => {
          const href = (el as HTMLElement).getAttribute('href')
          if (!href || !href.includes('#')) return

          const [linkPath, hash] = href.split('#')
          const normalizedLinkPath = decodeURIComponent(linkPath).replace(/\/$/, '').replace(/\.html$/, '')

          if (normalizedLinkPath === currentPath || (normalizedLinkPath === '' && href.startsWith('#'))) {
            const target = document.getElementById(decodeURIComponent(hash))
            hashLinks.push({ el: el as HTMLElement, hash, target })
          } else {
            // 非當前頁面的錨點連結，確保移除 active
            const container = el.closest('.VPSidebarItem')
            container?.classList.remove('is-active')
            el.classList.remove('active')
          }
        })

        if (hashLinks.length === 0) return

        // 實作滾動監控
        const observerOptions = {
          root: null,
          rootMargin: '0px 0px -80% 0px', // 觸發點設在靠近頂部的位置
          threshold: 0
        }

        const observer = new IntersectionObserver((entries) => {
          // 找到目前正在視窗頂部的元素
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const activeHash = entry.target.id
              
              hashLinks.forEach(({ el, hash }) => {
                const container = el.closest('.VPSidebarItem')
                if (decodeURIComponent(hash) === activeHash) {
                  container?.classList.add('is-active')
                  el.classList.add('active')
                } else {
                  container?.classList.remove('is-active')
                  el.classList.remove('active')
                }
              })
            }
          })
        }, observerOptions)

        activeSidebarObserver = observer

        hashLinks.forEach(item => {
          if (item.target) observer.observe(item.target)
        })

        // 初始狀態檢查：如果沒有任何 section 在頂部，預設啟動第一個
        const isAnyActive = hashLinks.some(({ el }) => el.classList.contains('active'))
        if (!isAnyActive && hashLinks.length > 0) {
           const firstContainer = hashLinks[0].el.closest('.VPSidebarItem')
           firstContainer?.classList.add('is-active')
           hashLinks[0].el.classList.add('active')
        }
      }, 300)
    }

    onMounted(updateActiveSidebar)
    watch(() => route.path, updateActiveSidebar)
  }
} satisfies Theme
