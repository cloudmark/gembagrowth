import BrandBadge from '@/components/brand-badge';

export default function GrowthAnimation() {
  return (
    <div className="growth-loader w-full h-full flex items-center justify-center text-primary" role="status">
      <BrandBadge />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
