
import Image from "next/image";
import { NavLink } from "../layout/nav-link";
import { Button } from "../ui/button";

const specializations = [
  {
    name: "Joint and spine disorders",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczPMBkKVGbJiMPY9ezH4lKnhsbFMHag8KLG5tsy3gqDMBCe_gkYtDwgQiAcPgQ0gM0Ng-pMXuaTYRRmxZU7qGZAEPzGf_2l71rYA1Bec1VldKHDf2vzZ6cqmP-QmyM1BBce4gTZPlTOuSkY5ySP8o3Db=w600-h600-s-no-gm?authuser=0",
  },
  {
    name: "Stress, Anxiety & Insomnia",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczMsA2VsL718JjMlISbKN1c1sXwWf9wv2lyXO6YurMEiYQLwfUNocJN4anT6Lwx3MDy2XwsoY1zp-W0sddjxWYUsyUvGdW_0G86jMsG97TjMTa9tt_zipZ3Bi1suxerUNEm-WkH78-QThJCQu4MPrXAd=w600-h600-s-no-gm?authuser=0",
  },
  {
    name: "Acidity & Gut issues",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczMPMIhp_Q7tKUoXu_cUDRzr0CTk6yHk0ppk58vTvj7q3nO-La7ux0cIzYWSFNg9AAyW57RBpvKwJItJmDdFemJg8ZyMfY65N3-3CoC83MODm8PusOeK7Qdu_RqSHaRNrVvpTjyB0D7UB0LZInUif-Ub=w600-h600-s-no-gm?authuser=0",
  },
  {
    name: "Skin & Hair",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczND--eZrolLee2XymtgwlHx0Di1lqC9vxmOPDhivrHly9iWpCNjeE7YzHm83a3-1trcT6ZKq-ga6xS_7PE16jPWA47cc3kiErtrKbngzXepv-YS5SWdk_N4VBDfYXhTtUaokJfD8WCeAREEqZiNO1X3=w598-h600-s-no-gm?authuser=0",
  },
  {
    name: "PCOD & Gynecological issues",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczNF2cDuf8Jc7X4iLUVzYYZ79JR_rGiZQZK1i4uEFoXOn6f2C91cLEnTLUL6cHdDJS761igxMEw0REWEtGmrgIlhZD4QYt1Ciz6qdSx9WbbozBxpABUPC_91V78T9Di5lSDYsGMLpsyj-gSRuL2mYeDH=w600-h600-s-no-gm?authuser=0",
  },
  {
    name: "Diabetes",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczOXBmfqCORB7e-WBDl3u0BBF1446qwfJ7E2xO9Tpgjie1km2GC6_vyGBAAHHW8QYTc1pY5nLsE48C5Z2igSSLOrFvS2fSlh_6y_r037mCq99L1tQ33UyUX5mQHbXgh6aN2oj_fKO9RrMGHeJwLO3R2g=w598-h600-s-no-gm?authuser=0",
  },
  {
    name: "Hypertension",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczPx50bPPeRxtQCVv1sXNfKwvf8V5V3W6I1MlBJ6a5KnhWhjdTP1Pkt863w4eQ2xeOyroMio6R884gQv-GYpwQxdDWpzQIaFbPn91yyRZWu2-GRUJprzsuVG6QWiVc01TJHGZumuaH-qTvJB8k0QjkuX=w600-h600-s-no-gm?authuser=0",
  },
  {
    name: "Thyroid",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczMupR_HO3bqGlwXx-dfDCO-1GqUmqtqQxwMHYRd1tPWPwbOnfJtDAzi0cDgsbjugE8IXcQLfI6wvteEr-BseIoDyZaci0m1g_EwMvLcZXfSxeZ2qxocedthOXoRWE6VWzBEvfsxt9CN3aXq-a6VZi9P=w598-h600-s-no-gm?authuser=0",
  },
  {
    name: "Male & Female Infertility",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczNaaG9Tkrz57J_CbQ6soKy_TltLx7vWyr9e3p4N8VV7KgCmh06m6UernaI2Zyl_cJj9RluKpch_-cvvEhmSBHTOaSF50RyBLJcVKSLg5njiCuIDA_BszgAwMFG3DN4eKBvtFD5zN-MvYjHLVPTJGkE8=w600-h600-s-no-gm?authuser=0",
  },
  {
    name: "Asthma & Respiratory Disorders",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczOSGPpm6QGN_K0nMIp99BD1SYnawTzfO2xzUXY90h-Btagtm2T15Mdut36HVQWTuAiKprA6cBZY_NmSa4-XCkrneSB8ic5ihfTyKx5XcZVnLHmJA6XnPEPvyWJiuPTJX-2yyIYHtcL4hvDHDOVwveKS=w600-h600-s-no-gm?authuser=0",
  },
  {
    name: "Liver Issues",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczMxPlo3IKjuXr99bEQ39kK7l3jkluO2iYz0nmM8Wwp3pStYaRPX1fHhelMTsTzeMsOXcNMhKEf_SBG-GDnT1ssly0oSyt5dRpkGi_kzCwxDEDB1DVC8xbi2XVJdZuGYrKfHU4V1jiCmuNcWnbTAvXm3=w600-h600-s-no-gm?authuser=0",
  },
];

export function Specialization() {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-10xl text-center">
        <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          Our Specialisation
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 scale-up-content-animation">
          {specializations.map((specialization) => (
            <div
              key={specialization.name}
              className="flex flex-col items-center"
            >
              <Image
                src={specialization.icon}
                alt={specialization.name}
                width={100}
                height={100}
              />
              <p className="mt-2 text-lg font-medium text-foreground/80">
                {specialization.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          asChild
          className="w-full sm:w-auto"
          style={{ borderRadius: "100px" }}
        >
          <NavLink
            openInNewTab={false}
            href={`/treatments/diseases`}
          >
            View all diseases
          </NavLink>
        </Button>
      </div>
    </section>
  );
}
