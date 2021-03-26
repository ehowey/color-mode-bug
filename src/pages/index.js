/** @jsx jsx */
import { jsx, Themed, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Layout } from "gatsby-theme-catalyst-core"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "catalyst-site-icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `)
  const [mode] = useColorMode()
  const isDark = mode === "dark"

  return (
    <Layout>
      <Themed.h1>Color Mode Bug Reproduction</Themed.h1>
      <Themed.p sx={{ color: isDark ? "tomato" : "cornflowerblue" }}>
        Text is blue in light mode, text is red in dark mode.
      </Themed.p>
      <GatsbyImage
        image={data.image.childImageSharp.gatsbyImageData}
        sx={{
          width: "300px",
          filter: isDark ? "invert(1)" : "none",
        }}
        alt="Gatsby Theme Catalyst"
        imgStyle={{ objectFit: "contain" }}
      />
    </Layout>
  )
}

export default HomePage
