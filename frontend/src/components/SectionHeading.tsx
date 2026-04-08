interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5447]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold text-[#7a5447] md:text-4xl">{title}</h2>

      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#fcedd6]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;