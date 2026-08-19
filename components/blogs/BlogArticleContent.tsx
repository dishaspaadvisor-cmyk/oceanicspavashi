interface BlogArticleContentProps {
  content: string;
}

export default function BlogArticleContent({
  content,
}: BlogArticleContentProps) {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div
      className="
        prose
        prose-neutral
        max-w-none
        prose-headings:font-serif
        prose-headings:font-normal
        prose-headings:text-[#24302F]
        prose-h2:mb-3
        prose-h2:mt-9
        prose-h2:text-2xl
        prose-h3:mb-2
        prose-h3:mt-7
        prose-h3:text-xl
        prose-p:my-4
        prose-p:text-[15px]
        prose-p:leading-8
        prose-p:text-[#687371]
        prose-strong:text-[#394441]
        prose-a:font-semibold
        prose-a:text-[#175C5A]
        prose-li:text-[#687371]
      "
    >
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return <h2 key={index}>{block.replace(/^##\s+/, "")}</h2>;
        }

        if (block.startsWith("### ")) {
          return <h3 key={index}>{block.replace(/^###\s+/, "")}</h3>;
        }

        if (block.startsWith("- ")) {
          const items = block
            .split("\n")
            .map((item) => item.replace(/^-\s+/, ""));

          return (
            <ul key={index}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block}</p>;
      })}
    </div>
  );
}
