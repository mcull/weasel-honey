import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HelloWorld = () => (
  <Layout>
    <h1>
      Hello, world
    </h1>
  </Layout>
)

export const Head = () => <Seo title="Hello, world" />

export default HelloWorld
