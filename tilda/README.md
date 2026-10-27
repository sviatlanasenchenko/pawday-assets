# Pawday T123: adult dog and puppy illustrations

Status: the EN, RU and ZH short blocks have been saved in the corresponding Tilda drafts. After reopening/reloading the pages, their saved record code matched the short files byte for byte. Local VM checks and bounded isolated browser runtime QA passed. **No page has been published; application execution inside a published Tilda page is NOT_TESTED.** The final preflight confirmed `main` unchanged at `a19ebed1f3da8c9bec51cb0a73354a5bf691c699`.

## Files

- `Pawday_T123_EN_2026-10-27.txt`: short English block, 11 lines, with `data-lang="en"`.
- `Pawday_T123_RU_2026-10-27.txt`: short Russian block, 11 lines, with `data-lang="ru"`.
- `Pawday_T123_ZH_2026-10-27.txt`: short Simplified Chinese block, 11 lines, with `data-lang="zh"`.
- `pawday-t123-loader.js`: shared external loader used by the three short blocks.
- `language-variants-verification.json`: locale defaults, shared links, persisted draft hashes, and verification boundaries for the short blocks.
- `runtime-verification.json`: isolated browser results, prior image/regression evidence, and remaining limits.
- `runtime-preview/`: local-only static test pages for EN, RU, ZH and a three-column mobile comparison.
- `Pawday_T123_adult_puppy_2026-10-27.txt`: complete replacement for the existing T123 block. Copy the entire contents as code; replace the old block contents rather than append a second loader.
- `Pawday_T123_before_adult_puppy_2026-10-27.html`: byte-for-byte backup of the T123 code supplied by the owner.
- `adult-puppy-verification.json`: exact comparisons and verification boundaries.

## Three short language blocks

Use the EN file on the English page, RU on the Russian page, and ZH on the Chinese page. Replace the existing T123 contents with the entire corresponding short file. Use one Pawday block per page; do not append it alongside the old block or combine the three files on one page.

The language attribute selects the initial language even when a Tilda draft has a temporary URL. Initial loading does not rewrite that URL. The in-app language switch still works and preserves answers. A valid shared-result link retains the language saved in that link. Loading, error, and JavaScript-disabled messages are localized in each short file.

The short blocks reference the loader at immutable commit `7d795f5d2ad0a2e9379ee059dcad230118427e8e` through jsDelivr, with SHA-384 integrity validation. The exact code remains in the preview branch and now matches the three saved Tilda draft blocks. In a separate managed runtime preview, the pinned loader with SRI executed. Independent EN/RU/ZH starts, the complete quiz, localized results, shared-result restoration, illustration disclosures and responsive iframe behavior passed the bounded checks recorded in `runtime-verification.json`. This does not verify execution inside Tilda.

## Saved Tilda drafts

| Language | Page ID | T123 record ID | Saved snippet |
| --- | --- | --- | --- |
| EN | `271109903` | `4299173503` | `Pawday_T123_EN_2026-10-27.txt` |
| RU | `271283103` | `4299716103` | `Pawday_T123_RU_2026-10-27.txt` |
| ZH | `271286403` | `4299728903` | `Pawday_T123_ZH_2026-10-27.txt` |

All three saved code blocks matched their corresponding short files exactly on editor readback and again from saved record code after reopening/reloading, confirming persistence. The original block on each page was 112,245 bytes, with SHA-256 `43c7e3c4fd104790270508ddc3c6d3db65f603df18308d83dbc28a9e84608dbb`, matching the complete repository backup. Individual saved snippet hashes and evidence boundaries are recorded in `language-variants-verification.json`.

## How this version loads resources

The original `ASSET_BASE` remains `https://sviatlanasenchenko.github.io/pawday-assets/`. Existing styles, data, scripts, legacy photos, and the direct-app fallback keep their existing addresses.

The new illustration renderer and credit presentation are embedded in the T123 override table. The renderer runs immediately after `database-v6-adapter.js`. Each of the 142 images uses its exact stable profile ID and an immutable URL under:

`https://raw.githubusercontent.com/sviatlanasenchenko/pawday-assets/8c2e3bb0f47d2bc12353a873045c3624c3450798/photos/adult-puppy/`

This keeps the approved image set fixed even if the preview branch later receives another commit. **No merge into `main` or GitHub Pages update is required for this T123 version.**

