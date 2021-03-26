/** @jsx jsx */
import { jsx, Themed, useColorMode } from "theme-ui"
import { Layout } from "gatsby-theme-catalyst-core"

const HomePage = () => {
  const [mode] = useColorMode()

  const isDark = mode === "dark"

  return (
    <Layout>
      <Themed.h1>Color Mode Bug Reproduction</Themed.h1>
      <Themed.p sx={{ color: isDark ? "tomato" : "cornflowerblue" }}>
        Text is blue in light mode, text is red in dark mode.
      </Themed.p>
    </Layout>
  )
}

export default HomePage
