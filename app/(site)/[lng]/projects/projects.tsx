import Link from "next/link";
import { Eye } from "lucide-react";
import { Card } from "@/app/components/Card";
import { PortableText } from "@portabletext/react";
import { Article } from "./article";
import { TFunction } from "i18next";
import { Project } from "@/types/Project";

interface Props {
  allProjects: Project[];
  views: Record<string, number>;
  lng: string;
  t: TFunction;
}

const Projects: React.FC<Props> = ({ allProjects, views, lng, t }) => {
  // featured
  const featuredProjects = allProjects.filter((p) => p.featured === true);

  const mainProject =
    featuredProjects.find((p) => p.main === true) || featuredProjects[0];

  // non featured
  const otherProjects = allProjects.filter(
    (p) => !featuredProjects.includes(p)
  );

  return (
    <>
      {featuredProjects.length > 1 && (
        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <Link href={`/${lng}/projects/${mainProject.slug}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="drop-shadow-orange text-xs text-neutral-200 duration-1000 group-hover:border-neutral-200 group-hover:text-white">
                    {mainProject.date ? (
                      <time dateTime={new Date(mainProject.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(mainProject.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-neutral-500">
                    <Eye className="h-4 w-4" />{" "}
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(views[mainProject.slug] ?? 0)}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="title-gradient my-4 font-display text-xl font-bold duration-1000 group-hover:text-neutral-400 lg:text-3xl"
                >
                  {mainProject.name}
                </h2>
                <div className="mt-4 leading-8 text-neutral-400 duration-150 group-hover:text-neutral-300 lg:pb-10">
                  <PortableText
                    value={
                      lng === "en"
                        ? mainProject.content.en
                        : mainProject.content.pt
                    }
                  />
                </div>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-neutral-400 hover:text-white lg:block">
                    {t("projects.readMore")}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {featuredProjects
              .filter((p) => p !== mainProject)
              .map((project) => (
                <Card key={project._id}>
                  <Article
                    project={project}
                    views={views[project.slug] ?? 0}
                    lng={lng}
                  />
                </Card>
              ))}
          </div>
        </div>
      )}

      <div className="hidden h-px w-full bg-neutral-800 md:block" />

      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {otherProjects
            .filter((_, i) => i % 3 === 0)
            .map((project) => (
              <Card key={project.slug}>
                <Article
                  project={project}
                  views={views[project.slug] ?? 0}
                  lng={lng}
                />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {otherProjects
            .filter((_, i) => i % 3 === 1)
            .map((project) => (
              <Card key={project.slug}>
                <Article
                  project={project}
                  views={views[project.slug] ?? 0}
                  lng={lng}
                />
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {otherProjects
            .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <Card key={project.slug}>
                <Article
                  project={project}
                  views={views[project.slug] ?? 0}
                  lng={lng}
                />
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
