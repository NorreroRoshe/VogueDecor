export const COUNT_PER_PAGE = 20;
export const MAX_PAGE_NUMBER = 5;

export const renderPageNumbers = (
  currentPage: number,
  count: number,
  maxPages: number
) => {
  let pages: (number | "...")[] = [];

  //Если не требуется отображать ....
  if (maxPages <= MAX_PAGE_NUMBER) {
    for (let i = 1; i <= maxPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  //В случае если мы где-то в глубине пагинации
  const visiblePageCount = MAX_PAGE_NUMBER - 2;
  let startPage = Math.max(
    1,
    currentPage - Math.floor(visiblePageCount / 2) - 1
  );
  let endPage = startPage + visiblePageCount;

  if (startPage === 1) {
    const arr: (number | "...")[] = Array.from(
      Array(MAX_PAGE_NUMBER),
      (_, index) => index + 1
    );
    return arr.concat(["...", maxPages]);
  }

  if (startPage + MAX_PAGE_NUMBER > maxPages) {
    const arr: (number | "...")[] = Array.from(
      Array(MAX_PAGE_NUMBER),
      (_, index) => maxPages - index
    );
    return [1, "...", ...arr.reverse()];
  }

  if (endPage > maxPages) {
    endPage = maxPages;
    startPage = Math.max(1, endPage - visiblePageCount + 1);
  }

  pages.push(1);
  if (startPage > 1) {
    pages.push("...");
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i + 1);
    if (i === endPage && pages.includes("...") && endPage + 1 !== maxPages - 1)
      pages.pop();
  }

  if (endPage < maxPages - 2) {
    pages.push("...");
  }
  if (!pages.includes(maxPages)) {
    pages.push(maxPages);
  }

  return pages;
};
