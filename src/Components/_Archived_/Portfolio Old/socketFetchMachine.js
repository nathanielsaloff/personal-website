import { interpret, createMachine, assign, MachineConfig, MachineOptions, send } from 'xstate'



let sendTime
let recieveTime
const socketMachineConfig = {
  id: 'socketMachine',
  version: '1.0',
  context: { /* loading: false,  */ name: null, message: null, socketTime: null },
  // on: {
  //   SEND_NAME: [
  //     {
  //       target: 'fetching'
  //       // cond: (context, event) => Boolean(context.query)
  //     },
  //     {
  //       actions: [
  //         assign({ loading: (context, event) => true /* error: (context, event) => ({}) */ }),
  //         (context, event) => {
  //           // console.log(`event: ${JSON.stringify(event)}`)
  //           // console.log(`context.query: ${context.query}`)
  //         }
  //       ]
  //     }
  //   ]
  // },
  initial: 'idle',
  states: {
    idle: {
      on: {
        SEND_NAME: {
          target: 'fetching'
          // actions: [
          //   // assign({ loading: (context, event) => true /* error: (context, event) => ({}) */ }),
          //   (context, event) => {
          //     console.log(event)

          //     // console.log(`event: ${JSON.stringify(event)}`)
          //     // console.log(`context.query: ${context.query}`)
          //   }
          // ]
        }
      }
    },
    fetching: {
      on: {
        MESSAGE: {
          target: 'idle',
          actions: [
            assign({
              message: (context, event) => event.message,
              socketTime: (context, event) => recieveTime - sendTime
            })
            // (context, event) => {
            //   console.log(recieveTime - sendTime)
            // }
          ]
        }
      },
      invoke: {
        src: (context, event) => (sendBack, onRecieve) => {
          console.log('fetching...')
          import(
            /* webpackChunkName: "io" */
            'socket.io-client'
          ).then(io => {
            io.connect('/socketSample')
              .on('connect', () => {
                sendTime = new Date(Date.now())
              })
              .on('message', message => {
                recieveTime = new Date(Date.now())
                sendBack({ type: 'MESSAGE', message })
              })
              .emit('getMessage', event.name)
          })
          // const fetchUrl = `https://api.npms.io/v2/search/?q=${encodeURI(context.query)}`
          // const cancelTokenSource = axios.CancelToken.source()
          // const request = axios.get(fetchUrl, { cancelToken: cancelTokenSource.token })
          // return request
        },
        onDone: {
          target: 'idle',
          actions: [
            assign({
              loading: (context, event) => false,
              name: (context, event) => false,
              message: (context, event) => event.message

              // results: (context, event) => {
              //   const returnedResults: {
              //     package: { name: string; version: string }
              //     score: { final: number }
              //   }[] = event.data.data.results.slice(0, 10)
              //   const formattedReturnedResults = returnedResults.map(result => {
              //     const float = parseFloat(result.score.final.toFixed(2)) * 100
              //     const formattedPackage = {
              //       name: result.package.name,
              //       version: result.package.version,
              //       score: `${float.toFixed(0)}/100`
              //     }
              //     return formattedPackage
              //   })
              //   return formattedReturnedResults
              // }
            }),
            (context, event) => {
              console.log(event)
            }
          ]
        },
        onError: {
          target: 'idle',
          actions: [
            assign({
              error: (context, event) => (context.query === '' ? {} : event.data),
              loading: (context, event) => false
            })
          ]
        }
      }
    }
  }
}

const socketMachineOptions = {
  guards: {},
  actions: {},
  activities: {},
  services: {},
  delays: {}
}

const socketMachine = createMachine(socketMachineConfig, socketMachineOptions)

const socketSampleInterpreter = interpret(socketMachine).start()

export { socketSampleInterpreter }
