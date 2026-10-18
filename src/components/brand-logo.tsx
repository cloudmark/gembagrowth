import BrandBadge from '@/components/brand-badge';

/** Shared proportions for the mark and wordmark; the enclosing link owns navigation. */
export default function BrandLogo() {
  return (
    <span className="brand-logo">
      <BrandBadge />
      <span className="brand-logo-wordmark"><span className="brand-logo-gemba">Gemba</span><span className="brand-logo-growth">Growth</span></span>
    </span>
  );
}
