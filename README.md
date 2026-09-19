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

## Native portfolio synchronization

This repository is the authoritative website source. Edit and commit here; do
not modify the Ajans compatibility snapshot or generated portfolio HTML.

`npm run build:preview` generates `dist-preview/` for
`https://yurdakul.net.tr/isler/siteler/huseyin-yurdakul/` with noindex and a `preview-source.json`
commit receipt. The host repository `YURDAKULOGLU/yurdakul-net-tr` consumes
this repository as a pinned Git submodule. Its GitHub Actions workflow checks
main every 15 minutes, validates new builds, advances the source revision, and
the existing Cloudflare Builds integration publishes the host. GitHub can delay
scheduled runs; use the host workflow's manual Run action for an immediate check.
Only committed/pushed changes participate. Failed checks retain the last good
revision. Preview builds do not change the production domain or email address.
