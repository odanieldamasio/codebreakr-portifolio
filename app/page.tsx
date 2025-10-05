"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  Globe,
  Lightbulb,
  Menu,
  X,
  Moon,
  Sun,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Nome é obrigatório";
    if (!formData.email.trim()) errors.email = "Email é obrigatório";
    if (!formData.phone.trim()) errors.phone = "Telefone é obrigatório";
    if (!formData.message.trim()) errors.message = "Mensagem é obrigatória";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setFormErrors({});
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Codebreakr",
            description:
              "Consultoria, desenvolvimento e design de software para empresas modernas",
            url: "https://codebreakr.com.br",
            logo: "https://codebreakr.com.br/logo.png",
            sameAs: [
              "https://linkedin.com/company/codebreakr",
              "https://github.com/codebreakr",
              "https://instagram.com/codebreakr",
              "https://twitter.com/codebreakr",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              availableLanguage: ["Portuguese"],
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "BR",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Codebreakr",
            url: "https://codebreakr.com.br",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://codebreakr.com.br/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Software Development",
            provider: {
              "@type": "Organization",
              name: "Codebreakr",
            },
            areaServed: "BR",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Serviços de Desenvolvimento",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Consultoria de Software",
                    description:
                      "Estratégias personalizadas para transformar seu negócio através da tecnologia",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desenvolvimento de Aplicações Web",
                    description:
                      "Aplicações web modernas, escaláveis e de alta performance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Design de Software",
                    description:
                      "Interfaces intuitivas e experiências memoráveis",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desenvolvimento de Sites",
                    description:
                      "Sites responsivos e otimizados que convertem visitantes em clientes",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-1 text-base sm:text-lg font-bold tracking-tight font-sans"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              <img
                src="/brand-logo.svg"
                alt="Codebreakr Logo"
                className={`w-36 h-full object-cover transition-all duration-300 ${
                  isDark ? "invert brightness-0" : ""
                }`}
                loading="eager"
              />
              <span className="sr-only">Codebreakr</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm hover:text-[#D10F3C] transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-[#D10F3C] transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="text-sm hover:text-[#D10F3C] transition-colors"
              >
                Cases
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm hover:text-[#D10F3C] transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-[#D10F3C] transition-colors"
              >
                Contato
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-muted rounded transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-muted rounded transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-border"
            >
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-sm hover:text-[#D10F3C] transition-colors"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-sm hover:text-[#D10F3C] transition-colors"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("cases")}
                  className="text-left text-sm hover:text-[#D10F3C] transition-colors"
                >
                  Cases
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-sm hover:text-[#D10F3C] transition-colors"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-sm hover:text-[#D10F3C] transition-colors"
                >
                  Contato
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[calc(100vh-4rem)] sm:min-h-0 flex flex-col justify-center"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[#D10F3C] mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">
                  Olá, somos a
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-bold leading-[1.1] mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl"
              >
                Codebreakr.
                <br />
                Transformamos ideias em{" "}
                <span className="text-[#D10F3C]">software de impacto.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl text-sm sm:text-base"
              >
                Consultoria, desenvolvimento e design de software para empresas
                que buscam excelência digital e resultados extraordinários.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-[#D10F3C] text-white hover:bg-[#D10F3C]/90 rounded border border-[#D10F3C] text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 transition-all w-full sm:w-auto"
                >
                  Falar com especialista
                </Button>
                <Button
                  onClick={() => scrollToSection("cases")}
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-[#D10F3C] rounded text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 transition-all w-full sm:w-auto"
                >
                  Ver cases
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] order-2"
            >
              <img
                src="/hero-developer-workspace.jpg"
                alt="Workspace moderno de desenvolvimento de software com computadores e código"
                className="w-full h-full object-cover rounded border border-border"
                loading="eager"
                width="800"
                height="500"
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-1 bg-[#D10F3C]"
                aria-hidden="true"
              />
              <div
                className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#D10F3C] opacity-50"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
            className="flex justify-center mt-8 sm:mt-16 lg:mt-20"
          >
            <button
              onClick={() => scrollToSection("services")}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-[#D10F3C] transition-colors group"
              aria-label="Scroll to services"
            >
              <span className="text-xs sm:text-sm">Role para baixo</span>
              <ChevronDown
                size={24}
                className="group-hover:text-[#D10F3C]"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="relative py-24 px-6 lg:px-8 bg-muted/30 overflow-hidden"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
              01 / Serviços
            </div>
            <h2 id="services-heading" className="font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Soluções completas para o seu negócio digital
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Lightbulb size={32} aria-hidden="true" />,
                title: "Consultoria",
                description:
                  "Estratégias personalizadas para transformar seu negócio através da tecnologia e inovação.",
              },
              {
                icon: <Code size={32} aria-hidden="true" />,
                title: "Desenvolvimento de aplicações web",
                description:
                  "Aplicações web modernas, escaláveis e de alta performance para o seu negócio.",
              },
              {
                icon: <Palette size={32} aria-hidden="true" />,
                title: "Design de software",
                description:
                  "Interfaces intuitivas e experiências memoráveis que encantam seus usuários.",
              },
              {
                icon: <Globe size={32} aria-hidden="true" />,
                title: "Sites web",
                description:
                  "Sites responsivos e otimizados que convertem visitantes em clientes.",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border border-border hover:border-[#D10F3C] transition-all duration-300 bg-card h-full group shadow-none">
                  <CardContent className="p-8">
                    <div className="mb-4 text-[#D10F3C] group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative py-24 px-6 lg:px-8 overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
                02 / Sobre
              </div>
              <h2 id="about-heading" className="font-bold mb-6">
                Sobre <span className="text-[#D10F3C]">Nós</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Somos uma equipe apaixonada por tecnologia e inovação,
                  dedicada a transformar ideias em soluções digitais de alto
                  impacto. Com anos de experiência no mercado, entregamos
                  projetos que superam expectativas.
                </p>
                <p>
                  Nossa abordagem combina expertise técnica com design centrado
                  no usuário, garantindo que cada projeto não apenas funcione
                  perfeitamente, mas também proporcione experiências memoráveis.
                </p>
                <p>
                  Trabalhamos lado a lado com nossos clientes, desde a concepção
                  até a entrega, garantindo que cada detalhe esteja alinhado com
                  seus objetivos de negócio.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <img
                src="/modern-office-collaboration.png"
                alt="Equipe Codebreakr colaborando em escritório moderno"
                className="w-full h-full object-cover rounded border border-border"
                loading="lazy"
                width="600"
                height="400"
              />
              <div
                className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D10F3C] rounded-tr"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASES SECTION */}
      <section
        id="cases"
        className="relative py-24 px-6 lg:px-8 bg-muted/30 overflow-hidden"
        aria-labelledby="cases-heading"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
              03 / Cases
            </div>
            <h2 id="cases-heading" className="font-bold mb-4">
              Cases de Sucesso
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Projetos que transformaram negócios
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Plataforma E-commerce",
                description:
                  "Solução completa de e-commerce com aumento de 300% nas vendas online e experiência otimizada.",
                image: "/ecommerce-dashboard.png",
                tag: "E-commerce",
              },
              {
                title: "Sistema de Gestão",
                description:
                  "Sistema integrado que reduziu 50% no tempo de processos internos e aumentou a produtividade.",
                image: "/business-management-system-interface.jpg",
                tag: "Gestão",
              },
              {
                title: "Aplicativo Mobile",
                description:
                  "App mobile com mais de 100 mil downloads em 6 meses e avaliação 4.8 estrelas nas lojas.",
                image: "/mobile-app-interface.png",
                tag: "Mobile",
              },
              {
                title: "Portal Corporativo",
                description:
                  "Portal corporativo com integração completa de sistemas legados e interface moderna.",
                image: "/corporate-portal-dashboard.jpg",
                tag: "Enterprise",
              },
            ].map((caseItem, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border border-border hover:border-[#D10F3C] transition-all duration-300 overflow-hidden group bg-card h-full shadow-none">
                  <div className="relative h-48 overflow-hidden border-b border-border">
                    <img
                      src={caseItem.image || "/placeholder.svg"}
                      alt={`${caseItem.title} - ${caseItem.description}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="400"
                      height="192"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D10F3C] text-white text-xs px-3 py-1.5 rounded border border-[#D10F3C]">
                        {caseItem.tag}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">{caseItem.title}</h3>
                    <p className="leading-relaxed text-muted-foreground text-sm">
                      {caseItem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        id="testimonials"
        className="relative py-24 px-6 lg:px-8 overflow-hidden"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
              04 / Depoimentos
            </div>
            <h2 id="testimonials-heading" className="font-bold mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Depoimentos de quem confia no nosso trabalho
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote:
                  "A Codebreakr transformou completamente nossa operação digital. O resultado superou todas as expectativas e o suporte é excepcional.",
                author: "Maria Silva",
                role: "CEO, TechCorp",
                image: "/professional-woman-portrait.png",
              },
              {
                quote:
                  "Profissionalismo e qualidade excepcionais. A equipe entendeu perfeitamente nossas necessidades e entregou uma solução impecável.",
                author: "João Santos",
                role: "CTO, InnovaSoft",
                image: "/professional-man-portrait.png",
              },
              {
                quote:
                  "Parceria estratégica que gerou resultados impressionantes. Recomendo fortemente para qualquer empresa que busca excelência.",
                author: "Ana Costa",
                role: "Diretora de TI, GlobalTech",
                image: "/professional-woman-executive.png",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border border-border bg-card shadow-none h-full">
                  <CardContent className="p-8">
                    <div
                      className="text-[#D10F3C] text-4xl mb-4 leading-none"
                      aria-hidden="true"
                    >
                      "
                    </div>
                    <p className="mb-6 leading-relaxed text-muted-foreground text-sm">
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-border pt-6 flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Foto de ${testimonial.author}`}
                        className="w-12 h-12 rounded-full object-cover border border-border"
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                      <div>
                        <p className="font-bold text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative py-24 px-6 lg:px-8 bg-muted/30 overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
              05 / Contato
            </div>
            <h2 id="contact-heading" className="font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground mb-12">
              Vamos conversar sobre seu projeto
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border border-border bg-card shadow-none">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`border border-border focus:border-[#D10F3C] rounded h-11 ${
                          formErrors.name ? "border-[#D10F3C]" : ""
                        }`}
                        placeholder="Seu nome completo"
                        aria-required="true"
                        aria-invalid={!!formErrors.name}
                        aria-describedby={
                          formErrors.name ? "name-error" : undefined
                        }
                      />
                      {formErrors.name && (
                        <p
                          id="name-error"
                          className="text-[#D10F3C] text-sm mt-2"
                          role="alert"
                        >
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`border border-border focus:border-[#D10F3C] rounded h-11 ${
                          formErrors.email ? "border-[#D10F3C]" : ""
                        }`}
                        placeholder="seu@email.com"
                        aria-required="true"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={
                          formErrors.email ? "email-error" : undefined
                        }
                      />
                      {formErrors.email && (
                        <p
                          id="email-error"
                          className="text-[#D10F3C] text-sm mt-2"
                          role="alert"
                        >
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`border border-border focus:border-[#D10F3C] rounded h-11 ${
                          formErrors.phone ? "border-[#D10F3C]" : ""
                        }`}
                        placeholder="(00) 00000-0000"
                        aria-required="true"
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={
                          formErrors.phone ? "phone-error" : undefined
                        }
                      />
                      {formErrors.phone && (
                        <p
                          id="phone-error"
                          className="text-[#D10F3C] text-sm mt-2"
                          role="alert"
                        >
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`border border-border focus:border-[#D10F3C] min-h-[150px] rounded ${
                          formErrors.message ? "border-[#D10F3C]" : ""
                        }`}
                        placeholder="Conte-nos sobre seu projeto..."
                        aria-required="true"
                        aria-invalid={!!formErrors.message}
                        aria-describedby={
                          formErrors.message ? "message-error" : undefined
                        }
                      />
                      {formErrors.message && (
                        <p
                          id="message-error"
                          className="text-[#D10F3C] text-sm mt-2"
                          role="alert"
                        >
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#D10F3C] text-white hover:bg-[#D10F3C]/90 rounded border border-[#D10F3C] h-12 transition-all"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[500px] lg:h-[600px] hidden lg:block"
            >
              <img
                src="/contact-communication.jpg"
                alt="Profissional de atendimento ao cliente pronto para ajudar"
                className="w-full h-full object-cover rounded border border-border"
                loading="lazy"
                width="600"
                height="600"
              />
              <div
                className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D10F3C] rounded-bl"
                aria-hidden="true"
              />
              <div
                className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D10F3C] rounded-tr"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-12 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div
                className="flex items-center gap-1 text-lg font-bold mb-4 font-sans"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                <img
                  src="/brand-logo.svg"
                  alt="Codebreakr Logo"
                  className={`w-36 h-full object-cover transition-all duration-300 ${
                    isDark ? "invert brightness-0" : ""
                  }`}
                  loading="eager"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                Transformando ideias em software de impacto
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <h3 className="font-bold mb-4 text-sm">Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-muted-foreground hover:text-[#D10F3C] transition-colors text-sm"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-muted-foreground hover:text-[#D10F3C] transition-colors text-sm"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("cases")}
                  className="block text-muted-foreground hover:text-[#D10F3C] transition-colors text-sm"
                >
                  Cases
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-muted-foreground hover:text-[#D10F3C] transition-colors text-sm"
                >
                  Contato
                </button>
              </div>
            </nav>
            <div>
              <h3 className="font-bold mb-4 text-sm">Redes Sociais</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/odanieldamasio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-border flex items-center justify-center hover:border-[#D10F3C] hover:bg-[#D10F3C] hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/odanieldamasio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-border flex items-center justify-center hover:border-[#D10F3C] hover:bg-[#D10F3C] hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/_odanieldamasio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-border flex items-center justify-center hover:border-[#D10F3C] hover:bg-[#D10F3C] hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Codebreakr. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-[#D10F3C] transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-[#D10F3C] transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
