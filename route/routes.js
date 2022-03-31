const express = require('express');
const router = express.Router();
const Todo = require('../model/todolist');


router.post('/api/delete', async (req, res) => {
	const { record } = req.body
	console.log(record, '/api/delete')

	const response = await Todo.deleteOne({ record })

	console.log(response, '/api/delete repsonse')

	res.json({ status: 'ok' })
})

router.post('/api/modify', async (req, res) => {
	const { old: oldTitle, new: newTitle } = req.body

	const response = await Todo.updateOne(
		{
			record: oldTitle
		},
		{
			$set: {
				record: newTitle
			}
		}
	)

	console.log(response)

	res.json({ status: 'ok' })
})

router.get('/api/get', async (req, res) => {
	const records = await Todo.find({})
	// console.log('Response => ', records)
	res.json(records)
})

router.post('/api/create', async (req, res) => {
	const record = req.body
	console.log(record)

	// * CREATE (_C_RUD)
	const response = await Todo.create(record)

	console.log(response)

	res.json({ status: 'ok' })
})
module.exports = router;