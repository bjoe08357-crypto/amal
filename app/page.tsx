import Image from "next/image";
import Link from "next/link";
import WhyAmal from "@/components/sections/WhyAmal";
import AmalMechanism from "@/components/sections/AmalMechanism";
import ReadyToCreateImpact from "@/components/sections/ReadyToCreateImpact";
import type { CSSProperties } from "react";

export default function Home() {
  type PartStyle = CSSProperties & { ['--d']?: string };
  const p1: PartStyle = { width: 8, height: 8, background: '#B9D28E', top: 18, left: '20%', ['--d']: '7s' };
  const p2: PartStyle = { width: 10, height: 10, background: '#6EA6B3', top: 42, left: '76%', ['--d']: '6s' };
  const p3: PartStyle = { width: 6, height: 6, background: '#B9D28E', top: 120, left: '10%', ['--d']: '8s' };
  return (
    <main>
      <section className="section aurora-bg">
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          {/* particles */}
          <div className="part" style={p1} />
          <div className="part" style={p2} />
          <div className="part" style={p3} />
          {/* logo removed per request */}
          <h1 className="h1 gradient-text">Transparent, Stable & Sustainable Giving.</h1>
          <p className="mt-4 text-[#0F172A]/70">
            AMAL is a next-generation donations platform that represents contributions as a stable value, pairs them with transparent reserves, and releases funds by milestones—so donors see what happens next and NGOs plan with confidence.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/token" className="btn-primary">Learn the Token</Link>
            <Link href="/app" className="btn-outline">See the App Features</Link>
          </div>
        </div>
      </section>
      <WhyAmal />
      <AmalMechanism />
      <ReadyToCreateImpact />
    </main>
  );
}
