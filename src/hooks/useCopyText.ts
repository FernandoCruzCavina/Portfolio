import copyToClipboard from 'copy-to-clipboard'
import { useCallback, useState } from 'react'

export function useCopyText(timeout: number = 2000) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copy = useCallback((value: string, id: string) => {
    const success = copyToClipboard(value)

    if (success) {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), timeout)
    }
  }, [timeout])

  return { copy, copiedId }
}