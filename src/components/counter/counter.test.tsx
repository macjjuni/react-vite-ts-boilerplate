import { render, fireEvent } from '@testing-library/react'
import CountText from './CountText'
import Counter from '.'

const initValue = 0

describe('<Counter /> Test', () => {
  let countContainer: HTMLElement
  let countTextContainer: HTMLElement

  beforeEach(() => {
    const renderCounter = () => render(<Counter />)
    const renderCountText = () => render(<CountText />)
    countContainer = renderCounter().container
    countTextContainer = renderCountText().container
  })

  test('<CountText/> render test', () => {
    const countEle = countTextContainer.querySelector('.counter_text')
    expect(countEle).toBeInTheDocument()
  })

  test('<Counter/> render test', () => {
    const upButton = countContainer.querySelector('.counter_up_button')
    const downButton = countContainer.querySelector('.counter_down_button')
    const clearButton = countContainer.querySelector('.counter_clear_button')

    expect(upButton && downButton && clearButton).toBeInTheDocument()
  })

  test('Counter up test', () => {
    const upButton = countContainer.querySelector('.counter_up_button')
    if (upButton) fireEvent.click(upButton)

    const expectedCount = (initValue + 1).toString()
    expect(countTextContainer).toHaveTextContent(expectedCount)
  })

  test('Counter down test', () => {
    const countTextEle = countTextContainer.querySelector('.counter_text')
    const initCountTxt = Number(countTextEle?.textContent) // 카운터 초기값

    const downButton = countContainer.querySelector('.counter_down_button')
    if (downButton) fireEvent.click(downButton) // 감소 버튼 클릭

    const expectedCount = (initCountTxt - 1).toString()

    expect(countTextEle).toHaveTextContent(expectedCount)
  })

  test('Counter clear test', () => {
    const upButton = countContainer.querySelector('.counter_up_button')
    const clearButton = countContainer.querySelector('.counter_clear_button')

    if (upButton) fireEvent.click(upButton)
    if (clearButton) fireEvent.click(clearButton)

    const expectedCount = '0'
    expect(countTextContainer).toHaveTextContent(expectedCount)
  })
})
