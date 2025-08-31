// Returns ID in ascending order (1, 2, 3, etc.)
export const sortById = (a, b) => {
  return a.frontmatter.id - b.frontmatter.id 
}