import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import CountText from './CountText'
import Counter from '.'

const initValue = 0

describe('<Counter /> Test', () => {
  // Start - [Render Test]

  test('<CountText/> render test', () => {
    render(<CountText />)
    const countEle = screen.getByTestId('counter-text')
    expect(countEle).toBeInTheDocument()
  })

  test('<Counter/> Buttons render test', () => {
    render(<Counter />)
    const upButton = screen.getByTestId('counter-up-button')
    const downButton = screen.getByTestId('counter-down-button')
    const clearButton = screen.getByTestId('counter-clear-button')

    expect(upButton && downButton && clearButton).toBeInTheDocument()
  })
  // End - [Render Test]

  // Start - [Function Test]

  test('Counter up test', () => {
    render(<Counter />)

    const countEle = screen.getByTestId('counter-text')
    const upButton = screen.getByTestId('counter-up-button')
    if (upButton) fireEvent.click(upButton)

    const expectedCount = (initValue + 1).toString()
    expect(countEle).toHaveTextContent(expectedCount)
  })

  test('Counter down test', () => {
    render(<Counter />)

    const countTextEle = screen.getByTestId('counter-text')
    const initCountTxt = Number(countTextEle?.textContent) // 카운터 초기값

    const downButton = screen.getByTestId('counter-down-button')
    if (downButton) fireEvent.click(downButton) // 감소 버튼 클릭

    const expectedCount = (initCountTxt - 1).toString()

    expect(countTextEle).toHaveTextContent(expectedCount)
  })

  test('Counter clear test', () => {
    render(<Counter />)

    const countTextEle = screen.getByTestId('counter-text')
    const upButton = screen.getByTestId('counter-up-button')
    const clearButton = screen.getByTestId('counter-clear-button')

    if (upButton) fireEvent.click(upButton)
    if (clearButton) fireEvent.click(clearButton)

    const expectedCount = '0'
    expect(countTextEle).toHaveTextContent(expectedCount)
  })
  // End - [Function Test]
})
