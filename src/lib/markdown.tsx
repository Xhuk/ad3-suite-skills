import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mt-10 text-3xl font-medium tracking-tight text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-9 text-xl font-medium tracking-tight text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-7 text-lg font-medium text-foreground">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-[15px] leading-7 text-foreground/80">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-foreground/80">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-[15px] leading-7 text-foreground/80">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-0.5">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-2 border-primary/70 pl-4 text-foreground/75 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:decoration-foreground"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  code: ({ className, children }) => {
    const isBlock = Boolean(className);
    if (isBlock) {
      return (
        <code className="font-mono text-[13px] leading-6 text-foreground">
          {children}
        </code>
      );
    }

    return (
      <code className="rounded-md bg-foreground/6 px-1.5 py-0.5 font-mono text-[13px] text-foreground">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mt-4 overflow-x-auto rounded-xl bg-foreground/5 px-4 py-3 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="mt-4 overflow-x-auto rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
      <table className="w-full min-w-[36rem] border-collapse text-left text-[13px]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-foreground/4 text-foreground/70">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 font-medium">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 align-top text-foreground/80">{children}</td>
  ),
  tr: ({ children }) => (
    <tr className="border-t border-foreground/6">{children}</tr>
  ),
  hr: () => <hr className="my-8 border-foreground/8" />,
  strong: ({ children }) => (
    <strong className="font-medium text-foreground">{children}</strong>
  ),
};

export function SkillMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
