export const makeSkeletons = length =>
  Array.from({ length }, (x, n) => ({
    name: `skeleton ${n}`,
    isSkeleton: true
  }));
