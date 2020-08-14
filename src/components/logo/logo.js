/**
 * Logo component
 * @description Component for creating the header with the logo
 * @author Gerson Lázaro <iam@gersonlazaro.com>
 * @date 2020
 */

import React from "react"
import logoStyles from "./logo.module.css"

/**
 * Button
 * @description Create a header with the logo for gersonlazaro.com
 */
const Logo = () => {
  return (
    <div className={logoStyles.header}>
      <img src="./img/gersonlazaro_logo.svg" alt="Gerson Lázaro" />
    </div>
  )
}

export default Logo
