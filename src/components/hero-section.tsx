import Image from 'next/image';
import { getAboutContent } from '@/lib/about';

export default function HeroSection() {
  const { content } = getAboutContent();
  const introduction = content.split(/^## /m)[0].replace(/^# .*\n+/, '').trim();

  return (
    <section id="about" className="personal-intro" aria-labelledby="personal-heading">
      <div className="personal-intro-copy">
        <h1 id="personal-heading">Hi, I’m Matthew.</h1>
        <p>{introduction}</p>
        <p className="personal-intro-note">It’s not about perfection; it’s about progress, and about learning together.</p>
      </div>
      <Image src="/profile.JPG" alt="Matthew Galea" width={126} height={146} className="personal-portrait" priority />
    </section>
  );
}
