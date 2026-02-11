## ⚙️ Configuration

Le fichier principal est `capacitor.config.ts`. 
Actuellement, il est configuré pour pointer vers :
`https://supercash-user.vercel.app`

**Logo de l'application :**
Le logo doré (`icon.png`) a été injecté dans le projet.
1. Modifiez la valeur de `url` dans `capacitor.config.ts`.
2. Lancez `npm run sync` (ou `pnpm sync`) pour mettre à jour le projet Android.

## 🛠️ Pré-requis pour la compilation
- **Android Studio** installé.
- **Java JDK** installé.
- Un smartphone Android branché ou un émulateur configuré.

## 📦 Comment générer l'APK

1. **Ouvrir le projet dans Android Studio :**
   ```bash
   npx cap open android
   ```
2. **Dans Android Studio :**
   - Attendez que Gradle finisse la synchronisation.
   - Allez dans le menu **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
   - Une fois terminé, une notification vous donnera le lien vers le fichier `app-debug.apk`.

## 🔄 Synchronisation après modifications
Si vous changez l'icône ou une configuration de base :
```bash
npm run build
```

---
© 2024 SuperCash Mobile Operations
