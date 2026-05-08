import { Separator } from '@/components/ui/separator';

export default function Disclaimer() {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Separator className="my-8" />
      <div className="text-center text-xs text-muted-foreground">
        <h4 className="font-bold mb-2">Disclaimer</h4>
        <p>
          The views, opinions, and content expressed on this website are solely
          those of the author and do not represent the views of any current or
          past employer, organization, or team. All articles are intended for
          general informational and educational purposes only and should not be
          interpreted as professional advice or as an offer of services.
        </p>
      </div>
    </div>
  );
}
