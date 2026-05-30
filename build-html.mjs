// Claude generated. Converts results.md -> results.html with print styling for PDF export.
import { marked } from 'marked';
import { readFile, writeFile } from 'fs/promises';

const src = await readFile('results.md', 'utf-8');
// Drop the leading authorship marker line so it doesn't render in the PDF.
const md = src.replace(/^Claude generated[^\n]*\n+/, '');

marked.setOptions({ gfm: true, breaks: false });
const body = marked.parse(md);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  :root { --ink:#1a1a1a; --muted:#555; --rule:#d9d9d9; --accent:#0b4f6c; --thead:#f2f4f5; }
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
    color: var(--ink); font-size: 10.5pt; line-height: 1.5;
    max-width: 760px; margin: 0 auto; padding: 0;
  }
  h1 { font-size: 21pt; line-height: 1.2; margin: 0 0 4px; letter-spacing: -0.2px; }
  h2 { font-size: 14pt; margin: 22px 0 8px; padding-bottom: 4px; border-bottom: 2px solid var(--rule); }
  h3 { font-size: 11.5pt; margin: 16px 0 4px; color: var(--accent); }
  p { margin: 6px 0; }
  ul { margin: 6px 0; padding-left: 20px; }
  li { margin: 3px 0; }
  strong { font-weight: 650; }
  hr { border: none; border-top: 1px solid var(--rule); margin: 18px 0; }
  table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 9.5pt; }
  th, td { border: 1px solid var(--rule); padding: 5px 8px; text-align: left; vertical-align: top; }
  thead th { background: var(--thead); font-weight: 650; }
  tbody tr:nth-child(even) { background: #fafbfb; }
  td:nth-child(n+2) { white-space: normal; }
  h2, h3 { break-after: avoid; }
  table, tr { break-inside: avoid; }
</style>
</head>
<body>
${body}
</body>
</html>`;

await writeFile('results.html', html, 'utf-8');
console.log('wrote results.html');
