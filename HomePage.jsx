import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">123 Viva l'Algérie (123VALG)</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Avec 123 Viva l'Algérie, les utilisateurs peuvent participer à des initiatives locales,
          financer des projets innovants et échanger des biens et services dans un écosystème
          décentralisé. Notre mission est de créer des opportunités économiques tout en renforçant
          la confiance et la transparence dans toutes les transactions. Rejoignez-nous dans cette
          aventure passionnante et contribuons ensemble à l'avenir numérique de l'Algérie !
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Informations Clés</h2>
        <ul className="list-disc list-inside text-lg">
          <li><strong>Nom du Token :</strong> 123 Viva l'Algérie</li>
          <li><strong>Symbole :</strong> 123VALG</li>
          <li><strong>Offre Totale :</strong> 1 000 000 000</li>
          <li><strong>Contrat :</strong> 59zjmWjvBMaaRX6RJX4bXiPjiW4UXqyS7YzwNaHjpump</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md border">
        <h2 className="text-2xl font-semibold mb-2">Objectifs & Roadmap</h2>
        <ul className="list-decimal list-inside space-y-1 text-lg">
          <li>Lancement du site vitrine et communication initiale</li>
          <li>Organisation d'un airdrop communautaire</li>
          <li>Listing sur CoinGecko et CoinMarketCap</li>
          <li>Création de partenariats avec des projets algériens</li>
          <li>Lancement d'une plateforme d'échange décentralisée locale</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-600 pt-12">
        &copy; {new Date().getFullYear()} 123VALG - Tous droits réservés.
      </footer>
    </main>
  );
}