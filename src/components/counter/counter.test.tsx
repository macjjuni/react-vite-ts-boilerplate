import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import CountText from './CountText'
import Counter from '.'

const initValue = 0

describe('<Counter /> Test', () => {
  const renderCounter = () => render(<Counter />)

  // Start - [Render Test]

  test('<CountText/> render test', () => {
    render(<CountText />)
    const countEle = screen.getByTestId('counter-text')
    expect(countEle).toBeInTheDocument()
  })

  test('<Counter/> Buttons render test', () => {
    renderCounter()
    const upButton = screen.getByTestId('counter-up-button')
    const downButton = screen.getByTestId('counter-down-button')
    const clearButton = screen.getByTestId('counter-clear-button')

    expect(upButton && downButton && clearButton).toBeInTheDocument()
  })
  // End - [Render Test]

  // Start - [Function Test: Up, Down, Clear]

  test('Counter up test', () => {
    renderCounter()

    const countEle = screen.getByTestId('counter-text')
    const upButton = screen.getByTestId('counter-up-button')
    fireEvent.click(upButton) // 카운터 증가

    const expectedCount = (initValue + 1).toString()
    expect(countEle).toHaveTextContent(expectedCount)
  })

  test('Counter down test', () => {
    renderCounter()

    const countTextEle = screen.getByTestId('counter-text')
    const initCountTxt = Number(countTextEle?.textContent) // 카운터 초기값

    const downButton = screen.getByTestId('counter-down-button')
    fireEvent.click(downButton) // 카운터 감소

    const expectedCount = (initCountTxt - 1).toString() // 초기값 - 1

    expect(countTextEle).toHaveTextContent(expectedCount)
  })

  test('Counter clear test', () => {
    renderCounter()

    const countTextEle = screen.getByTestId('counter-text')
    const upButton = screen.getByTestId('counter-up-button')
    const clearButton = screen.getByTestId('counter-clear-button')

    fireEvent.click(upButton) // 카운터 증가
    fireEvent.click(clearButton) // 카운터 초기화

    const expectedCount = '0' // 초기화 후 결과 카운트
    expect(countTextEle).toHaveTextContent(expectedCount)
  })
  // End - [Function Test]
})
