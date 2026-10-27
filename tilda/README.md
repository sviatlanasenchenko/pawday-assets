# Pawday T123: adult dog and puppy illustrations

Status: prepared and tested in the preview branch. This package has not been inserted into Tilda or published. The `main` branch is unchanged.

## Files

- `Pawday_T123_EN_2026-10-27.txt`: short English block, 11 lines, with `data-lang="en"`.
- `Pawday_T123_RU_2026-10-27.txt`: short Russian block, 11 lines, with `data-lang="ru"`.
- `Pawday_T123_ZH_2026-10-27.txt`: short Simplified Chinese block, 11 lines, with `data-lang="zh"`.
- `pawday-t123-loader.js`: shared external loader used by the three short blocks.
- `language-variants-verification.json`: locale defaults, shared links, and verification boundaries for the short blocks.
- `Pawday_T123_adult_puppy_2026-10-27.txt`: complete replacement for the existing T123 block. Copy the entire contents as code; replace the old block contents rather than append a second loader.
- `Pawday_T123_before_adult_puppy_2026-10-27.html`: byte-for-byte backup of the T123 code supplied by the owner.
- `adult-puppy-verification.json`: exact comparisons and verification boundaries.

## Three short language blocks

Use the EN file on the English page, RU on the Russian page, and ZH on the Chinese page. Replace the existing T123 contents with the entire corresponding short file. Use one Pawday block per page; do not append it alongside the old block or combine the three files on one page.

The language attribute selects the initial language even when a Tilda draft has a temporary URL. Initial loading does not rewrite that URL. The in-app language switch still works and preserves answers. A valid shared-result link retains the language saved in that link. Loading, error, and JavaScript-disabled messages are localized in each short file.

The short blocks reference the loader at immutable commit `7d795f5d2ad0a2e9379ee059dcad230118427e8e` through jsDelivr, with SHA-384 integrity validation. The exact code remains in the preview branch. These files have not been inserted into Tilda. CDN delivery and the actual Tilda preview remain unverified: the preceding external lookup failed, and no alternate access method or repeat lookup was attempted.

## How this version loads resources

The original `ASSET_BASE` remains `https://sviatlanasenchenko.github.io/pawday-assets/`. Existing styles, data, scripts, legacy photos, and the direct-app fallback keep their existing addresses.

The new illustration renderer and credit presentation are embedded in the T123 override table. The renderer runs immediately after `database-v6-adapter.js`. Each of the 142 images uses its exact stable profile ID and an immutable URL under:

`https://raw.githubusercontent.com/sviatlanasenchenko/pawday-assets/8c2e3bb0f47d2bc12353a873045c3624c3450798/photos/adult-puppy/`

This keeps the approved image set fixed even if the preview branch later receives another commit. **No merge into `main` or GitHub Pages update is required for this T123 version.**

All existing matching overrides and parent-page integrations remain byte-for-byte unchanged: cat and ownership guidance, result sharing, EN/RU/ZH routes, rhythm adaptation, and iframe resizing/scrolling. The original photograph dictionary remains available for archive attribution. New images have localized AI illustration labels and do not inherit the old photographs' licenses.

The preview-gallery link is omitted from the Tilda-specific credits because that gallery is not published on the existing Pages site. The standalone preview gallery remains available in the preview branch and the separately supplied review file.

## Activation and rollback

The short files provide separate initial languages for the English, Russian, and Chinese pages. The earlier complete block remains an alternative that detects the existing parent routes `/`, `/ru`, and `/zh`. Prepare and preview all three corresponding Tilda blocks before any publication. Saving these repository files does not update Tilda.

Before publication, inspect the actual Tilda page with the new block for loading, the home example, expanded primary and alternative cards, language switching, shared results, and iframe height on desktop/mobile. Browser access to the Tilda editor was unavailable during this preparation, so that inspection remains pending.

To roll back the Tilda change, restore the complete backup block. Existing repository images and `main` do not need to be restored because this preparation leaves them unchanged. If the existing direct-app fallback is used, it opens the unchanged Pages app with its original images.

## Verification

Both original and replacement outer loaders and iframe script chains were executed with inert DOM/API stubs. Eight matching scenarios retained identical IDs, rankings, scores, exclusions, and counts. All 426 profile/language renderer combinations produced the expected pinned WebP URL and localized alt text. Existing inline blocks, external resource URLs, script ordering, parent sharing, and language transitions were checked.

The explicit-language loader also passed 21 local cases: normal, opposite-language and temporary paths; valid and malformed shared links; language changes; history navigation; duplicate loading; and preservation of answers and the original parent URL during initialization. After accounting for the two locale initialization changes, generated iframe content matches the previously verified full T123, including matching code, image mappings, CSS, markup, and external URLs.

This programmatic check does not replace a browser layout or network check of the exact Tilda block. The earlier standalone image preview was separately reviewed, but no claim is made that this newly prepared block has been deployed or visually inspected in Tilda.
