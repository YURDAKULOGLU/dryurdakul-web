# dryurdakul.com

Prof. Dr. Hüseyin Yurdakul — kişisel akademik profil sitesi /
personal academic profile site.

Tıbbi genetik uzmanı (MD, PhD) · Medical geneticist. Bilingual **TR + EN**.

## Stack

Statik HTML + CSS — build adımı yok. Fontlar Google Fonts üzerinden
(Geist, Geist Mono, Bricolage Grotesque). İki dil `hreflang` ile bağlı;
`Person` JSON-LD structured data.

## Yapı / Structure

```
index.html        # TR
en/index.html     # EN
styles.css        # paylaşımlı stil / shared styles
portrait.jpg      # portre / portrait
```

## Yerel önizleme / Local preview

Herhangi bir statik sunucu yeterli:

```bash
python -m http.server 3100
# http://localhost:3100/        (TR)
# http://localhost:3100/en/     (EN)
```

## Lisans / License

Kod / code: **MIT** (bkz. `LICENSE`).
İçerik, isim ve görseller / content, name & imagery: © Hüseyin Yurdakul.
