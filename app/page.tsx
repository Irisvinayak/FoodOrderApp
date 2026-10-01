import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16 text-center">
      <p className="font-display text-5xl text-lantern md:text-7xl">Wok-fresh in 10 min</p>
      <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
        Hakka noodles, momos and fried rice, tossed hot to order.
      </p>
      <Link
        href="/menu"
        className="mt-8 inline-block rounded-full bg-lantern px-8 py-3 font-semibold text-rice shadow-lg transition hover:bg-lantern-dark"
      >
        Order now
      </Link>
    </section>
  );
}
