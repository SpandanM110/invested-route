"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search, TrendingUp, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import GridBeamsBackground from "@/components/GridBeamsBackground";

const Index = () => {
  return (
    <GridBeamsBackground>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-primary/5" />

          {/* Floating orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float [animation-delay:2s]" />
          </div>

          {/* Hero Text */}
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <BoxReveal boxColor="hsl(var(--accent))" duration={0.5}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                Invest Route
              </h1>
            </BoxReveal>

            <BoxReveal boxColor="hsl(var(--accent))" duration={0.5} delay={0.2}>
              <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
                Designed during{" "}
                <span className="text-primary font-semibold">Appwrite Hackathon</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor="hsl(var(--accent))" duration={0.5} delay={0.4}>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                → <span className="font-semibold text-primary">Invest Route</span> helps you
                track, analyze, and optimize your investments in a simple and intuitive way.
              </p>
            </BoxReveal>

            {/* CTA */}
            <BoxReveal boxColor="hsl(var(--accent))" duration={0.5} delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link href="/explore">
                  <RainbowButton className="px-10 py-5 text-base sm:text-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Explore Now
                  </RainbowButton>
                </Link>
              </div>
            </BoxReveal>
          </div>

          {/* Orbiting elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              <OrbitingCircles radius={280} duration={25}>
                <TrendingUp className="w-4 h-4 text-primary" />
              </OrbitingCircles>
              <OrbitingCircles radius={330} duration={30} delay={5} reverse>
                <BarChart3 className="w-4 h-4 text-primary" />
              </OrbitingCircles>
              <OrbitingCircles radius={380} duration={35} delay={10}>
                <File className="w-4 h-4 text-primary" />
              </OrbitingCircles>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative py-24 px-6 z-10">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow">
              See It In Action
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
              Watch how Invest Route transforms your investment journey with intelligent insights
              and seamless tracking.
            </p>

            <HeroVideoDialog
              className="w-full max-w-4xl mx-auto aspect-video rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-300"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/1lCoQi1IcQ0"
              thumbnailSrc="https://preview.redd.it/what-is-the-most-random-image-s-you-have-in-the-photo-role-v0-c865xtndlj1c1.jpeg?width=1284&auto=webp&s=49c77127d0af6e694d0167a2aacf90bee5ae833c"
              thumbnailAlt="Invest Route Demo Video"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 relative z-10">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
        Powerful Features
      </h2>
      <p className="mt-4 text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
        Everything you need to manage, track, and grow your investments — all in one
        platform.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          icon: Search,
          title: "Smart Analysis",
          desc: "AI-powered insights help you make informed investment decisions.",
        },
        {
          icon: BarChart3,
          title: "Real-time Tracking",
          desc: "Monitor your portfolio performance with live updates and alerts.",
        },
        {
          icon: Settings,
          title: "Easy Management",
          desc: "Simple, intuitive interface designed for investors of all levels.",
        },
      ].map((feature, i) => (
        <div
          key={i}
          className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 
          shadow-xl hover:scale-105 transition-transform duration-300 text-center group"
        >
          <div
  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full 
  bg-gradient-to-br from-blue-500/70 to-cyan-400/70 
group-hover:from-blue-600 group-hover:to-cyan-500 
shadow-[0_0_20px_rgba(56,189,248,0.6)]
"
>
  <feature.icon className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
</div>

          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-100 text-sm md:text-base">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="relative bg-gradient-to-t from-accent/5 to-transparent border-t border-gray-200 dark:border-gray-800 z-10">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold text-primary">Invest Route</h3>
                <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                  Your intelligent roadmap for smarter investments. Plan, track, and grow your
                  wealth — all in one place.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {["Home", "Features", "Pricing", "Contact"].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-semibold text-white mb-4">Connect</h4>
                <div className="flex gap-4">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <a
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Invest Route. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </GridBeamsBackground>
  );
};

export default Index;
