export default function Home() {
  return (
    <section>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Perfumería Premium — Envío Gratis a Todo México
      </h1>

      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Descubre nuestra colección exclusiva de perfumes originales para dama y caballero.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {/* Aquí irán los productos */}
        <div
          style={{
            padding: "2rem",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            textAlign: "center",
            background: "white",
          }}
        >
          <h2>Aquí irán los perfumes</h2>
          <p>Después agregaremos imágenes, precios y botón de pago.</p>
        </div>
      </div>
    </section>
  );
}
