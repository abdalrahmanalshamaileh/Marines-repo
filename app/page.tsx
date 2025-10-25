import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Anchor,
  Bot,
  Shield,
  Waves,
  Phone,
  Mail,
  MapPin,
  Eye,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CLIENTS_LIST = [
  {
    name: "Jordan Bromine Company",
    image: "jordan-bromine-logo.jpeg",
  },
  {
    name: "Jordan Frogman Company",
    image: "frogman-logo.jpeg",
  },

  {
    name: "Client Logo 1",
    image: "",
  },
  {
    name: "Client Logo 2",
    image: "",
  },
  {
    name: "Client Logo 3",
    image: "",
  },
];

const PROJECTS_LIST = [
  {
    image: "underwater-hull-inspection-with-rov-cameras.jpg",
    name: "Hull Inspection Project",
    description: " Detailed structural assessment",
    category: "Inspections",
  },
  {
    image: "marine-survey-equipment-and-divers-preparing-for-u.jpg",
    name: "Marine Survey Mission",
    description: "Comprehensive underwater assessment",
    category: "Marine Surveys",
  },

  {
    image: "ai-biofouling-detection-system-analyzing-underwater.jpg",
    name: "AI Detection System",
    description: "Real-time biofouling analysis",
    category: "Marine Surveys",
  },

  {
    image: "professional-diving-team-with-safety-equipment-pre.jpg",
    name: "Professional Diving Team",
    description: "Safety-first underwater operations",
    category: "Team & Equipment",
  },
  {
    image: "rov-underwater-action.jpeg",
    name: "ROV Underwater Operations",
    description: "Advanced ROV conducting real-time inspections",
    category: "ROV Operations",
  },
  {
    image: "team-boat-rov-equipment.jpeg",
    name: "Professional Marine Operations",
    description: "Certified team deploying ROV equipment",
    category: "Team & Equipment",
  },
];

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <nav className="top-0 z-50 sticky bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-border border-b">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Anchor className="w-8 h-8 text-primary" />
              <span className="font-bold text-foreground text-xl">Marines</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-muted hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#clients"
                className="text-muted hover:text-foreground transition-colors"
              >
                Clients
              </Link>
              <Link
                href="#contact"
                className="text-muted hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-card py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  First in Jordan • AI-Powered ROV Services
                </Badge>
                <h1 className="font-bold text-4xl lg:text-6xl text-balance leading-tight">
                  Your Trusted Partner{" "}
                  <span className="text-accent">Beneath the Surface</span>
                </h1>
                <p className="max-w-2xl text-muted text-xl leading-relaxed">
                  Revolutionizing underwater inspection services using advanced
                  ROV technology enhanced with AI detection. Compliant with DNV
                  and Lloyd&apos;s Register international standards.
                </p>
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <Button size="lg" asChild>
                  <Link href="#services">Explore Our Services</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-muted text-sm">DNV Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-muted text-sm">
                    Lloyd&apos;s Register
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-center items-center bg-gradient-to-br from-accent/20 to-primary/20 p-8 rounded-2xl aspect-square">
                <div className="relative size-11/12">
                  <Image
                    src="./images/rov-robot.jpg"
                    alt="ROV underwater inspection operations"
                    className="shadow-2xl rounded-lg"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-background py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="font-bold text-3xl lg:text-4xl text-balance">
              Comprehensive Underwater Services
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-xl leading-relaxed">
              We provide cutting-edge underwater inspection and maintenance
              solutions tailored for marine industries across Jordan and the
              Middle East.
            </p>
          </div>

          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg border-border transition-shadow">
              <CardHeader>
                <div className="flex justify-center items-center bg-accent/10 mb-4 rounded-lg w-12 h-12">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Hull Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Comprehensive inspection of submerged ship parts, pipelines,
                  and offshore platforms using high-resolution ROV cameras and
                  specialized tools.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg border-border transition-shadow">
              <CardHeader>
                <div className="flex justify-center items-center bg-accent/10 mb-4 rounded-lg w-12 h-12">
                  <Waves className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Underwater Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Versatile underwater tasks including structural monitoring,
                  search and recovery operations, and comprehensive marine
                  surveys.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg border-border transition-shadow">
              <CardHeader>
                <div className="flex justify-center items-center bg-accent/10 mb-4 rounded-lg w-12 h-12">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Professional Diving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Certified diving teams with extensive experience in marine
                  environments, operating under strict international safety
                  standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg border-border transition-shadow">
              <CardHeader>
                <div className="flex justify-center items-center bg-accent/10 mb-4 rounded-lg w-12 h-12">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">
                  AI Biofouling Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Advanced AI model for real-time biofouling detection and
                  analysis, identifying density and thickness instantly during
                  ROV operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="bg-card py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="font-bold text-3xl lg:text-4xl text-balance">
              Our Work in Action
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-xl leading-relaxed">
              See our ROV technology and professional teams in action across
              various marine projects in Jordan&apos;s waters.
            </p>
          </div>

          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mb-12">
            {PROJECTS_LIST.map(({ name, description, category, image }) => (
              <div
                key={name}
                className="group relative shadow-lg rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={`./images/${image}`}
                    alt={name}
                    className="object-cover group-hover:scale-105 transition-transform"
                    fill
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bottom-4 left-4 absolute opacity-0 group-hover:opacity-100 text-white transition-opacity">
                  <h3 className="drop-shadow-lg mb-1 font-semibold text-lg">
                    {name}
                  </h3>
                  <p className="drop-shadow-md text-white/95 text-sm">
                    {description}
                  </p>
                </div>
                <Badge className="top-4 right-4 absolute bg-accent text-accent-foreground">
                  {category}
                </Badge>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="gap-8 grid md:grid-cols-3 mx-auto max-w-4xl">
              <div className="space-y-2">
                <div className="font-bold text-accent text-3xl">50+</div>
                <p className="text-muted">Successful Inspections</p>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-accent text-3xl">100%</div>
                <p className="text-muted">Safety Record</p>
              </div>
              <div className="space-y-2">
                <div className="font-bold text-accent text-3xl">24/7</div>
                <p className="text-muted">Emergency Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="bg-background py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl lg:text-4xl text-balance">
                Pioneering AI-Enhanced ROV Technology
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                As the first company in Jordan to combine ROV operations with
                artificial intelligence, we deliver unprecedented accuracy and
                efficiency in underwater inspections.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 bg-accent mt-2 rounded-full w-2 h-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Real-time AI Analysis
                    </h3>
                    <p className="text-muted">
                      Instant biofouling detection and structural assessment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 bg-accent mt-2 rounded-full w-2 h-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      High-Resolution Imaging
                    </h3>
                    <p className="text-muted">
                      4K cameras with advanced lighting systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 bg-accent mt-2 rounded-full w-2 h-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      International Standards
                    </h3>
                    <p className="text-muted">
                      DNV and Lloyd&apos;s Register compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[600px]">
              <Image
                src="./images/ai-technology-dashboard.jpg"
                alt="AI-powered ROV technology dashboard"
                className="shadow-2xl rounded-2xl"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="bg-card py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="space-y-4 mb-16 text-center">
            <h2 className="font-bold text-3xl lg:text-4xl text-balance">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-2xl text-muted text-xl leading-relaxed">
              We are proud to serve leading companies across Jordan&apos;s
              marine and industrial sectors.
            </p>
          </div>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-auto max-w-6xl">
            {CLIENTS_LIST.map(({ name, image }) => (
              <Card
                key={name}
                className="hover:shadow-lg border-border text-center transition-shadow"
              >
                <CardContent className="space-y-3">
                  <div className="relative flex justify-center items-center mx-auto w-24 h-24">
                    <Image
                      src={`./images/${image}`}
                      alt={name}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                      fill
                    />
                  </div>
                  <h3 className="font-semibold text-sm">{name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-card py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="flex items-center gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-balance">
                  Ready to Dive Deeper?
                </h2>
                <p className="text-muted text-xl leading-relaxed">
                  Contact us today to discuss your underwater inspection needs.
                  Our team is ready to provide expert consultation and tailored
                  solutions.
                </p>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-12">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-accent/10 rounded-lg w-12 h-12">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted">Marines.just2025@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-accent/10 rounded-lg w-12 h-12">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted">+962 777 056 667</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-accent/10 rounded-lg w-12 h-12">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted">
                      Aqaba, King Hussein Street, Jordan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="gap-8 grid md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Anchor className="w-6 h-6" />
                <span className="font-bold text-lg">Marines</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Pioneering underwater inspection services in Jordan with
                AI-powered ROV technology.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Hull Inspection</li>
                <li>Underwater Operations</li>
                <li>Professional Diving</li>
                <li>AI Biofouling Detection</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Aqaba, King Hussein Street</p>
                <p>+962 777 056 667</p>
                <p>Marines.just2025@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-primary-foreground/20 border-t text-primary-foreground/60 text-center">
            <p>
              &copy; 2025 Marines. All rights reserved. | DNV & Lloyd&apos;s
              Register Certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
