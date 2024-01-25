import React from "react"
import ContentLoader from "react-content-loader"

const ProdSkeleton: React.FC = () => (
  <ContentLoader
  style={{ margin: '0 auto' }}
  speed={1}
  max-width={1920}
  max-height={400}
  viewBox="0 0 600 460"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  // {...props}
  >
  <rect x="70" y="60" rx="5" ry="5" width="250" height="203" /> 
  <rect x="345" y="60" rx="5" ry="5" width="140" height="13" /> 
  <rect x="535" y="60" rx="5" ry="5" width="20" height="13" /> 
  <rect x="345" y="94" rx="5" ry="5" width="210" height="95" /> 
  <rect x="345" y="207" rx="5" ry="5" width="210" height="24" />
  <rect x="345" y="237" rx="5" ry="5" width="160" height="24" />
  </ContentLoader>
)

export default ProdSkeleton

