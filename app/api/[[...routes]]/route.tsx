/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    action: '/second',
    image: "/img-frame1.png",
    intents: [

      <Button.Link href='https://phaver.app.link/hankmoody'>Create account</Button.Link>,  
      <Button.Link href='https://reputation.anima.io/'>Up L2</Button.Link>,
      <Button>Meet people</Button>,
             
    ],
  })
})

app.frame('/second', (c) => {
  const { buttonValue, inputText, status, } = c
  
  return c.res({
    
    image: "/img-frame2.png",
    imageAspectRatio: '1:1',
    intents: [
      <Button.Reset>Reset</Button.Reset>,
    ],
  })
})


devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
