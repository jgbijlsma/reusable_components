import Button from "./components/Button";

function App() {
  return (
    <main className="m-4">
      <h1 className="text-4xl mb-8">Reusable components</h1>

      <div className="space-x-4 space-y-4">
        <Button size="sm">Primary sm</Button>
        <Button size="lg">Primary lg</Button>
        <Button variant="secondary">Secondary md</Button>
        <Button variant="secondary" size="sm">
          Secondary sm
        </Button>
        <Button variant="secondary" size="lg">
          Secondary lg
        </Button>
        <Button variant="danger">Danger md</Button>
        <Button variant="danger" size="sm">
          Danger sm
        </Button>
        <Button variant="danger" size="lg">
          Danger lg
        </Button>
        <Button onClick={() => alert("You clicked the btn!")}>Click me!</Button>
        <Button
          size="lg"
          className="bg-gradient-to-br from-cyan-500 to-purple-700 border-none border-4 text-white font-bold hover:text-black"
        >
          Custom className
        </Button>
      </div>
    </main>
  );
}

export default App;
