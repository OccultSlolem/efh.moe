import { render } from 'preact'
import './index.css'
import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso'
import { Home, Work } from './app'

function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}

render(<App />, document.getElementById('app')!)
