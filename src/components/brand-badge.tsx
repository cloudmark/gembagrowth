import BrandMark from '@/components/brand-mark';

/** Shared badge artwork for the wordmark and page loader. */
export default function BrandBadge() {
  return (
    <span className="brand-logo-symbol" aria-hidden="true">
      <BrandMark className="brand-logo-mark" viewBox="8 2 87 96" />
    </span>
  );
}
