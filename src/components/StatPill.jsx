/**
 * StatPill — compact stat chip for the hero section.
 * Props: { label: string, value: string }
 */
export default function StatPill({ value, label }) {
  return (
    <div className="stat-pill">
      <span className="stat-pill-value">{value}</span>
      <span className="stat-pill-label">{label}</span>
    </div>
  )
}
