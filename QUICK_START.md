# Quick Start Guide

## 🚀 Running Your Website

```bash
cd "c:\Archis Btech Comp\Projects\Portfolio\ArchisGokhale.github.io"
npm run dev
```

**Server will start on:** http://localhost:5000

---

## 📁 Key File Locations

### Configuration & Constants
- `client/src/constants/sound-config.ts` - Sound settings
- `client/src/constants/layout-config.ts` - Navigation & user info

### Custom Hooks
- `client/src/hooks/use-theme.tsx` - Theme management
- `client/src/hooks/use-sound.tsx` - Sound effects
- `client/src/hooks/use-mobile.tsx` - Mobile detection
- `client/src/hooks/use-layout-controls.ts` - Layout control logic

### Components
- `client/src/components/layout.tsx` - Main layout
- `client/src/components/layout/nav-item.tsx` - Navigation item
- `client/src/components/layout/control-buttons.tsx` - Theme/Sound buttons

---

## 🛠️ Available Commands

```bash
npm run dev          # Start development server on localhost:5000
npm run dev:client   # Run only Vite client (port 5000)
npm run build        # Build for production
npm run start        # Run production build
npm run check        # Run TypeScript type checking
npm run db:push      # Push database schema changes
```

---

## 📝 Making Updates

### Update User Information
Edit `client/src/constants/layout-config.ts`:
```typescript
export const USER_INFO = {
  name: 'ARCHIS',
  title: 'SDE • ML SYSTEMS • INFRA',
  // ... update these values
};
```

### Add/Remove Navigation Items
Edit `client/src/constants/layout-config.ts`:
```typescript
export const NAV_ITEMS = [
  { href: '/' as const, label: 'PORTFOLIO' },
  // Add new items here
];
```

### Modify Sound Settings
Edit `client/src/constants/sound-config.ts`:
```typescript
export const SOUND_CONFIGS: Record<SoundType, SoundConfig> = {
  click: { freq1: 800, freq2: 1200, duration: 0.12, waveform: 'sine' },
  // Adjust frequencies, duration, waveform
};
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5000 already in use | Change PORT env variable: `set PORT=3000 && npm run dev` |
| Module not found errors | Run `npm install` |
| Hot reload not working | Refresh browser or restart dev server |
| TypeScript errors | Run `npm run check` to see all errors |

---

## ✅ What Was Refactored

- ✅ Windows compatibility (cross-env, localhost)
- ✅ Code organization (constants, components, hooks)
- ✅ State management (localStorage, mounted state)
- ✅ Component composition (extracted 2 new components)
- ✅ Event listener cleanup (use-mobile hook)
- ✅ Type safety improvements

See `REFACTORING_SUMMARY.md` for detailed changes.
