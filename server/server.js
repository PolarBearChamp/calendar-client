const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 8000

// Middleware для обработки JSON-тела запросов
app.use(bodyParser.json())

// JSON-файл, который будет использоваться как база данных
const databaseFile = './server/db.json'

// Создаем пустой JSON-файл, если его нет
if (!fs.existsSync(databaseFile)) {
  fs.writeFileSync(databaseFile, JSON.stringify({ users: [], tasks: [] }))
}

// Функция для чтения базы данных из файла
function readDatabase() {
  const data = fs.readFileSync(databaseFile, 'utf-8')
  return JSON.parse(data)
}

// Функция для записи базы данных в файл
function writeDatabase(data) {
  fs.writeFileSync(databaseFile, JSON.stringify(data, null, 2))
}

// Регистрация нового пользователя
app.post('/register', (req, res) => {
  const { username, password } = req.body
  const database = readDatabase()

  // Проверяем, что пользователь с таким именем не существует
  if (database.users.some((user) => user.username === username)) {
    return res
      .status(400)
      .json({ error: 'Пользователь с таким именем уже существует' })
  }

  // Создаем нового пользователя и добавляем его в базу данных
  const newUser = { username, password }
  database.users.push(newUser)
  writeDatabase(database)

  res.json({ message: 'Регистрация прошла успешно' })
})

// Вход пользователя
app.post('/login', (req, res) => {
  const { username, password } = req.body
  const database = readDatabase()

  // Проверяем, что пользователь существует и введенный пароль верный
  const user = database.users.find((user) => user.username === username)

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Неверные учетные данные' })
  }

  res.json({ message: 'Вход выполнен успешно' })
})

// Добавление новой задачи
app.post('/add_task', (req, res) => {
  const { task } = req.body
  const database = readDatabase()

  // Добавляем новую задачу в базу данных
  const newTask = { task }
  database.tasks.push(newTask)
  writeDatabase(database)

  res.json({ message: 'Задача успешно добавлена' })
})

app.get('/tasks', (req, res) => {
  const database = readDatabase()
  res.json(database.tasks)
})

// Получение задачи по идентификатору (ID)
app.get('/tasks/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId)
  const database = readDatabase()

  // Найдите задачу с заданным ID
  const task = database.tasks.find((task) => task.id === taskId)

  if (!task) {
    return res.status(404).json({ error: 'Задача не найдена' })
  }

  res.json(task)
})

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})
