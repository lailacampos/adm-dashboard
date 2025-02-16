import AppRouter from './routes/routes';

function App() {
  return(
    <>
      <div className="p-6 flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        <AppRouter />
      </div>
    </>
  );
}

export default App
