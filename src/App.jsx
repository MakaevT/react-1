function App() {
  return (
    <div className="App">
      <header>
        <img src="counter.jpg" />
        <nav>
          <ul>
            <li>
              <a href="#">Главное</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="count">0</div>
        <div className="buttons">
          <button className="siniy">Увеличить</button>
          <button className="oranguetangue">Уменьшить</button>
          <button className="seriyoga">Сбросить</button>
        </div>
      </main>
      <footer>
        <img src="counter2.jpg"/>
        <ul className="list">
          <li>Партнерам</li>
          <li>Разрабам</li>
          <li>Вакансии</li>
        </ul>
        <div className="txt">
          <span>ООО "интукод", 2023</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
