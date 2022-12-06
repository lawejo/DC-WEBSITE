import GoogleMaps from "./GoogleMaps";
export default function FindUs() {
  return (
    <div>
      <h2>Find Us</h2>
      <p>
        Vi er som udgangspunkt til stede med vores &apos;mobile butik&apos; i
        Valbyparken 3-4 dage om ugen, herunder de fleste weekender (når vi ikke
        er ude til turneringer). Vi er derudover næsten altid repræsenteret med
        butikken til turneringer på Sjælland. Derudover kan vores Proshop på
        Greve-banen ved Tune Kursuscenter besøges, hvor du kan se hele vores
        lager.
      </p>

      <GoogleMaps
        titel={"Pro Shoppen"}
        adresse={"Grevevej 20, 2670 Greve"}
        hours={"Mon-Fri: 10-17"}
        lat={55.59803972765034}
        lng={12.217857857672051}
      />

      <GoogleMaps
        titel={"Mobile butikken - Valbyparken"}
        adresse={"Hammelstrupvej 98, 2450 København"}
        hours={"Mon-Fri: 10-17, Wed & Fri: 13-17"}
        lat={55.64118851317173}
        lng={12.519380018285755}
      />
    </div>
  ); /* 55.64118851317173, 12.519380018285755 */
}
