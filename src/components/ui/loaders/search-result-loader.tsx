// import ContentLoader from 'react-content-loader';

// const SearchResultLoader = (props: any) => (
//   <ContentLoader
//     speed={2}
//     width={400}
//     height={26}
//     viewBox="0 0 400 26"
//     backgroundColor="#F3F6FA"
//     foregroundColor="#E7ECF3"
//     className="w-full h-auto rounded-md overflow-hidden"
//     {...props}
//   >
//     <rect x="0" y="0" rx="3" ry="3" width="26" height="26" />
//     <rect x="32" y="12" rx="2" ry="2" width="100" height="4" />
//   </ContentLoader>
// );

// export default SearchResultLoader;



import ContentLoader from 'react-content-loader';

const SearchResultLoader = (props: any) => (
  <ContentLoader
    speed={2}
    // width={400}
    height={205}
    // viewBox="0 0 400 176"
    backgroundColor="#F3F6FA"
    foregroundColor="#E7ECF3"
    className="w-full h-auto rounded-md overflow-hidden"
    {...props}
  >
    {/* Главный прямоугольник */}
    <rect x="0" y="0" rx="5" ry="5" width="179" height="120" />

    {/* Линия под прямоугольником */}
    <rect x="0" y="135" rx="2" ry="2" width="167" height="21" />

    {/* Еще одна линия ниже */}
    <rect x="0" y="160" rx="5" ry="5" width="67" height="20" />
  </ContentLoader>
);

export default SearchResultLoader;
