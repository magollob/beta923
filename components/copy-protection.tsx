"use client"

import { useEffect } from "react"

export function CopyProtection() {
  useEffect(() => {
    // Desabilitar clique direito
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Desabilitar atalhos de teclado para cópia
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
        e.preventDefault()
        return false
      }
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j'))) {
        e.preventDefault()
        return false
      }
    }

    // Desabilitar arrastar imagens
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Desabilitar seleção de texto
    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('selectstart', handleSelectStart)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('selectstart', handleSelectStart)
    }
  }, [])

  return null
}