Existing matching overrides, cat and ownership guidance, result sharing, rhythm adaptation, and iframe resizing/scrolling remain byte-for-byte unchanged. The short loader adds the documented explicit-language seed and late locale initialization override; subsequent language switching and route behavior are preserved. The original photograph dictionary remains available for archive attribution. New images have localized AI illustration labels and do not inherit the old photographs' licenses.

The preview-gallery link is omitted from the Tilda-specific credits because that gallery is not published on the existing Pages site. The standalone preview gallery remains available in the preview branch and the separately supplied review file.

## Activation and rollback

The short files provide separate initial languages for the English, Russian, and Chinese pages. The earlier complete block remains an alternative that detects the existing parent routes `/`, `/ru`, and `/zh`. The short blocks have now been saved to the three corresponding Tilda drafts; saving repository files alone does not update Tilda. Publication is prohibited in the current task.

Browser access to the Tilda editor succeeded, but its preview displays a T123 placeholder rather than executing the application. The exact snippets passed the separate runtime checks summarized below. Application execution inside a published Tilda page remains NOT_TESTED because publication is prohibited.

To roll back the Tilda change, restore the complete backup block. Existing repository images and `main` do not need to be restored because this preparation leaves them unchanged. If the existing direct-app fallback is used, it opens the unchanged Pages app with its original images.

## Verification

Both original and replacement outer loaders and iframe script chains were executed with inert DOM/API stubs. Eight matching scenarios retained identical IDs, rankings, scores, exclusions, and counts. All 426 profile/language renderer combinations produced the expected pinned WebP URL and localized alt text. Existing inline blocks, external resource URLs, script ordering, parent sharing, and language transitions were checked.

The explicit-language loader also passed 21 local cases: normal, opposite-language and temporary paths; valid and malformed shared links; language changes; history navigation; duplicate loading; and preservation of answers and the original parent URL during initialization. After accounting for the two locale initialization changes, generated iframe content matches the previously verified full T123, including matching code, image mappings, CSS, markup, and external URLs.

`language-variants-verification.json` records the saved draft hashes and persistence verification; `runtime-verification.json` records the bounded browser observations and their limits. `adult-puppy-verification.json` remains a historical preparation snapshot for the full T123 candidate, so its editor-state flag describes that earlier check. No page has been published, and application execution inside Tilda has not been verified.

## Isolated runtime results

The exact short snippets were served by the managed preview, without publishing Tilda. All three languages started correctly. The home poodle and all three result images completed loading at a natural width of 1024 pixels. Final mobile measurements were `clientWidth = scrollWidth = 390` for EN/RU/ZH, with page heights 1773/1824/1707 pixels and no horizontal overflow. The mobile comparison fixture height is 2200 pixels; this is a test-wrapper setting, not an application change.

One full 13-question flow returned `cavalier-pdsa` 95, `havanese` 91 and `coton-de-tulear` 91. Switching RU → EN → ZH → RU at question 12 retained the question, selected “park” answer and 34/142 remaining profiles. Results retained the same IDs, scores and images in all three languages. Primary and alternative details expanded, iframe height grew and shrank with content, and a language rerender reset details to the existing closed state.

The share UI generated a ZH hash; a new tab restored the same ZH results. Subsequent RU and EN switches retained IDs/scores and localized names and AI labels. Illustration credits were inspected in ZH/RU/EN, including the AI explanation and archived author/license disclosure. No application-origin console error was observed; a separate chrome-extension metadata error was present.

Prior evidence covers the full image set: 142 visual overviews in the local `qa-archive/visual-audit.json`, 142 exact-ID archive/image checks in `qa-code/verify-report.json`, 142 successful gallery image loads in [`preview-review.json`](../preview-review.json), and preservation of 162 legacy photos in `qa-code/remote-tree-check.json`. Eight exact matching regression scenarios and all 426 ID/language URL/alt combinations passed before this browser run. These earlier full-set checks are separate from the current browser image sample. The visual overview is not breed-standard certification; physical phones and published Tilda execution were not tested.

For local-only reproduction, run `sites-preview start <absolute-path-to-tilda/runtime-preview>` and open the exact URL returned by the managed CLI. The routes are `/`, `/ru/`, `/zh/`, and `/mobile/`. The static preview configuration has no Site identity and requires no publication. Screenshots and raw local QA evidence remain outside the repository commit.
