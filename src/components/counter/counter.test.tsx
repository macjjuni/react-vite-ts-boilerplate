import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

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

  test('Counter up test', async () => {
    renderCounter()

    const countEle = screen.getByTestId('counter-text')
    const upButton = screen.getByTestId('counter-up-button')
    const user = userEvent.setup()
    await user.click(upButton)

    const expectedCount = (initValue + 1).toString()
    expect(countEle).toHaveTextContent(expectedCount)
  })

  test('Counter down test', async () => {
    renderCounter()

    const countTextEle = screen.getByTestId('counter-text')
    const initCountTxt = Number(countTextEle?.textContent) // 카운터 초기값
    const user = userEvent.setup()

    const downButton = screen.getByTestId('counter-down-button')
    await user.click(downButton) // 카운터 감소

    const expectedCount = (initCountTxt - 1).toString() // 초기값 - 1

    expect(countTextEle).toHaveTextContent(expectedCount)
  })

  test('Counter clear test', async () => {
    renderCounter()

    const countTextEle = screen.getByTestId('counter-text')
    const upButton = screen.getByTestId('counter-up-button')
    const clearButton = screen.getByTestId('counter-clear-button')
    const user = userEvent.setup()

    await user.click(upButton) // 카운터 증가
    await user.click(clearButton) // 카운터 초기화

    const expectedCount = '0' // 초기화 후 결과 카운트
    expect(countTextEle).toHaveTextContent(expectedCount)
  })
  // End - [Function Test]
})
