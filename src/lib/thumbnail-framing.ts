import type { CSSProperties } from 'react';

type Framing = { position: string; maxRatio?: number };

// Crop around the inspected artwork, limiting enlargement where labels span
// several rows. Unreviewed images keep their full contents visible.
const framing: Record<string, Framing> = {
  '/leadercharacteristics.png': { position: '50% 68%' },
  '/hypothesiserror.png': { position: '50% 50%', maxRatio: 4 },
  '/hypothesistesting.png': { position: '50% 65%', maxRatio: 2.35 },
  '/onepieceflowvsbatch.png': { position: '50% 45%', maxRatio: 1.85 },
  '/CoherentCasualTheory002.png': { position: '50% 76%', maxRatio: 2.1 },
  '/018normtheory2.png': { position: '50% 66%', maxRatio: 1.6 },
  '/019efficienteffective.png': { position: '50% 50%', maxRatio: 1.65 },
  '/003Standarddeviation.jpg': { position: '50% 40%', maxRatio: 1.6 },
  '/motivationcircle.jpg': { position: '50% 30%', maxRatio: 1.35 },
  '/014eoqmoq.png': { position: '50% 43%' },
  '/024trust.png': { position: '50% 0%', maxRatio: 2.5 },
  '/costof5s.png': { position: '50% 85%' },
  '/020misconception5s.png': { position: '50% 70%' },
  '/011excellenceempathy.png': { position: '50% 45%' },
  '/CoherentCasualTheory001.png': { position: '50% 70%', maxRatio: 2 },
  '/023runners.png': { position: '50% 55%' },
  '/022kitchenlessons.png': { position: '50% 5%', maxRatio: 2.5 },
  '/dramaticscene.png': { position: '50% 0%', maxRatio: 1.1 },
  '/reputationreality.png': { position: '50% 50%', maxRatio: 1.55 },
  '/021gembarestaurant.png': { position: '50% 45%' },
  '/wrongiswonderful.png': { position: '50% 8%', maxRatio: 2.4 },
  '/spectacles.jpg': { position: '50% 50%', maxRatio: 1.35 },
  '/016virtualgemba.png': { position: '50% 20%', maxRatio: 3.4 },
  '/012changevsstability.png': { position: '50% 55%' },
  '/015Gembwalk002.png': { position: '50% 50%' },
  '/kpiblanket.jpg': { position: '50% 80%', maxRatio: 2.9 },
  '/faultresp2.png': { position: '50% 0%', maxRatio: 2.2 },
  '/017normtheory1.png': { position: '50% 42%' },
  '/whereisgemba.jpg': { position: '50% 35%', maxRatio: 1.15 },
  '/010angermanagement.png': { position: '50% 42%' },
  '/013ohnoprinciple.png': { position: '50% 30%' },
  '/regressionmean.png': { position: '50% 10%', maxRatio: 2.4 },
};

export function getThumbnailStyle(src: string): CSSProperties {
  const crop = framing[src.split('?')[0]];
  if (!crop) return { objectFit: 'contain' };
  return {
    objectFit: 'cover',
    objectPosition: crop.position,
    maxWidth: crop.maxRatio ? `${144 * crop.maxRatio}px` : undefined,
  };
}
