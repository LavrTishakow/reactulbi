import './App.css';
import '@vkruglikov/react-telegram-web-app/lib/index.d.ts';
import { MainButton } from '@vkruglikov/react-telegram-web-app';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()

  }

  return (
    <div className="App">
      work
      <MainButton text="Закрыть" onClick={onClose} />
    </div>
  );
}

export default App;