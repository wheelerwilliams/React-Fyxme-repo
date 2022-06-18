import React from 'react';
import { Helmet } from "react-helmet";
 
class MetaTags extends React.Component {
  render() {
    return (
      <Helmet>
        <title>FYXME Mobile Auto Body Shop - Bumpers Repairs - Free Estimate</title>
        <meta name="description" content="Expert OC & Los Angeles bumper repair or replacement, car scratch paint repair, dent removal and minor collision damage. Most repairs completed in under 4 hours." />
        <meta itemprop="name" content="FYXME Mobile Auto Body Shop - Bumpers Repairs - Free Estimate"/>
        <meta itemprop="description" content="Expert OC & Los Angeles bumper repair or replacement, car scratch
          paint repair, dent removal and minor collision damage. Most repairs
          completed in under 4 hours."/>
        <meta itemprop="image" content="https://www.fyxme.com/images/b1-low.jpg" />

        <meta property="og:url" content="https://www.fyxme.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FYXME Mobile Auto Body Shop - Bumpers Repairs - Free Estimate" />
        <meta property="og:description" content="Expert OC & Los Angeles bumper repair or replacement, car scratch
          paint repair, dent removal and minor collision damage. Most repairs
          completed in under 4 hours." />
        <meta property="og:image" content="https://www.fyxme.com/images/b1-low.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FYXME Mobile Auto Body Shop - Bumpers Repairs - Free Estimate" />
        <meta name="twitter:description" content="Expert OC & Los Angeles bumper repair or replacement, car scratch
          paint repair, dent removal and minor collision damage. Most repairs
          completed in under 4 hours." />
        <meta name="twitter:image" content="https://www.fyxme.com/images/b1-low.jpg" />
      </Helmet>
      )
  }
}

export default MetaTags;