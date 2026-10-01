export default function Footer() {
  return (
    <footer className="mt-12 bg-ink pb-20 text-rice/80 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-rice">Wok &amp; Roll</p>
          <p>Wok-fresh in 10 minutes.</p>
        </div>
        <div>
          <p className="font-semibold text-rice">Hours</p>
          <p>Every day, 5 PM – 11 PM</p>
        </div>
        <div>
          <p className="font-semibold text-rice">Find us</p>
          <p>Opposite City Mall, Main Road</p>
        </div>
      </div>
    </footer>
  );
}
