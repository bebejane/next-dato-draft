'use client'

import { revalidateTag, revalidatePath } from './actions'
import s from './DraftMode.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect, useTransition } from 'react'

export type DraftModeProps = {
  enabled: boolean
  draftUrl?: string,
  tag?: string
  path?: string,
  disableDraftMode?: (pathname?: string) => Promise<void>
}

export default function DraftMode({ enabled, draftUrl, tag, path, disableDraftMode }: DraftModeProps) {

  const pathname = usePathname()
  const [loading, startTransition] = useTransition();


  useEffect(() => {

    if (!draftUrl || !enabled) return

    let updates = 0;
    const eventSource = new EventSource(draftUrl)

    eventSource.addEventListener("open", () => {
      console.log("connected to channel!");
    });

    eventSource.addEventListener("update", async (event) => {
      if (++updates <= 1) return

      startTransition(() => {
        if (tag)
          revalidateTag(tag)
        if (path)
          revalidatePath(path)
      })
    });
    return () => {
      eventSource.close()
    }

  }, [draftUrl, tag, path, enabled])

  if (!enabled) return null

  return (
    <div className={s.draftMode} >
      <div className={s.label}><img width="20" height="20" /><div>Draft Mode</div></div>
      <button onClick={() => startTransition(async () => disableDraftMode?.(pathname))}>
        Exit
        {loading && <div className={s.loading}><div className={s.loader}></div></div>}
      </button>
    </div>
  )
}