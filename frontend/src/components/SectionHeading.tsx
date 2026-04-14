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
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold text-primary md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-primary/70">
          {description}
        </p>
      ) : null}

    </div>
  );
}

export default SectionHeading;