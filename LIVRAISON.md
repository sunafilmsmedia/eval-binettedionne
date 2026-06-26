# eval-binettedionne — notes de livraison

Site de qualification de leads pour **Félix-Antoine Binette & Kellie Dionne**
(Via Capitale, Victoriaville). Généré depuis le template `eval-vyncent`.

## Personnalisations appliquées
- Identité : noms, titre « Courtiers immobiliers », région Victoriaville / Centre-du-Québec,
  courriel, slogan « Avec Binette et Dionne, ça fonctionne » (Hero).
- Design system : **noir & blanc + accent rouge Via Capitale** (`app/globals.css`,
  échelle `--color-brand-*` remappée + glows rouges, carte de fond monochrome sombre).
- Badge courtier flottant : **2 courtiers**, chacun avec son numéro `tel:` cliquable
  (Félix-Antoine 819 350-4354 · Kellie 819 740-8066).
- Secteurs : 11 municipalités autour de Victoriaville avec coordonnées GPS (`lib/regions.ts`).
- Meta Pixel : `793760183739278` (`components/MetaPixel.tsx`).
- SEO + rapport IA/fallback : références marché Victoriaville / Centre-du-Québec.

## ⚠️ À fournir / compléter avant mise en prod
| Élément | Où | État |
|---|---|---|
| Photo Félix-Antoine | `public/felix.jpg` | ✅ intégrée (badge) |
| Photo Kellie | `public/kellie.jpg` | ✅ intégrée (badge) |
| Logo Binette & Dionne (PNG blanc) | `public/logo-binettedionne.png` | ✅ intégré (monogramme B/D, haut-gauche) |
| Logo Via Capitale Accès | `public/logo-viacapitale.png` | ✅ intégré (losange, haut-droite) |
| Microsoft Clarity Project ID | `components/Clarity.tsx` (`CLARITY_PROJECT_ID`) | **vide** — script désactivé tant que vide |
| Webhook CRM (GHL) | env `CRM_WEBHOOK_URL` (`.env.local` + Vercel) | **vide** |
| Webhook secret (optionnel) | env `CRM_WEBHOOK_SECRET` | non défini |
| Clé Anthropic (optionnelle) | env `ANTHROPIC_API_KEY` | non définie → rapport fallback déterministe |
| Secteurs | `lib/regions.ts` | proposés — **à faire valider par le courtier** |

## Déploiement
- Repo GitHub : `sunafilmsmedia/eval-binettedionne`
- Projet Vercel : `eval-binettedionne`
- Configurer les env vars dans Vercel, brancher le domaine custom si fourni.
- Tester chaque verdict (favorable / moyen / défavorable / no_sell) + vérifier GHL.
