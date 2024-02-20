import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Maintenance = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-slate-100">
        <Card className="mx-10 lg:w-1/2">
          <CardHeader className="flex flex-row space-x-2">
            <img className="max-h-16 max-w-16" src="src/assets/avatar.png" />
            <div className="flex flex-col">
              <CardTitle className="text-3xl">Jolson Cruz</CardTitle>
              <CardDescription className="font-mono">
                Software Developer | 📍 MTL, QC
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-black">Bonjour, Hi ! 👋🏻</h1>
            <p className="pt-4">
              Je suis toujours en train de créer mon propre chef-d'œuvre visuel.
              Revenez plus tard ou suivez-moi sur mes réseaux sociaux pour être
              informé lorsque ce sera prêt pour le monde ! 🌍
            </p>
            <p className="pt-3 text-sm font-light">
              I am still in the process of creating my very own visual
              masterpiece. Please check back later or follow me on my social
              media channels to get notified when it's ready for the world! 🌍
            </p>
          </CardContent>
          <CardFooter className="border-t pt-4 text-sm text-zinc-500">
            <div className="w-full lg:flex lg:justify-between">
              <div className="sm:pb space-x-4">
                <a
                  href="https://x.com/jolsoncruz"
                  className="hover:underline hover:decoration-zinc-400 hover:underline-offset-8"
                >
                  X
                </a>
                <a
                  href="https://instagram.com/jolsoncruz"
                  className="hover:underline hover:decoration-zinc-400 hover:underline-offset-8"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/in/jolsoncruz"
                  className="hover:underline hover:decoration-zinc-400 hover:underline-offset-8"
                >
                  LinkedIn
                </a>
              </div>
              <span>Copyright 2024 - jcz.dev</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Maintenance;
