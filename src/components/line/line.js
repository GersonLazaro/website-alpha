/**
 * Line component
 * @description Component for creating stilized horizontal lines
 * @author Gerson Lázaro <iam@gersonlazaro.com>
 * @date 2020
 */
import React from "react"
import lineStyles from "./line.module.css"

/**
 * Line
 * @description Create a horizontal space containing two lines, the first dark and the second light
 * @param { Object } props
 *  * distribution: There are three styles for the stylized lines. Distribution is a number (0, 1 or 2) indicating the
 *                  style to apply.
 */
const Line = props => {
  let classElements = [
    "distributionOne",
    "distributionTwo",
    "distributionThree",
  ]

  return (
    <div className={lineStyles[classElements[props.distribution]]}>
      <div className={lineStyles.firstLine}></div>
      <div className={lineStyles.secondLine}></div>
    </div>
  )
}

/**
 * getLines
 * @description Get a group of stylized lines
 * @param { number } start - Distribution of inicial line (0, 1 or 2)
 * @param { number } total - Total of lines to display
 * @returns array with JSX lines
 */
export const getLines = (start, total) => {
  var lines = []
  for (
    let index = 0, distribution = start - 1;
    index < total;
    index++, distribution++
  ) {
    distribution %= 3
    lines.push(<Line distribution={distribution} />)
  }
  return lines
}

export default Line
