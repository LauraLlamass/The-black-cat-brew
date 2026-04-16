interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mt-5 max-w-md text-base leading-8 text-primary bg-brand-white p-4 rounded-xl">

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