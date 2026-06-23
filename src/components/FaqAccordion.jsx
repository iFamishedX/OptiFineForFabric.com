import { useState, useRef, useId } from "react"
import { GlassCard } from "ifamished-ui"
import Icon from "./Icon"

/**
 * FaqAccordion — animated accordion item.
 * The entire GlassCard is the click target.
 * Props: { q: string, a: string | ReactNode, defaultOpen?: bool }
 */
export default function FaqAccordion({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const bodyId = useId()
  const bodyRef = useRef(null)

  return (
    <GlassCard
      className={`faq-accordion${open ? " faq-accordion--open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-controls={bodyId}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setOpen((v) => !v)
        }
      }}
    >
      <div className="faq-header">
        <span className="faq-question">{q}</span>
        <span className="faq-chevron" aria-hidden="true">
          <Icon name="chevronDown" size={18} strokeWidth={2} />
        </span>
      </div>

      <div
        id={bodyId}
        ref={bodyRef}
        className="faq-body"
        style={{
          maxHeight: open ? (bodyRef.current?.scrollHeight ?? 500) + "px" : "0px",
        }}
        aria-hidden={!open}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="faq-answer">{a}</p>
      </div>
    </GlassCard>
  )
}
