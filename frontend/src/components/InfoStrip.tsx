import enProceso from "../assets/enProceso.png";
import granos from "../assets/fondoGranos.png";

function InfoStrip() {
  return (
    <section
      className="py-8"
      style={{
        backgroundImage: `url(${granos})`,
        backgroundRepeat: "repeat",
        backgroundSize: "280px",
        backgroundPosition: "center",
      }}
    >      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-[2rem] bg-[#fcedd6] p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c895e]">
            Our idea
          </p>

          <h2 className="max-w-sm text-4xl font-bold leading-tight text-[#7a5447]">
            Sweet moments, cozy coffee and personal favorites
          </h2>

          <p className="mt-5 max-w-md text-sm leading-8 text-[#7a5447]">
            The Black Cat Brew nace como una guía visual para descubrir cafés,
            explorar orígenes y guardar una selección personal con una estética
            cálida, suave y juvenil.
          </p>

          <button className="mt-6 rounded-full border border-[#7a5447] px-5 py-3 text-sm font-semibold text-[#7a5447] transition hover:bg-[#7a5447] hover:text-[#ffffff]">
            Read more
          </button>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#fcedd6] p-4">
          <img
            src={enProceso}
            alt="Bloque visual de café"
            className="h-full min-h-[280px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoStrip;