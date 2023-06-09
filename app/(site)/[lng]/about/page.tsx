import { useTranslation } from "@/app/i18n";
import { PageLayout } from "../../../components/PageLayout";
import { PageProps } from "@/types/PageProps";
import Navigation from "@/app/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { tools } from "./tools";

const Page = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <Navigation lng={lng} pages={["home", "projects", "contact"]} />
      <PageLayout>
        {/* title */}
        <h2 className="title-gradient text-3xl font-bold tracking-tight sm:text-4xl">
          {t("about.title")}
        </h2>

        {/* division */}
        <div className="mb-4 mt-2 h-px w-full bg-neutral-800" />

        {/* content */}
        <p className=" text-neutral-400">{t("about.description")}</p>

        <div className="my-6 flex items-center justify-center gap-4">
          {tools.map((t) => (
            <Link
              href={t.href}
              key={t.href}
              target="_blank"
              className="duration-500 hover:scale-110 hover:text-primary"
            >
              <Image src={t.icon} alt={t.alt} width={30} height={30} />
            </Link>
          ))}
        </div>
      </PageLayout>
    </>
  );
};
export default Page;
