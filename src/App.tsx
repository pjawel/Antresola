import { motion } from "motion/react";
import { 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Heart, 
  Star,
  ChevronRight
} from "lucide-react";

const IMAGES = [
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/610880573_843019688547080_4029365742633084480_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-L3nR48HJcsQ7kNvwFbEwdL&_nc_oc=AdqdLJGXEk6bn240GryD1tHuzbr9-gsSzcYSH1Cxk6YMDse4fusczxAysIg_T2mYu3M&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-1.xx&_nc_gid=O4kkeBJp3nHNJt4ToWTHRA&_nc_ss=7a3a8&oh=00_Af3J1a2uJYKzD7Yt_RdltDjO5yKVZ42exEbcA08JcOdX8w&oe=69E94334",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/629355903_870839755765073_4748723348095359433_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dRBD5U4-o9MQ7kNvwFLVH-h&_nc_oc=Adp0cygzbEQ_E2hSjAHl1wGUb7D1B-Jon7wbpw5hCWnNhD8kvsfxPJyNxV1AqEeL5MM&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=nhtLXqcQc_yaPtR7Vbr__Q&_nc_ss=7a3a8&oh=00_Af1xQMZS4--K1qdtSo12TrpBJWvazHVIpPYyeKuV0svClg&oe=69E9404E",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/629242060_870839659098416_7935085383167961522_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=fKXfg-zDO9wQ7kNvwFzWmD8&_nc_oc=AdriN57gf4dHSNyqKM5mRp0aWSRwMNRKbT-dOpYwHYb7g3QobKt3Dpp4I-WLiwTks_w&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=mxa22XhCNHWpU7-Fuuax_g&_nc_ss=7a3a8&oh=00_Af0LWgj-DWP2Q4-TcTkOmWa0DuQSnGIlStkHVPyVpHBD_A&oe=69E945C2",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/548406636_757818033733913_8131738560716094676_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KhjHBTo63W4Q7kNvwHCXV7G&_nc_oc=Adq2nbdvUA5U8Eng_OQGXfxsbTHRQWumy3lfmml52XujH-V1UnLxPJjqMU33_AL_9KY&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=5swDx93UQ4ywaQlnmua5gQ&_nc_ss=7a3a8&oh=00_Af0bLScCnJqknjGbXCGS7fNvRVKBAP8Wq-_YFrIrHVs_Ww&oe=69E942DF",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/549298518_757816887067361_3546314089723300549_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hqnJjNycpiYQ7kNvwFEeP6l&_nc_oc=AdqMIVk7B0OjcOUCecTZfthOcr5zcQakp3nsNMt51uyO4aZkRcDziiL7jbT0727UGyU&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=hNcXln0aowQdQ72JuktdfA&_nc_ss=7a3a8&oh=00_Af0hFhcEMihTncGXxirDaF53hheAVBOtR2cGSX_sFiVb2g&oe=69E91EE4",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t51.82787-15/640400783_17867656743565425_9025380671490965120_n.jpg?stp=dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=GbnNM_wDjJEQ7kNvwHpcU28&_nc_oc=AdrxY9GiyUPyTyazpXxMfFgFJLVWN5TbNDL_DF5i-SFYa-p6B_p5mPYhSGircnB1dG0&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=2mhxmR0XV_-FUWuIw-BS9w&_nc_ss=7a3a8&oh=00_Af17pT9TWCjsDeZH6m98oNuJmH6fCuwBuRKFtThyuTK-bQ&oe=69E91E23"
];

