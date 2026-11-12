import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All published projects, in display order. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Projects sharing the most categories with `project`, best match first. */
export function relatedProjects(project: Project, all: Project[], limit = 3): Project[] {
  const cats = new Set(project.data.categories);
  return all
    .filter((p) => p.id !== project.id)
    .map((p) => ({
      p,
      score:
        p.data.categories.filter((c) => cats.has(c)).length * 2 +
        (p.data.categories[0] === project.data.categories[0] ? 1 : 0) -
        (p.data.placeholder ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.p.data.order - b.p.data.order)
    .slice(0, limit)
    .map(({ p }) => p);
}
