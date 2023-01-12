// import { interpret, Machine, assign, MachineConfig, MachineOptions } from 'xstate'

// interface PackageSearchStateSchema {
//   key?: string
//   initial?: string
//   type?: 'atomic' | 'compound' | 'parallel' | 'final' | 'history'
//   history?: 'shallow' | 'deep'
//   invoke?: {} // invoke config?
//   entry?: {}
//   exit?: {}
//   onDone?: {}
//   after?: {}
//   always?: {}
//   activities?: {}
//   data?: {}
//   on?: {}
//   states: {
//     idle: {}
//     fetching: {}
//   }
// }

// interface PackageSearchContext {
//   query: string
//   results: [] | any
//   error: {}
//   loading: boolean
// }

// interface MachineInit {
//   id: string
//   initial: string
//   version?: string
//   parallel?: boolean
//   key?: string
//   type?: 'atomic' | 'compound' | 'parallel' | 'final' | 'history'
//   history?: 'shallow' | 'deep' | boolean | undefined
//   invoke?: {}
// }

// type PackageSearchEvent =
//   | { type: 'ACTION_NAME' }
//   | { type: 'UPDATE_QUERY'; query: string }
//   | { type: 'LEAVE' }
//   | { type: 'FOCUS' }
//   | { type: 'GET_RESULTS' }

// const packageSearchMachineConfig: MachineConfig<PackageSearchContext, PackageSearchStateSchema, PackageSearchEvent> &
//   MachineInit = {
//     id: 'packageSearchMachine',
//     version: '1.0',
//     context: { query: '', results: [], error: {}, loading: false },
//     on: {
//       GET_RESULTS: [
//         {
//           target: 'fetching',
//           cond: (context, event) => Boolean(context.query)
//         },
//         { actions: assign({ loading: (context, event) => false }) }
//       ],
//       UPDATE_QUERY: [
//         {
//           internal: true,
//           // target: 'fetching',
//           actions: [
//             assign({
//               loading: (context, event) => true,
//               error: (context, event) => ({}),
//               query: (context, event) => event.query,
//               results: (context, event) => (event.query === '' ? [] : [...context.results])
//             }),
//             (context, event) => {
//             // console.log(`event: ${JSON.stringify(event)}`)
//             // console.log(`context.query: ${context.query}`)
//             }
//           ]
//         }
//       ]
//     },
//     initial: 'idle',
//     states: {
//       idle: {},
//       fetching: {
//         invoke: {
//           src: (context, event) => (sendBack, onRecieve) => {
//             console.log('fetching...')
//             const fetchUrl = `https://api.npms.io/v2/search/?q=${encodeURI(context.query)}`
//             const cancelTokenSource = axios.CancelToken.source()
//             const request = axios.get(fetchUrl, { cancelToken: cancelTokenSource.token })
//             return request
//           },
//           onDone: {
//             target: 'idle',
//             actions: [
//               assign({
//                 loading: (context, event) => false,
//                 results: (context, event) => {
//                   const returnedResults: {
//                   package: { name: string; version: string }
//                   score: { final: number }
//                 }[] = event.data.data.results.slice(0, 10)
//                   const formattedReturnedResults = returnedResults.map(result => {
//                     const float = parseFloat(result.score.final.toFixed(2)) * 100
//                     const formattedPackage = {
//                       name: result.package.name,
//                       version: result.package.version,
//                       score: `${float.toFixed(0)}/100`
//                     }
//                     return formattedPackage
//                   })
//                   return formattedReturnedResults
//                 }
//               })
//             ]
//           },
//           onError: {
//             target: 'idle',
//             actions: [
//               assign({
//                 error: (context, event) => (context.query === '' ? {} : event.data),
//                 loading: (context, event) => false
//               })
//             ]
//           }
//         }
//       }
//     }
//   }

// const packageSearchMachineOptions: MachineOptions<PackageSearchContext, PackageSearchEvent> = {
//   guards: {},
//   actions: {},
//   activities: {},
//   services: {},
//   delays: {}
// }

// const packageSearchMachine = Machine<PackageSearchContext, PackageSearchStateSchema, PackageSearchEvent>(
//   packageSearchMachineConfig,
//   packageSearchMachineOptions
// )

// const packageSearchInterpreter = interpret(packageSearchMachine).start()

// // export { packageSearchMachine, packageSearchInterpreter }
