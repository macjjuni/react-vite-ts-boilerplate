const header = { height: '64px' }
const footer = { height: '56px' }
const main = { height: `calc(100dvh - (${header.height} + ${footer.height}))` }

const getLayoutSize = () => {
  return {
    header,
    main,
    footer,
  }
}

export default getLayoutSize
