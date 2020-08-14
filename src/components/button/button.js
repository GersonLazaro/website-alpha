/**
 * Button component
 * @description Component for creating buttons
 * @author Gerson Lázaro <iam@gersonlazaro.com>
 * @date 2020
 */
import React from "react"
import buttonStyles from "./button.module.css"

/**
 * Button
 * @description Create a button
 * @param { Object } props
 *  * caption: Text to show in the button
 */
const Button = props => {
  return <button className={buttonStyles.mainButton}> {props.caption} </button>
}

export default Button
