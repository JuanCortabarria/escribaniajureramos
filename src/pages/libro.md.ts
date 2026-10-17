import { book } from '../config/book';
import { site } from '../config/site';

export function GET() {
  const text = `# ${book.title}\n\nAutora: ${book.author}.\n\n## Una parte de mi recorrido\n\n${book.story.join('\n\n')}\n\nEditorial: ${book.publisher}.\n\nPrólogo de ${book.foreword}.\n\n[Volver a la biografía](${site.url}/#escribana)\n`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
