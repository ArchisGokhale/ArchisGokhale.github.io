import { motion } from "framer-motion";
import northernTrust from '@assets/stock_images/northern_trust_compa_4dd19ad9.jpg';
import beatsDre from '@assets/stock_images/apple_beats_by_dre_l_b48c2ee7.jpg';
import buildspace from '@assets/stock_images/buildspace_logo_star_82a93f8f.jpg';
import isro from '@assets/stock_images/isro_indian_space_re_9ae9ccef.jpg';
import mit from '@assets/stock_images/mit_world_peace_univ_63576b53.jpg';
import nasa from '@assets/stock_images/nasa_space_apps_chal_1340e9fe.jpg';

const COMPANIES = [
  { name: "Northern Trust", logo: northernTrust, role: "SDE Intern - Infrastructure" },
  { name: "Apple (Beats)", logo: beatsDre, role: "Data & Product Engineer" },
  { name: "Buildspace", logo: buildspace, role: "Full-Stack SDE (Top 7.4%)" },
  { name: "ISRO", logo: isro, role: "SIH 2024 Gold Winner" },
  { name: "MIT Pune", logo: mit, role: "B.Tech CSE (9.32 GPA)" },
  { name: "NASA", logo: nasa, role: "Space Apps Organizer" },
];

export function CompanyShowcase() {
  return (
    <div className="space-y-2 lg:space-y-4">
      <h3 className="text-base lg:text-lg font-display font-bold text-primary">ORGANIZATIONS</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
        {COMPANIES.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="steam-panel border border-border/30 p-2 lg:p-4 flex flex-col items-center justify-center gap-2 lg:gap-3 hover:border-primary/60 transition-all group cursor-pointer"
          >
            <img 
              src={company.logo} 
              alt={company.name}
              className="h-8 lg:h-12 w-8 lg:w-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="text-center">
              <p className="font-mono font-bold text-[10px] lg:text-xs text-foreground group-hover:text-primary transition-colors">{company.name}</p>
              <p className="text-[8px] lg:text-[10px] text-muted-foreground mt-1">{company.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
