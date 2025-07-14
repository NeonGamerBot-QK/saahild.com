export function startingLog(): void {
  const isDev = process.env.NODE_ENV !== 'production'
  console.log(
    `%c What's up?`,
    `font-size: 120px;
      font-family: "Poppins", sans-serif;
      background-size: 1000% 1000%;
      animation: gradient 1s ease infinite;
      `
  )
  console.log(
    `%c Thanks for visting this site you can dontate me at https://ko-fi.com/saahil\n Try to find the easter egg in this site🥚\n HINT: to use it you must use the console it is a very VERY hard one`,
    `font-size: 15px;`
  )
  if (isDev) {
    console.debug(
      'This message will show during production build. & development build'
    )
  }
}