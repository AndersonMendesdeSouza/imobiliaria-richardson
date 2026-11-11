import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import type { PropertyImage } from '../data/properties'

export function PhotoGallery({ images, title }: { images: PropertyImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const touchStart = useRef<number | null>(null)
  const image = images[activeIndex]

  function changePhoto(direction: number) {
    setActiveIndex((index) => (index + direction + images.length) % images.length)
  }

  useEffect(() => {
    if (!expanded) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.current?.showModal()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [expanded])

  const imageControls = <>
    {images.length > 1 && <><button className="gallery-arrow gallery-prev" aria-label="Foto anterior" onClick={() => changePhoto(-1)}><Icon name="chevron" className="rotate" /></button><button className="gallery-arrow gallery-next" aria-label="Próxima foto" onClick={() => changePhoto(1)}><Icon name="chevron" /></button></>}
    <span className="gallery-count" aria-live="polite"><Icon name="photos" />{activeIndex + 1} / {images.length}</span>
  </>

  return (
    <div className="photo-gallery" onKeyDown={(event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); changePhoto(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); changePhoto(1) }
    }}>
      <div className="gallery-stage" role="region" aria-label={`Galeria de ${title}`} tabIndex={0} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }} onTouchEnd={(event) => {
        if (touchStart.current === null) return
        const difference = touchStart.current - event.changedTouches[0].clientX
        if (Math.abs(difference) > 45) changePhoto(difference > 0 ? 1 : -1)
        touchStart.current = null
      }}>
        <img src={image.src} alt={image.alt} />
        {imageControls}
        <button className="gallery-expand" onClick={() => setExpanded(true)}><Icon name="area" /><span>Ampliar fotos</span></button>
      </div>
      {images.length > 1 && <div className="gallery-thumbnails" aria-label="Escolher foto">{images.map((photo, index) => <button key={`${photo.src}-${index}`} className={index === activeIndex ? 'is-active' : ''} aria-label={`Ver foto ${index + 1}: ${photo.alt}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)}><img src={photo.src} alt="" loading="lazy" /></button>)}</div>}
      {expanded && <dialog className="gallery-dialog" ref={dialog} aria-label={`Fotos de ${title}`} onClose={() => setExpanded(false)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close() }}>
        <button className="gallery-close" aria-label="Fechar galeria" onClick={() => dialog.current?.close()}><Icon name="close" /></button>
        <div className="expanded-photo"><img src={image.src} alt={image.alt} />{imageControls}</div>
        <p>{image.alt}</p>
      </dialog>}
    </div>
  )
}
