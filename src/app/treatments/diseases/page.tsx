import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { diseaseCategories } from "@/lib/diseases-list";

export const metadata: Metadata = {
    title: "Diseases",
    description: "Explore the various diseases and their treatments offered at Shri Vishvasuta Ayurved & Panchkarma Clinic.",
};


export default function DiseasesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
                        Diseases
                    </h1>
                    <p className="mt-6 leading-relaxed text-foreground/80">
                        Explore the various diseases and their treatments offered at Shri Vishvasuta Ayurved & Panchkarma Clinic.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {diseaseCategories.map((category, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc space-y-2 pl-5">
                                    {category.diseases.map((disease, i) => (
                                        <li key={i}>{disease}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* <div className="mt-16 text-center">
                    <h2 className="font-headline text-2xl font-bold text-primary">
                        🌿 Shri Vishvasut Ayurved & Panchkarma Clinic, Nagpur
                    </h2>
                    <p className="mt-2 text-lg">
                        Complete Ayurvedic & Panchakarma Care | Root-cause based treatment
                    </p>
                    <div className="mt-8">
                        <p className="font-bold">📍 Clinic Address:</p>
                        <p>
                            Shri Vishvasut Ayurved & Panchkarma Clinic
                            <br />
                            Opp. Domino’s, Nasare Sabhagruha, Hudkeshwar Road, Nagpur – 440034
                        </p>
                    </div>
                    <div className="mt-4">
                        <p className="font-bold">📞 Contact:</p>
                        <p>9975797624 | 9270220033</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
