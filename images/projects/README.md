# Proje Resimleri

Bu klasör, sitedeki `Projeler` bölümünde gösterilen proje görsellerini içerir.

## Yeni proje resmi eklemek

1. Resmi bu klasöre koy.
   - **Kabul edilen formatlar:** `.jpg`, `.png`, `.webp`
   - **Önerilen boyut:** 1200 × 675 piksel (16:9 en-boy oranı)
   - **Dosya adı ipucu:** boşluk ve Türkçe karakter yerine küçük harf + tire kullan
     (`benim-projem.jpg`, `shopfloor.png` gibi)

2. `script.js` dosyasındaki `projects` dizisinde ilgili projenin `image` alanını
   resmin göreli yoluyla doldur.

   ```js
   {
     id: "shopfloor",
     image: "images/projects/shopfloor.jpg",
     link: "https://example.com", // opsiyonel
     tr: { title: "Saha Yönetimi", description: "..." },
     en: { title: "Shopfloor Management", description: "..." },
     de: { title: "Shopfloor-Management", description: "..." },
   }
   ```

3. Resim eklemek istemiyorsan `image` alanını `""` (boş) bırak — kart, projenin
   baş harflerini gösteren bir yer tutucu (placeholder) ile görüntülenecektir.

## Notlar

- Görseller `<img loading="lazy">` ile yüklenir, dolayısıyla ekran dışındaki
  kartlar bant genişliği tüketmez.
- Çok büyük dosyalardan kaçın; 500 KB'ın altında tutmaya çalış
  (WebP formatı iyi bir sıkıştırma sağlar).
