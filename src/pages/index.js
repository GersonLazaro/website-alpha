/**
 * Index page
 * @description Initial page
 * @author Gerson Lázaro <iam@gersonlazaro.com>
 * @date 2020
 */
import React from "react"
import Logo from "../components/logo/logo"
import { getLines } from "../components/line/line"

/**
 * Index
 * @description Create the index page for gersonlazaro.com
 */
const Index = () => {
  return (
    <div className="container-fluid">
      <Logo />
      {getLines(1, 3)}
    </div>
  )
}

export default Index
