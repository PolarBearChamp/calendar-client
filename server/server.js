const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(bodyParser.json())

// JSON-файл, который будет использоваться как база данных
const databaseFile = './server/db.json'

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
app.post('/signup', (req, res) => {
  const { username, password, email } = req.body
  const database = readDatabase()

  // Проверяем, что пользователя с таким именем не существует
  if (database.users.some((user) => user.username === username)) {
    return res
      .status(400)
      .json({ error: 'Пользователь с таким Username уже существует' })
  }

  // Создаем нового пользователя и добавляем его в базу данных
  const newUser = {
    id: (database.users.length + 1).toString(),
    email,
    username,
    password,
    birthday: '',
  }

  database.users.push(newUser)
  writeDatabase(database)

  res.json({ message: 'Регистрация прошла успешно' })
})

// Вход пользователя
app.post('/login', (req, res, next) => {
  const { email, password } = req.body
  const database = readDatabase()

  // Проверяем, что пользователь существует и введенный пароль верный
  const user = database.users.find((user) => user.email === email)

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Неверные учетные данные' })
  }
  res.cookie('caleToken', user.id, { maxAge: 60 * 60 * 1000, httpOnly: true })
  res.json({ message: 'Вход выполнен успешно', token: user.id })
})

// Добавление новой песни
app.post('/posts/add', (req, res) => {
  const postData = req.body

  const database = readDatabase()

  // Добавляем новую песню в базу данных
  const newPost = {
    id: (database.posts.length + 1).toString(),
    ...postData,
  }
  database.posts.push(newPost)
  writeDatabase(database)

  res.json({
    success: true,
    body: {
      postId: newPost.id,
    },
  })
})

// Обновление песни
app.patch('/posts/update/:id', (req, res) => {
  const updatedData = req.body
  const postId = req.params.id
  console.log(typeof postId)
  const database = readDatabase()

  // Находим песню в базе данных по ID
  const postIndex = database.posts.findIndex((post) => post.id === postId)

  if (postIndex === -1) {
    res.status(404).json({ success: false, message: 'Песня не найдена' })
  } else {
    // Обновляем информацию о песне
    database.posts[postIndex] = {
      ...database.posts[postIndex],
      ...updatedData,
    }

    writeDatabase(database)

    res.json({
      success: true,
      message: 'Песня успешно обновлена',
    })
  }
})
// Получение Post по идентификатору (ID)
app.get('/posts/:postId', (req, res) => {
  const postId = req.params.postId
  const database = readDatabase()

  // Найдите задачу с заданным ID
  const post = database.posts.find((post) => post.id === postId)

  if (!post) {
    return res.status(404).json({ error: 'Post не найден' })
  }

  res.json({
    success: true,
    body: {
      post,
    },
  })
})

app.get('/posts/filter', (req, res) => {
  const { date, userId } = req.query

  if (!date || !userId) {
    return res
      .status(400)
      .json({ error: 'Параметры date и userId обязательны' })
  }
  const database = readDatabase()
  const allPosts = database.posts

  const filteredPosts = allPosts.filter(
    (post) => post.date.startsWith(date) && post.userId === parseInt(userId),
  )

  res.json({
    success: true,
    body: {
      filteredPosts,
    },
  })
})

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})
