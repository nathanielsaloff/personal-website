import { interpret, Machine, assign, MachineConfig, MachineOptions } from 'xstate'
import io from 'socket.io-client'

// const socket = io.connect('/registration').emit('register', { first, last, company, email, password }

//  perhaps const socket = io.connect().on("connect",()=>{console.log('socket connected')})

// clientSocket.on('connect', () => { console.log('Socket connected!') })

// io.connect('/input')
//       //   .emit('updateInput', { value: 'testValue' })
//       // .on('updatedInput', data => changeInputAction(data))

// socket.on('verified', data => {
//   observer.next(loggedInAction(data))
// })

//     io.connect('/login')
//       .emit('login', { email, password })
//       .on('loginError', error => {})
//       .on('verified', payload => {
//         const { token, email } = payload
//         console.log(payload)
//         dispatch(loggedInAction(payload))

interface AuthStateSchema {
  key?: string
  initial?: string
  type?: 'atomic' | 'compound' | 'parallel' | 'final' | 'history'
  history?: 'shallow' | 'deep'
  invoke?: {} // invoke config?
  entry?: {}
  exit?: {}
  onDone?: {}
  after?: {}
  always?: {}
  activities?: {}
  data?: {}
  on?: {}
  states: {
    idle: {}
    fetching: {}
    loggedIn: {}
  }
}

interface AuthContext {
  loggedIn: boolean
  credentials: object
}

interface MachineInit {
  id: string
  initial: string
  version?: string
  parallel?: boolean
  key?: string
  type?: 'atomic' | 'compound' | 'parallel' | 'final' | 'history'
  history?: 'shallow' | 'deep' | boolean | undefined
  invoke?: {}
}

type AuthEvent = { type: 'LOGIN'; payload: {} } | { type: 'REGISTER'; payload: {} } | { type: 'LOGOUT' }

const authMachineConfig: MachineConfig<AuthContext, AuthStateSchema, AuthEvent> & MachineInit = {
  id: 'authMachine',
  version: '1.0',
  context: { loggedIn: false, credentials: {} },
  on: {
    LOGIN: [
      {
        target: 'fetching',
        cond: (context, event) => Boolean(context.query)
      },
      { actions: assign({ loading: (context, event) => false }) }
    ],
    LOGOUT: [
      {
        target: 'fetching',
        cond: (context, event) => Boolean(context.query)
      },
      { actions: assign({ loading: (context, event) => false }) }
    ],
    REGISTER: [
      {
        // internal: true,
        // target: 'fetching',
        actions: [
          assign({
            loading: (context, event) => true,
            error: (context, event) => ({}),
            query: (context, event) => event.query,
            results: (context, event) => (event.query === '' ? [] : [...context.results])
          }),
          (context, event) => {
            // console.log(`event: ${JSON.stringify(event)}`)
            // console.log(`context.query: ${context.query}`)
          }
        ]
      }
    ]
  },
  initial: 'idle',
  states: {
    idle: {},
    fetching: {
      invoke: {
        src: (context, event) => (sendBack, onRecieve) => {
          console.log('fetching...')
          const fetchUrl = `https://api.npms.io/v2/search/?q=${encodeURI(context.query)}`
          const cancelTokenSource = axios.CancelToken.source()
          const request = axios.get(fetchUrl, { cancelToken: cancelTokenSource.token })
          return request
        },
        onDone: {
          target: 'idle',
          actions: [
            assign({
              loading: (context, event) => false,
              results: (context, event) => {
                const returnedResults: {
                  package: { name: string; version: string }
                  score: { final: number }
                }[] = event.data.data.results.slice(0, 10)
                const formattedReturnedResults = returnedResults.map(result => {
                  const float = parseFloat(result.score.final.toFixed(2)) * 100
                  const formattedPackage = {
                    name: result.package.name,
                    version: result.package.version,
                    score: `${float.toFixed(0)}/100`
                  }
                  return formattedPackage
                })
                return formattedReturnedResults
              }
            })
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
    },
    loggedIn: {}
  }
}

const authMachineOptions: MachineOptions<AuthContext, AuthEvent> = {
  guards: {},
  actions: {},
  activities: {},
  services: {},
  delays: {}
}

const authMachine = Machine<AuthContext, AuthStateSchema, AuthEvent>(authMachineConfig, authMachineOptions)

const packageSearchInterpreter = interpret(authMachine).start()

// export { packageSearchMachine, packageSearchInterpreter }
