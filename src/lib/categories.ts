// Portfolio categories. A project lists one or more of these ids in its
// `categories` field; the first one is its primary category.
export const CATEGORIES = [
  { id: 'live', label: 'Corporate Events & Live Productions', short: 'Live Productions' },
  { id: 'lighting', label: 'Lighting Design & Programming', short: 'Lighting Design' },
  { id: 'video', label: 'Video Walls & Projection', short: 'Video & Projection' },
  { id: 'holiday', label: 'Holiday Lighting & Animated Light Shows', short: 'Holiday Lighting' },
  { id: 'architectural', label: 'Architectural Lighting', short: 'Architectural' },
  { id: 'community', label: 'Community Events & Entertainment', short: 'Community Events' },
  { id: 'weddings', label: 'Weddings & Private Events', short: 'Weddings' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id) as [CategoryId, ...CategoryId[]];

export function categoryLabel(id: CategoryId, form: 'label' | 'short' = 'label') {
  return CATEGORIES.find((c) => c.id === id)?.[form] ?? id;
}
