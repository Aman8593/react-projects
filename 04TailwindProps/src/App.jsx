
import './App.css'
import Card from './components/Card'


function App() {
  const myObj = {
    name: 'react with me',
    age: '21'
  }

  return (
    <>
      <div className="bg-green-600 text-white font-bold mb-5 p-4 rounded-xl">tailwind</div>
      <Card userName="Aman"
            object = {myObj}
            btn = "Read more"
            />
      <Card userName="john"
            btn = "Visit me"
            />
    </>
  )
}

export default App
