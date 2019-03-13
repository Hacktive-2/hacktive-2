'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const db = require('../server/db')
const fs = require('fs')
var path = require('path')

const helloWorldSpec = fs.readFileSync(
  path.join(__dirname, '/testSpecs/helloWorld.spec.js'),
  (err, specData) => {
    if (err) throw err
    console.log('read file success!')
    return specData
  }
)

const problems = [
  {
    id: 1,
    name: 'Hello World',
    prompt: [
      'Create a function "Hello world" that returns the string "Hello world"'
    ],
    solution: `function greeting(name) {\n\tif (name) {\n\t\treturn "Hello, " + name + "!";\n\t} else {\n\t\treturn "Hello!";\n\t}\n}`,
    specs: helloWorldSpec,
    startingText: 'function greeting(name) {\n  // YOUR CODE HERE\n}'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all(problems.map(problems => Challenge.create(problems)))

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
