"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const translations = {
  en: {
    // Hero Section
    title1: "Erol Kasapoglu",
    title2: "Video Editor & Content Creator",
    scrollDown: "Scroll Down",

    // About Section
    aboutMe: "About Me",
    aboutMeText:
      "I'm Erol, a 20-year-old Graphic Design student at Ege University and a Business Management student at Istanbul University. My educational journey has been shaped by diverse experiences in Istanbul and Izmir. Choosing IT in high school led to an internship at Hugo Boss' IT department, marking a key step in my career path.\n\nLater, I transitioned into digital marketing and content creation. I organically grew my Instagram brand @girisimzest to 75K+ followers, focusing on entrepreneurship and personal development. I also launched my own course \"Content Creation Training\" at BDB Akademi, helping others build impactful personal brands.\n\nI currently work freelance in video editing and digital production.",
    getInTouch: "Get In Touch",

    // Experience Section
    experience: "Corporate Experience",
    itDepartmentIntern: "IT Department Intern",
    internDescription:
      "I had the opportunity to intern at Hugo Boss' IT department, where I supported system administration and technical assistance. I gained hands-on experience with corporate IT infrastructure and developed practical skills in tech troubleshooting and systems management. This internship opened up professional networking doors and gave me a job offer, which I respectfully declined to focus on university.",
    systemManagement: "System Administration",
    troubleshooting: "Tech Support",
    techSupport: "Corporate IT",
    itInfrastructure: "Problem Solving",
    itStrategy: "IT Strategy",

    // Education Section
    education: "Education",
    graphicDesignProgram: "Graphic Design Program",
    graphicDesignText:
      "I joined Ege University's Graphic Design program to merge my creative skills with digital media, branding, and marketing. Throughout my studies, I have explored visual communication, UI/UX design, branding strategies, and motion graphics, refining my ability to craft impactful and engaging designs.",
    visualCommunication: "Visual Communication",
    uiUxDesign: "UI/UX Design",
    brandingStrategies: "Branding Strategies",
    motionGraphics: "Motion Graphics",
    entrepreneurshipCommunity: "Entrepreneurship Community",
    entrepreneurshipText:
      "As part of Ege University's Entrepreneurship Community, I actively contribute to organizing events, networking with industry professionals, and mentoring students interested in business, content creation, and branding. This experience has strengthened my leadership, event management, and business strategy skills.",
    eventOrganization: "Event Organization",
    networking: "Networking",
    mentoring: "Mentoring",
    leadership: "Leadership",
    businessStrategy: "Business Strategy",

    // Personal Brand Section
    personalBrand: "Personal Brand",
    girisimzest: "@Girisimzest",
    girisimzestText:
      "I founded @Girisimzest, a personal brand focused on entrepreneurship, finance, and personal development. Through consistent and strategic content creation, I built an engaged audience and established the page as a trusted resource for aspiring entrepreneurs.",
    keyAchievements: "Key Achievements",
    achievement1: "Grew the page organically in just 1.5 years",
    achievement2: "Strong content strategy boosting engagement",
    achievement3: "Content planning and social media analytics",
    achievement4: "Community around finance and business",
    growthMetrics: "Growth & Performance Metrics",
    metricsText: "To showcase the impact of @Girisimzest, here are some key engagement statistics:",
    averageEngagementRate: "Average Engagement Rate",
    industryAverage: "Industry average: 2.2%",
    topPerformingPostReach: "Top-Performing Post Reach",
    impressions: "Impressions",
    monthlyProfileVisits: "Monthly Profile Visits",
    uniqueVisitors: "Unique visitors",
    communityGrowth: "Community Growth",
    increaseIn6Months: "Increase in 6 months",
    myExpertise: "My Expertise in Social Media Growth",
    contentStrategy: "Content Strategy",
    contentStrategyText: "Crafting engaging and valuable posts that drive interaction.",
    audienceBuilding: "Audience Building",
    audienceBuildingText: "Creating a loyal and active community around a niche.",
    dataMarketingText: "Analyzing insights to refine growth strategies.",
    dataMarketingTitle: "Data-Driven Marketing",
    brandPositioning: "Brand Positioning",
    brandPositioningText: "Developing a unique and recognizable digital presence.",
    wantToGrow: "Want to grow your brand? Let's connect!",

    // Professional Experience Section
    professionalExperience: "Professional Experience",
    projectManager: "Project Manager",
    projectManagerSubtitle: "Content Creation Course",
    bdbText:
      'As a key project, I developed and launched the "Content Creation Training" course at BDB Akademi. Rooted in the "create what you consume" philosophy, this course empowers individuals to build personal brands and monetize their content.',
    keyResponsibilities: "Key Highlights",
    responsibility1: "Step-by-step guides on social media growth and audience engagement",
    responsibility2: "Real-world monetization strategies",
    responsibility3: "Interactive modules and case studies",
    responsibility4: "Helped X+ students build content strategies",
    contentCreationTraining: 'The "Content Creation Training" Course',
    courseText:
      'As a key project, I developed and launched the "Content Creation Training" course to help individuals build and monetize their personal brands.',
    courseHighlights: "Course Highlights:",
    highlight1: "Step-by-step guides on social media growth, branding, and audience engagement.",
    highlight2: "Real-world strategies for content monetization and scaling.",
    highlight3: "Interactive exercises & case studies based on successful content creators.",
    highlight4: "Helped X+ students improve their content strategies.",
    checkOutCourse: "Explore the Course →",
    myRoleAt: "My Role at BDB Akademi",
    role1: "Led course content production & marketing campaigns",
    role1Text:
      "Created engaging educational materials and promotional strategies to increase course visibility and enrollment.",
    role2: "Managed community discussions and student engagement",
    role2Text:
      "Facilitated meaningful interactions between students and instructors to enhance the learning experience.",
    role3: "Developed structured learning materials",
    role3Text:
      "Created comprehensive course outlines, video scripts, and interactive exercises to maximize learning outcomes.",
    role4: "Optimized e-learning experience",
    role4Text:
      "Implemented data-driven improvements to course structure and delivery to increase student retention and satisfaction.",
    interestedIn: "Interested in online education or content strategy? Let's connect!",

    // Contact Section
    getInTouchTitle: "Get In Touch",
    getInTouchText:
      "Interested in working together? Feel free to reach out for collaborations, projects, or just to say hello!",
    name: "Name",
    yourName: "Your name",
    email: "Email",
    yourEmail: "your@email.com",
    subject: "Subject",
    whatIsThis: "What is this regarding?",
    message: "Message",
    yourMessage: "Your message here...",
    sendMessage: "Send Message",
    contactInformation: "Contact Information",
    location: "Location",
    connectWithMe: "Connect with Me",
    allRightsReserved: "All rights reserved.",

    // Language Toggle
    switchToTurkish: "TR",
    freelancePath: "Freelance Path",
    digitalMarketingConsultancy: "Digital Marketing Consultancy",
    consultancyText:
      "My first step into digital media began by providing Digital Marketing Consultancy to the companies listed below. After working for about a year on average, I realized that offering consultancy services didn't suit me well, so I decided to stop. However, the knowledge I gained and the experiences I accumulated during this period have positively influenced all the other work I've done since then.",
    companiesWorkedWith: "Companies I've Worked With",
    videoEditing: "Video Editing & Post-Production",
    videoEditingText:
      "My journey into video editing began with my own content page, girisimzest. Later on, as people around me started reaching out with offers, I began editing and producing videos for brands whose advertising campaigns were managed by various agencies. You can find some examples of the videos I've edited below.",
  },
  tr: {
    // Hero Section
    title1: "Erol Kasapoğlu",
    title2: "Görsel Hikaye Anlatıcısı & İçerik Üreticisi",
    scrollDown: "Aşağı Kaydır",

    // About Section
    aboutMe: "Hakkımda",
    aboutMeText:
      "Ben Erol, Ege Üniversitesi'nde 20 yaşında bir Grafik Tasarım öğrencisi ve İstanbul Üniversitesi'nde İşletme öğrencisiyim. Eğitim yolculuğum İstanbul ve İzmir'deki çeşitli deneyimlerle şekillendi. Lisede BT'yi seçmem, kariyerimde önemli bir adım olan Hugo Boss'un BT departmanında staj yapmama yol açtı.\n\nDaha sonra dijital pazarlama ve içerik oluşturmaya geçiş yaptım. Instagram markam @girisimzest'i girişimcilik ve kişisel gelişime odaklanarak organik olarak 75 bin+ takipçiye ulaştırdım. Ayrıca BDB Akademi'de başkalarının etkili kişisel markalar oluşturmasına yardımcı olan \"İçerik Oluşturma Eğitimi\" kursumu başlattım.\n\nŞu anda video düzenleme ve dijital prodüksiyon alanlarında serbest çalışıyorum.",
    getInTouch: "İletişime Geç",

    // Experience Section
    experience: "Kurumsal Deneyim",
    itDepartmentIntern: "IT Departmanı Stajyeri",
    internDescription:
      "Hugo Boss'un IT departmanında staj yapma fırsatı buldum ve burada sistem yönetimi ve teknik yardımı destekledim. Kurumsal BT altyapısı ile ilgili uygulamalı deneyim kazandım ve teknik sorun giderme ve sistem yönetimi konusunda pratik beceriler geliştirdim. Bu staj, profesyonel ağ oluşturma kapılarını açtı ve üniversiteye odaklanmak için saygıyla reddettiğim bir iş teklifi verdi.",
    systemManagement: "Sistem Yönetimi",
    troubleshooting: "Teknik Destek",
    techSupport: "Kurumsal BT",
    itInfrastructure: "Problem Çözme",
    itStrategy: "BT Stratejisi",

    // Education Section
    education: "Eğitim",
    graphicDesignProgram: "Grafik Tasarım Programı",
    graphicDesignText:
      "Yaratıcı becerilerimi dijital medya, markalama ve pazarlama ile birleştirmek için Ege Üniversitesi'nin Grafik Tasarım programına katıldım. Eğitimim boyunca, görsel iletişim, UI/UX tasarımı, markalama stratejileri ve hareket grafikleri konularını keşfederek, etkileyici ve ilgi çekici tasarımlar oluşturma yeteneğimi geliştirdim.",
    visualCommunication: "Görsel İletişim",
    uiUxDesign: "UI/UX Tasarımı",
    brandingStrategies: "Markalama Stratejileri",
    motionGraphics: "Hareket Grafikleri",
    entrepreneurshipCommunity: "Girişimcilik Topluluğu",
    entrepreneurshipText:
      "Ege Üniversitesi'nin Girişimcilik Topluluğu'nun bir parçası olarak, etkinlikler düzenleme, sektör profesyonelleriyle ağ kurma ve iş, içerik oluşturma ve markalama konularıyla ilgilenen öğrencilere mentorluk yapma konularında aktif olarak katkıda bulunuyorum. Bu deneyim, liderlik, etkinlik yönetimi ve iş stratejisi becerilerimi güçlendirdi.",
    eventOrganization: "Etkinlik Organizasyonu",
    networking: "Ağ Kurma",
    mentoring: "Mentorluk",
    leadership: "Liderlik",
    businessStrategy: "İş Stratejisi",

    // Personal Brand Section
    personalBrand: "Kişisel Marka",
    girisimzest: "@Girisimzest",
    girisimzestText:
      "Girişimcilik, finans ve kişisel gelişime odaklanan bir kişisel marka olan @Girisimzest'i kurdum. Tutarlı ve stratejik içerik oluşturma yoluyla, etkileşimli bir izleyici kitlesi oluşturdum ve sayfayı girişimci adayları için güvenilir bir kaynak olarak konumlandırdım.",
    keyAchievements: "Önemli Başarılar",
    achievement1: "Sayfayı sadece 1.5 yılda organik olarak büyüttüm",
    achievement2: "Etkileşimi artıran güçlü içerik stratejisi",
    achievement3: "İçerik planlama ve sosyal medya analitiği",
    achievement4: "Finans ve iş etrafında topluluk oluşturma",
    growthMetrics: "Büyüme ve Performans Metrikleri",
    metricsText: "@Girisimzest'in etkisini göstermek için bazı önemli etkileşim istatistikleri:",
    averageEngagementRate: "Ortalama Etkileşim Oranı",
    industryAverage: "Sektör ortalaması: %2.2",
    topPerformingPostReach: "En İyi Performans Gösteren Gönderi Erişimi",
    impressions: "Gösterim",
    monthlyProfileVisits: "Aylık Profil Ziyaretleri",
    uniqueVisitors: "Tekil ziyaretçi",
    communityGrowth: "Topluluk Büyümesi",
    increaseIn6Months: "6 ayda artış",
    myExpertise: "Sosyal Medya Büyümesindeki Uzmanlığım",
    contentStrategy: "İçerik Stratejisi",
    contentStrategyText: "Etkileşimi artıran ilgi çekici ve değerli gönderiler oluşturma.",
    audienceBuilding: "Kitle Oluşturma",
    audienceBuildingText: "Bir niş etrafında sadık ve aktif bir topluluk oluşturma.",
    dataMarketingTitle: "Veri Odaklı Pazarlama",
    dataMarketingText: "Büyüme stratejilerini geliştirmek için içgörüleri analiz etme.",
    brandPositioning: "Marka Konumlandırma",
    brandPositioningText: "Benzersiz ve tanınabilir bir dijital varlık geliştirme.",
    wantToGrow: "Markanızı büyütmek mi istiyorsunuz? Hadi bağlantı kuralım!",

    // Professional Experience Section
    professionalExperience: "Profesyonel Deneyim",
    projectManager: "Proje Yöneticisi",
    projectManagerSubtitle: "İçerik Oluşturma Kursu",
    bdbText:
      'Önemli bir proje olarak, BDB Akademi\'de "İçerik Oluşturma Eğitimi" kursunu geliştirdim ve başlattım. "Tükettiğini yarat" felsefesinden yola çıkarak, bu kurs bireyleri kişisel markalar oluşturmaya ve içeriklerinden para kazanmaya teşvik ediyor.',
    keyResponsibilities: "Önemli Noktalar",
    responsibility1: "Sosyal medya büyümesi ve kitle katılımı konusunda adım adım rehberler",
    responsibility2: "Gerçek dünya para kazanma stratejileri",
    responsibility3: "İnteraktif modüller ve vaka çalışmaları",
    responsibility4: "X+ öğrencinin içerik stratejileri oluşturmasına yardımcı oldu",
    contentCreationTraining: '"İçerik Oluşturma Eğitimi" Kursu',
    courseText:
      'Önemli bir proje olarak, bireylerin kişisel markalarını oluşturmalarına ve paraya çevirmelerine yardımcı olmak için "İçerik Oluşturma Eğitimi" kursunu geliştirdim ve başlattım.',
    courseHighlights: "Kurs Öne Çıkanları:",
    highlight1: "Sosyal medya büyümesi, markalama ve kitle katılımı konusunda adım adım rehberler.",
    highlight2: "İçerik monetizasyonu ve ölçeklendirme için gerçek dünya stratejileri.",
    highlight3: "Başarılı içerik oluşturucuları temel alan interaktif alıştırmalar ve vaka çalışmaları.",
    highlight4: "X+ öğrencinin içerik stratejilerini geliştirmesine yardımcı oldu.",
    checkOutCourse: "Kursu Keşfet →",
    myRoleAt: "BDB Akademi'deki Rolüm",
    role1: "Kurs içeriği üretimi ve pazarlama kampanyalarına liderlik ettim",
    role1Text:
      "Kurs görünürlüğünü ve kaydını artırmak için ilgi çekici eğitim materyalleri ve promosyon stratejileri oluşturdum.",
    role2: "Topluluk tartışmalarını ve öğrenci katılımını yönettim",
    role2Text: "Öğrenme deneyimini geliştirmek için öğrenciler ve eğitmenler arasında anlamlı etkileşimler sağladım.",
    role3: "Yapılandırılmış öğrenme materyalleri geliştirdim",
    role3Text:
      "Öğrenme çıktılarını en üst düzeye çıkarmak için kapsamlı kurs anahatları, video senaryoları ve interaktif alıştırmalar oluşturdum.",
    role4: "E-öğrenme deneyimini optimize ettim",
    role4Text:
      "Öğrenci memnuniyetini ve kalıcılığını artırmak için kurs yapısı ve sunumuna veri odaklı iyileştirmeler uyguladım.",
    interestedIn: "Çevrimiçi eğitim veya içerik stratejisi ile ilgileniyor musunuz? Hadi bağlantı kuralım!",

    // Contact Section
    getInTouchTitle: "İletişime Geçin",
    getInTouchText:
      "Birlikte çalışmak ister misiniz? İşbirlikleri, projeler veya sadece merhaba demek için iletişime geçmekten çekinmeyin!",
    name: "İsim",
    yourName: "İsminiz",
    email: "E-posta",
    yourEmail: "eposta@adresiniz.com",
    subject: "Konu",
    whatIsThis: "Bu ne hakkında?",
    message: "Mesaj",
    yourMessage: "Mesajınız buraya...",
    sendMessage: "Mesaj Gönder",
    contactInformation: "İletişim Bilgileri",
    location: "Konum",
    connectWithMe: "Benimle Bağlantı Kurun",
    allRightsReserved: "Tüm hakları saklıdır.",

    // Language Toggle
    switchToTurkish: "EN",
    freelancePath: "Serbest Çalışma Yolu",
    digitalMarketingConsultancy: "Dijital Pazarlama Danışmanlığı",
    consultancyText:
      "Dijital medyaya ilk adımım, aşağıda listelenen şirketlere Dijital Pazarlama Danışmanlığı sağlamakla oldu. Her şirketle yaklaşık bir yıl çalıştıktan sonra, danışmanlık hizmetleri sunmanın benim için doğru olmadığına karar verdim ve bu hizmeti sonlandırmaya karar verdim. Ancak, bu dönemde edindiğim bilgi ve deneyimler, daha sonra üstlendiğim tüm çalışmaları önemli ölçüde etkiledi.",
    companiesWorkedWith: "Çalıştığım Şirketler",
    videoEditing: "Video Düzenleme ve Post-Prodüksiyon",
    videoEditingText:
      "Video düzenleme yolculuğum kendi içerik sayfam girisimzest ile başladı. Daha sonra, çevremdeki insanlar tekliflerle bana ulaşmaya başladıkça, reklam kampanyaları çeşitli ajanslar tarafından yönetilen markalar için videolar düzenlemeye ve üretmeye başladım. Düzenlediğim videoların bazı örneklerini aşağıda bulabilirsiniz.",
  },
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

function ClientProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      name: "Keskin Dijital",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%2080%20%281%29-QwgH1WsIAsW1NTkXDTmWSKCFq17j8r.png",
    },
    {
      id: 2,
      name: "M&M Aksesuar",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo.JPG-JjJbYzuZKtCQXfd5SZv12kbOnRt4ap.jpeg",
    },
    {
      id: 3,
      name: "Dantelions",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dantelions%20siyah-lpfvm5PaUQQW5BB8YimXUyNWAhjHpV.png",
    },
    {
      id: 4,
      name: "Feyezan Saklı Bahçe",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feyezan%20sakl%C4%B1%20bahce-IcyvjUBXRgHQqqShh9y7NJgmYbPBD8.png",
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-white/[0.05] border border-white/10 rounded-xl p-8 overflow-hidden">
      <div className="overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-60 h-60 flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
            <Image
              src={projects[currentIndex].logo || "/placeholder.svg"}
              alt={`${projects[currentIndex].name} Logo`}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div className="mt-4 text-center">
            <h4 className="text-white font-medium text-lg">{projects[currentIndex].name}</h4>
          </div>
        </motion.div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-purple-500" : "bg-white/20"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

export default function HeroGeometric({
  title1 = "Erol Kasapoglu",
  title2 = "Graphic Designer & Content Creator",
}: {
  title1?: string
  title2?: string
}) {
  const [language, setLanguage] = useState<"en" | "tr">("en")
  const t = translations[language]

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en")
  }

  return (
    <div className="bg-[#030303] min-h-screen">
      {/* Language Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 backdrop-blur-sm"
        >
          {t.switchToTurkish}
        </button>
      </div>
      {/* Hero Section - First Screen */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-indigo-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-rose-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-violet-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-amber-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-cyan-500/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  {t.title1}
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ",
                    pacifico.className,
                  )}
                >
                  {t.title2}
                </span>
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-white/40 text-sm mb-2">{t.scrollDown}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/40 animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      </section>

      {/* About Section - Scrollable Content */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  {t.aboutMe}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto rounded-full mb-10" />
              <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
                {t.aboutMeText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mt-10"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {t.getInTouch}
              </a>
              <div className="flex gap-6 items-center">
                <a
                  href="https://www.instagram.com/erolkasapogluu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/orçun-erol-kasapoğlu-400451259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/erollkasapoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.02] via-transparent to-indigo-500/[0.02] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white/90 to-indigo-300">
                  {t.experience}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-indigo-500 mx-auto rounded-full mb-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-indigo-500" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-40 h-40 flex-shrink-0 bg-white rounded-xl p-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hugo-Boss-Logo.svg-EKDf6K6g2r6W37Y9KuKYt9bSypzN9q.png"
                    alt="Hugo Boss Logo"
                    width={150}
                    height={100}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{t.itDepartmentIntern}</h3>
                    <span className="text-white/40 text-sm px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 inline-block">
                      2021 - 2022
                    </span>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-6">{t.internDescription}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {t.systemManagement}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                      {t.troubleshooting}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {t.techSupport}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {t.itInfrastructure}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {t.itStrategy}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-cyan-500/[0.02] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-cyan-300">
                  {t.education}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-10" />
            </motion.div>

            <div className="space-y-12">
              {/* Ege University */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                viewport={{ once: true }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-40 h-40 flex-shrink-0 bg-white rounded-xl p-4 flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_Ege_Uni-qfqRNZpxVnMeDOkEjBm5Jl9BVGcPvd.png"
                      alt="Ege University Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">EGE UNIVERSITY – GRAPHIC DESIGN</h3>
                      <span className="text-white/40 text-sm px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 inline-block">
                        2020 - Present
                      </span>
                    </div>

                    <p className="text-white/60 leading-relaxed mb-6">
                      While studying Graphic Design at Ege University, I focused especially on video editing and visual
                      storytelling. I improved my technical skills in editing and digital media, combining aesthetics
                      with usability in my projects. The production process experience helped me stand out in the
                      creative field.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        Video Editing
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Visual Communication
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                        Branding Strategies
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                        Creative Direction
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* EGT (Entrepreneurship Club) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                viewport={{ once: true }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-40 h-40 flex-shrink-0 bg-[#1a1a2e] rounded-xl p-4 flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Go%CC%88rsel%202025-02-06%20saat%2011.42.13_5c9d26c2.jpg-ze4smxqTeW9uiNIqbdsO1vsqoZEgF9.jpeg"
                      alt="Ege Entrepreneurship Community Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                        EGT (ENTREPRENEURSHIP CLUB @ EGE UNIVERSITY)
                      </h3>
                      <span className="text-white/40 text-sm px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 inline-block">
                        2023 - Present
                      </span>
                    </div>

                    <p className="text-white/60 leading-relaxed mb-6">
                      As a part of the executive team of Ege University's Entrepreneurship Club, I actively organized
                      events, created content, and networked with industry professionals. This experience boosted my
                      leadership, event planning, business strategy, and problem-solving skills. My active role helped
                      expand my professional network and added valuable career connections.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        Leadership
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        Event Planning
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        Networking
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Istanbul University */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                viewport={{ once: true }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-green-500" />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-40 h-40 flex-shrink-0 bg-white rounded-xl p-4 flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Istanbul%20Universitesi%20Logo-7A53ehMQK0hBzgwBnVmepckRzzS8iy.jpeg"
                      alt="Istanbul University Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                        ISTANBUL UNIVERSITY – BUSINESS MANAGEMENT (ONLINE)
                      </h3>
                      <span className="text-white/40 text-sm px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 inline-block">
                        2024 - Present
                      </span>
                    </div>

                    <p className="text-white/60 leading-relaxed mb-6">
                      Alongside my design education, I am also pursuing Business Management online at Istanbul
                      University as part of a second degree program. This allows me to strengthen the strategic and
                      managerial side of my creative projects.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Girisimzest Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] via-transparent to-amber-500/[0.02] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white/90 to-amber-300">
                  {t.personalBrand}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-10" />
            </motion.div>

            {/* Girisimzest Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative mb-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-amber-500" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-40 h-40 flex-shrink-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-4 flex items-center justify-center relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-r6qfub6dnPqyQphJ9dgswVHhJbge1w.jpeg"
                    alt="Girisimzest Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                  />

                  {/* Instagram Logo with Link */}
                  <a
                    href="https://www.instagram.com/girisimzest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-6 -left-6 transform rotate-[-8deg] bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-full backdrop-blur-sm border border-white/10 hover:scale-110 transition-transform duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#instagram-gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <defs>
                        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFDD80" />
                          <stop offset="50%" stopColor="#FF543E" />
                          <stop offset="100%" stopColor="#C837AB" />
                        </linearGradient>
                      </defs>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  {/* 75K+ Text */}
                  <div className="absolute -bottom-8 -right-8 transform rotate-[-8deg]">
                    <span
                      className={cn(
                        "text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-amber-300",
                        pacifico.className,
                      )}
                    >
                      75K+
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">Personal Brand – @Girisimzest</h3>
                    <span className="text-white/40 text-sm px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 inline-block">
                      2022 - Present
                    </span>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-6">
                    I founded @Girisimzest, a content brand focused on entrepreneurship, finance, and self-growth.
                    Through consistent and strategic content creation, I built a highly engaged audience and positioned
                    the page as a trusted source for aspiring entrepreneurs. I continue to produce content actively.
                  </p>

                  <h4 className="text-lg font-semibold text-white mb-4">{t.keyAchievements}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Reached 75K+ followers organically in 1.5 years</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Created data-driven content strategies that increased engagement</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Built a community around entrepreneurship and business growth</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>Managed content planning and analytics</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 mb-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Social Media
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Brand Building
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Finance Content
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      Strategic Growth
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Growth & Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative mb-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-emerald-500" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Growth & Impact Metrics (@Girisimzest)</h3>
              </div>

              <p className="text-white/60 leading-relaxed mb-6">
                Important stats that showcase the impact and reach of the @Girisimzest brand:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-teal-500 to-green-400 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-white">Total Account Reach</h4>
                  </div>
                  <div className="relative z-10">
                    <span
                      className={cn(
                        "text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400 transform rotate-2 inline-block",
                        pacifico.className,
                      )}
                    >
                      4M+
                    </span>
                    <p className="text-white/40 text-sm mt-2">Last 30 days</p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500/5 rounded-full blur-xl"></div>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-red-500 to-orange-400 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-white">Interactions</h4>
                  </div>
                  <div className="relative z-10">
                    <span
                      className={cn(
                        "text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-orange-400 transform -rotate-2 inline-block",
                        pacifico.className,
                      )}
                    >
                      500K+
                    </span>
                    <p className="text-white/40 text-sm mt-2">Last 30 days</p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-500/5 rounded-full blur-xl"></div>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-indigo-500 to-violet-400 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-white">90-day Profile Visits</h4>
                  </div>
                  <div className="relative z-10">
                    <span
                      className={cn(
                        "text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-violet-400 transform rotate-1 inline-block",
                        pacifico.className,
                      )}
                    >
                      100K+
                    </span>
                    <p className="text-white/40 text-sm mt-2">Unique visitors</p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl"></div>
                </div>
              </div>
            </motion.div>

            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500" />

              <h3 className="text-xl font-bold text-white mb-6">🎯 {t.myExpertise}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">{t.contentStrategy}</h4>
                    <p className="text-white/60 text-sm">{t.contentStrategyText}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">{t.audienceBuilding}</h4>
                    <p className="text-white/60 text-sm">{t.audienceBuildingText}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">{t.dataMarketingTitle}</h4>
                    <p className="text-white/60 text-sm">Analyzing insights to refine growth strategies.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 7h-9" />
                      <path d="M14 17H5" />
                      <circle cx="17" cy="17" r="3" />
                      <circle cx="7" cy="7" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">{t.brandPositioning}</h4>
                    <p className="text-white/60 text-sm">{t.brandPositioningText}</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-amber-500/20 hover:from-emerald-500/30 hover:to-amber-500/30 border border-emerald-500/20 text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <span>{t.wantToGrow}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BDB Akademi Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-black/[0.02] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-white/90 to-gray-300">
                  {t.professionalExperience}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-gray-500 mx-auto rounded-full mb-10" />
            </motion.div>

            {/* BDB Akademi Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative mb-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-gray-700" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-40 h-40 flex-shrink-0 bg-white rounded-xl p-4 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BDB-Akademi-Login-Logo.png-beqTG9fC9S6xJY7ZEBn3CQgZix2o6e.webp"
                    alt="BDB Akademi Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 md:mb-0">{t.projectManager}</h3>
                      <p className="text-white/60 text-sm">{t.projectManagerSubtitle}</p>
                    </div>
                    <span className="text-white/40 text-sm px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 inline-block mt-2 md:mt-0">
                      2022 - Present
                    </span>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-6">{t.bdbText}</p>

                  <h4 className="text-lg font-semibold text-white mb-4">{t.keyResponsibilities}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{t.responsibility1}</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{t.responsibility2}</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{t.responsibility3}</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/60">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{t.responsibility4}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                  Personal Branding
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Digital Product
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                  Education
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Course Design
                </span>
              </div>
            </motion.div>

            {/* Content Creation Training Course */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative mb-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 to-orange-500" />

              <h3 className="text-xl font-bold text-white mb-6">🚀 {t.contentCreationTraining}</h3>

              <p className="text-white/60 leading-relaxed mb-6">{t.courseText}</p>

              <div className="bg-gradient-to-br from-black/30 to-orange-900/10 rounded-xl p-6 mb-8 border border-orange-500/10">
                <h4 className="text-lg font-medium text-white mb-4">💡 {t.courseHighlights}:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-white/60">{t.highlight1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-white/60">{t.highlight2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-white/60">{t.highlight3}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-white/60">{t.highlight4}</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="https://bdbakademi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-gray-700/20 hover:from-orange-500/30 hover:to-gray-700/30 border border-orange-500/20 text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <span>{t.checkOutCourse}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* My Role at BDB Akademi */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative mb-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-gray-700" />

              <h3 className="text-xl font-bold text-white mb-6">🎯 {t.myRoleAt}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-400 mt-1">✔</span>
                    <h4 className="text-lg font-medium text-white">{t.role1}</h4>
                  </div>
                  <p className="text-white/60 text-sm ml-8">{t.role1Text}</p>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-400 mt-1">✔</span>
                    <h4 className="text-lg font-medium text-white">{t.role2}</h4>
                  </div>
                  <p className="text-white/60 text-sm ml-8">{t.role2Text}</p>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-400 mt-1">✔</span>
                    <h4 className="text-lg font-medium text-white">{t.role3}</h4>
                  </div>
                  <p className="text-white/60 text-sm ml-8">{t.role3Text}</p>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-400 mt-1">✔</span>
                    <h4 className="text-lg font-medium text-white">{t.role4}</h4>
                  </div>
                  <p className="text-white/60 text-sm ml-8">{t.role4Text}</p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-gray-700/20 hover:from-orange-500/30 hover:to-gray-700/30 border border-orange-500/20 text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <span>{t.interestedIn}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Freelance Path Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-transparent to-blue-500/[0.02] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white/90 to-blue-300">
                  {t.freelancePath}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-10" />
            </motion.div>

            {/* Digital Marketing Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative mb-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />

              <h3 className="text-2xl font-bold text-white mb-6">{t.digitalMarketingConsultancy}</h3>

              <p className="text-white/60 leading-relaxed mb-10">{t.consultancyText}</p>

              <h4 className="text-xl font-semibold text-white mb-6">{t.companiesWorkedWith}</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/[0.05] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acrobass%20Organization-fsmuai09V6UTNiJCElJjnKup69odT5.jpeg"
                    alt="Acrobass Organization"
                    width={200}
                    height={200}
                    className="object-contain mb-4"
                  />
                  <h4 className="text-white font-medium text-lg">Acrobass Organization</h4>
                </div>
                <div className="bg-white/[0.05] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istanbul-protek2-xI0R4MMzPpwp50iXBCyA21QOvgkDIj.gif"
                    alt="Protek Nakliyat"
                    width={250}
                    height={150}
                    className="object-contain mb-4"
                  />
                  <h4 className="text-white font-medium text-lg">Protek Nakliyat</h4>
                </div>
              </div>
            </motion.div>

            {/* Video Editing & Post-Production */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden relative mb-12"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />

              <h3 className="text-2xl font-bold text-white mb-6">{t.videoEditing}</h3>

              <p className="text-white/60 leading-relaxed mb-10">{t.videoEditingText}</p>

              {/* Client Projects Carousel */}
              <h4 className="text-xl font-semibold text-white mb-6">Client Projects</h4>

              <ClientProjectsCarousel />

              {/* Google Drive Link */}
              <div className="bg-white/[0.05] border border-white/10 rounded-xl p-8 mt-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 17 6 0" />
                      <path d="m9 12 6 0" />
                      <path d="m9 7 6 0" />
                      <path d="M5 22h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">View My Video Portfolio</h4>
                  <p className="text-white/60 mb-6">Check out my video editing work in the Google Drive folder below</p>
                  <a
                    href="https://drive.google.com/drive/folders/1IdnWvngKZGUI7EO0L4pRbiKiFP1GR7qb?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 hover:from-red-500/30 hover:to-yellow-500/30 border border-red-500/20 text-white transition-all duration-300 hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2H2v10h10V2Z" />
                      <path d="M12 2h10v10H12V2Z" />
                      <path d="M12 12H2v10h10V12Z" />
                      <path d="M12 12h10v10H12V12Z" />
                    </svg>
                    <span>Open Google Drive Folder</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/[0.02] via-transparent to-gray-500/[0.02] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white/90 to-gray-300">
                  {t.getInTouchTitle}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-500 mx-auto rounded-full mb-10" />
              <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
                {t.getInTouchText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-12 md:p-16 overflow-hidden relative flex flex-col items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-gray-500" />

              <a href="mailto:erol.kasapoglu@example.com" className="group transition-all duration-300 hover:scale-110">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-gray-500/20 rounded-full flex items-center justify-center mb-6 group-hover:from-indigo-500/30 group-hover:to-gray-500/30 transition-all duration-300 border border-white/10 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/80 group-hover:text-white transition-colors duration-300"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 text-center">
                  Click to send me an email
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-4">{t.contactInformation}</h4>
              <p className="text-white/60 mb-2">{t.location}: İzmir, Türkiye</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/erolkasapogluu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/orçun-erol-kasapoğlu-400451259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/erollkasapoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-6 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-white/40 text-sm">© 2024 Erol Kasapoglu. {t.allRightsReserved}</p>
        </div>
      </footer>
    </div>
  )
}

