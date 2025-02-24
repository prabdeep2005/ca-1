import './App.css'
import ServiceCard from './components/ServiceCard'
function App () {
    return (
        <div className="App">
            <h1>Services</h1>
            <ServiceCard title={"Web Development"} description="it contains web things" />
            <ServiceCard title={" Cybersecurity"} description="This do security in the app " />
        </div>
    )
}

export default App