export default function App() {
  return (
    <div className="min-h-screen bg-natural-bg">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-natural-white/80 backdrop-blur-md border-b border-natural-secondary/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex flex-col shrink-0">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-natural-primary leading-none">Antresola</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-natural-secondary mt-0.5 font-semibold">Sala Bankietowa</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-semibold text-natural-text/70">
            <a href="#o-nas" className="hover:text-natural-primary transition-colors">O nas</a>
            <a href="#oferta" className="hover:text-natural-primary transition-colors">Oferta</a>
            <a href="#galeria" className="hover:text-natural-primary transition-colors">Galeria</a>
            <a href="#kontakt" className="hover:text-natural-primary transition-colors">Kontakt</a>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=100085171684368" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-natural-primary text-natural-white hover:bg-natural-primary/90 transition-all duration-300 shadow-md"
          >
            <Facebook size={18} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES[0]} 
            alt="Wnętrze Sali Antresola" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-natural-text/30 bg-gradient-to-t from-natural-text/60 to-transparent" />
        </div>
        
        <div className="relative text-center px-6 max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-natural-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-4 drop-shadow-md">Witamy w Antresoli</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-natural-white font-normal leading-tight md:leading-[0.9] mb-8 drop-shadow-xl">
              Wyjątkowe Chwile <br /> <span className="italic">w Rodzinnym Gronie</span>
            </h1>
            <p className="text-natural-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light mb-10 leading-relaxed italic">
              Przestrzeń stworzona z myślą o Waszych najpiękniejszych uroczystościach. 
              Zadbamy o każdy szczegół, byście mogli cieszyć się czasem z bliskimi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#kontakt" className="px-8 py-4 bg-natural-primary text-natural-white uppercase text-xs tracking-widest font-bold rounded-full hover:bg-natural-primary/90 transition-all shadow-xl shadow-natural-primary/20">
                Skontaktuj się
              </a>
              <a href="#oferta" className="px-8 py-4 bg-natural-white/10 text-natural-white border border-natural-white/30 backdrop-blur-sm uppercase text-xs tracking-widest font-bold rounded-full hover:bg-natural-white/20 transition-all">
                Nasza Oferta
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <div className="w-px h-12 bg-natural-white/30 mx-auto" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="o-nas" className="py-16 md:py-24 px-6 bg-natural-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-natural-secondary" />
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-natural-primary">Kilka słów o nas</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-natural-primary">
              Tworzymy atmosferę, którą <span className="italic text-natural-muted">pamięta się latami</span>
            </h2>
            <p className="text-natural-muted leading-relaxed italic text-lg">
              Sala bankietowa Antresola to przestrzeń stworzona na uroczystości rodzinne i spotkania w gronie przyjaciół. 
              Pyszne jedzenie, rodzinna atmosfera i dbałość o najmniejszy detal to nasza specjalność. 
              Niezależnie od okazji, sprawimy, że ten dzień będzie wyjątkowy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 pt-4">
              <div className="space-y-2 pb-4 sm:pb-0 border-b sm:border-b-0 border-natural-secondary/10">
                <span className="block font-serif text-3xl sm:text-2xl font-normal text-natural-primary leading-none">Wielowiekowa</span>
                <span className="text-[10px] uppercase tracking-widest text-natural-secondary font-bold">Tradycja gościnności</span>
              </div>
              <div className="space-y-2">
                <span className="block font-serif text-3xl sm:text-2xl font-normal text-natural-primary leading-none">Wyjątkowe</span>
                <span className="text-[10px] uppercase tracking-widest text-natural-secondary font-bold">Smaki kuchni</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES[2]} 
                alt="Wnętrze Sali" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oferta Section */}
      <section id="oferta" className="py-16 md:py-24 px-6 bg-natural-bg border-y border-natural-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-natural-primary">Nasza Oferta</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-natural-primary leading-tight">Zorganizujemy Twoje Wydarzenie</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Wesela", icon: Heart, desc: "Celebrujcie miłość w eleganckich wnętrzach naszej sali." },
              { title: "Chrzciny", icon: Users, desc: "Rodzinne powitanie nowego członka rodziny w ciepłej atmosferze." },
              { title: "Komunie", icon: Star, desc: "Wyjątkowa oprawa dla jednego z najważniejszych dni dziecka." },
              { title: "Urodziny", icon: Calendar, desc: "Huczne imprezy i kameralne jubileusze dla każdego wieku." }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-natural-white border border-natural-secondary/10 rounded-xl hover:border-natural-primary/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-natural-primary/5 rounded-xl flex items-center justify-center text-natural-primary mb-6 group-hover:bg-natural-primary group-hover:text-natural-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-natural-text">{service.title}</h3>
                <p className="text-sm text-natural-muted leading-relaxed mb-6 italic">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-natural-primary text-[10px] uppercase tracking-widest font-bold group-hover:gap-3 transition-all">
                  Dowiedz się więcej <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 md:py-24 px-6 bg-natural-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
            <div className="space-y-4">
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-natural-primary">Galeria</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-natural-primary leading-tight">Zajrzyj do <span className="italic">środka</span></h2>
            </div>
            <p className="max-w-sm text-natural-muted text-sm italic">
              Inspirujące dekoracje, smakowite potrawy i radosne chwile uchwycone w obiektywie.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img 
                  src={img} 
                  alt={`Galeria ${i + 1}`} 
                  className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-natural-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-4 right-4 bg-natural-white/90 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold text-natural-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Antresola
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="kontakt" className="bg-natural-white py-16 md:pt-24 md:pb-12 px-6 text-natural-text overflow-hidden border-t border-natural-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-4">
                <span className="uppercase tracking-[0.2em] text-xs font-bold text-natural-primary">Bądźmy w kontakcie</span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-natural-primary uppercase">
                  Zaplanujmy <br /> Twój <span className="italic text-natural-secondary lowercase">Event</span>
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <span className="block text-[11px] uppercase tracking-[2px] text-natural-secondary font-bold border-b border-natural-secondary/20 pb-1">Adres</span>
                    <p className="text-sm leading-relaxed">ul. Marii Opielińskiej 18,<br />25-116 Kielce</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <span className="block text-[11px] uppercase tracking-[2px] text-natural-secondary font-bold border-b border-natural-secondary/20 pb-1">Telefon</span>
                    <p className="text-sm">500 557 882</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <span className="block text-[11px] uppercase tracking-[2px] text-natural-secondary font-bold border-b border-natural-secondary/20 pb-1">Email</span>
                    <p className="text-sm">biuro@restauracjaantresola.pl</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <span className="block text-[11px] uppercase tracking-[2px] text-natural-secondary font-bold border-b border-natural-secondary/20 pb-1">Social Media</span>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100085171684368" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-natural-primary text-natural-white py-2 px-6 rounded-full text-xs font-semibold hover:bg-natural-primary/90 transition-all mt-1"
                    >
                      Znajdź nas na Facebooku
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] md:h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src={IMAGES[4]} 
                alt="Szczegół sali" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-natural-primary/20 flex items-center justify-center p-12 text-center backdrop-blur-[2px]">
                <div className="space-y-4 bg-natural-white/90 p-8 rounded-xl shadow-lg max-w-sm">
                  <h3 className="font-serif text-2xl font-normal text-natural-primary">Masz pytania?</h3>
                  <p className="text-natural-muted text-sm italic leading-relaxed">Chętnie odpowiemy na wszystkie wątpliwości i pomożemy w wyborze menu.</p>
                  <a href="tel:500557882" className="inline-block mt-4 px-8 py-3 bg-natural-primary text-natural-white uppercase text-[10px] tracking-widest font-bold rounded-full">Zadzwoń teraz</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-natural-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start text-natural-secondary">
              <span className="font-serif text-xl font-normal">Antresola</span>
              <span className="text-[8px] uppercase tracking-[0.3em] opacity-60 font-bold">Sala Bankietowa Kielce</span>
            </div>
            <p className="text-natural-muted text-[10px] uppercase tracking-widest font-medium">
              © {new Date().getFullYear()} Sala Bankietowa Antresola. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
