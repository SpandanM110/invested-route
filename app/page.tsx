import { RainbowButton } from "@/components/magicui/rainbow-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import AnimatedBeamDemo from "@/components/animated-beam-demo";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search, TrendingUp, BarChart3, Zap } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-primary/5" />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float [animation-delay:2s]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <BoxReveal boxColor="hsl(var(--accent))" duration={0.5}>
            <h1 className="text-6xl md:text-8xl font-bold hero-text mb-4">
              Invest Route
            </h1>
          </BoxReveal>

          <BoxReveal boxColor="hsl(var(--accent))" duration={0.5} delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Designed during{" "}
              <span className="text-primary font-semibold"> Appwrite Hackathon</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor="hsl(var(--accent))" duration={0.5} delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              → <span className="font-semibold text-primary">Invest Route</span>{" "}
              helps you track, analyze, and optimize your investments in a simple
              and intuitive way.
            </p>
          </BoxReveal>

          <BoxReveal boxColor="hsl(var(--accent))" duration={0.5} delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/explore">
              <RainbowButton className="px-12 py-6 text-lg">
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
            <OrbitingCircles radius={300} duration={25}>
              <TrendingUp className="w-4 h-4 text-primary" />
            </OrbitingCircles>
            <OrbitingCircles radius={350} duration={30} delay={5} reverse>
              <BarChart3 className="w-4 h-4 text-primary" />
            </OrbitingCircles>
            <OrbitingCircles radius={400} duration={35} delay={10}>
              <File className="w-4 h-4 text-primary" />
            </OrbitingCircles>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Watch how Invest Route transforms your investment journey with
            intelligent insights and seamless tracking.
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

      {/* Animated Beams */}
      {/* <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-accent/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            Visualize Data Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
            Explore how connections and processes interact with smooth animated
            beams. See your investment data come alive with real-time insights
            and beautiful visualizations.
          </p>

          <AnimatedBeamDemo />
        </div>
      </section> */}

      {/* Features Section */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage, track, and grow your investments —
              all in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="glass-card p-8 text-center group rounded-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Analysis</h3>
              <p className="text-muted-foreground">
                AI-powered insights help you make informed investment decisions.
              </p>
            </div>

            <div className="glass-card p-8 text-center group rounded-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your portfolio performance with live updates and alerts.
              </p>
            </div>

            <div className="glass-card p-8 text-center group rounded-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Management</h3>
              <p className="text-muted-foreground">
                Simple, intuitive interface designed for investors of all
                levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-accent/5 to-transparent border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary">Invest Route</h3>
              <p className="mt-4 text-muted-foreground text-sm">
                Your intelligent roadmap for smarter investments. Plan, track,
                and grow your wealth — all in one place.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
                {/* Example social buttons */}
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" />
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" />
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" />
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Invest Route. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
