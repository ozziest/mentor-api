import Joi from 'joi'
import models from '../../models'

const create_validation = {
  body: Joi.object({
    title: Joi.string()
      .min(2)
      .alphanum()
      .max(40)
      .required(),
    key_title: Joi.string()
      .min(2)
      .max(30)
      .required(),
    description: Joi.string()
      .min(2)
      .max(30)
      .required()
  })
}

const create = async (req, res) => {
  const user_id = req.user.id
  const { error } = create_validation.body.validate(req.body)
  if (error) {
    return res.send(400, { error })
  }

  const { title, key_title, description } = req.body
  let dataSet = await models.data_sets.findOne({
    where: {
      user_id,
      title,
      key_title,
      description
    }
  })

  dataSet = await models.data_sets.create({
    user_id,
    title,
    key_title,
    description
  })

  res.send(201, {
    dataSet: dataSet.toJSON()
  })
}

const list = async (req, res) => {
  const dataSet = await models.data_sets.findAndCountAll({
    where: {
      user_id: req.user.id
    }
  })

  res.send({
    results: dataSet.rows,
    count: dataSet.count
  })

  dataSet.catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving data sets.'
    })
  })
}

const detail = async (req, res) => {
  const id = req.params.id
  const user_id = req.user.id
  const dataSet = await models.data_sets.findOne({
    where: {
      id
    }
  })
  if (dataSet) {
    if (user_id === dataSet.user_id) {
      res.send(dataSet)
    } else {
      res.status(401).send({
        message: 'You DO NOT have permision to get this Data set!'
      })
    }
  } else {
    res.status(403).send({
      message: 'Data set not found !'
    })
  }

  dataSet.catch(err => {
    res.status(500).send(
      err || {
        message: `Error retrieving Data set with id= ${id}`
      })
  })
}

const update = async (req, res) => {
  const id = req.params.id
  const user_id = req.user.id
  const dataSet = await models.data_sets.findOne({
    where: {
      id
    }
  })

  if (dataSet) {
    if (user_id === dataSet.user_id) {
      models.data_sets.update(req.body, {
        where: {
          id: dataSet.id
        }
      })
      res.send({
        message: `Id= ${id} was updated succesfully`
      })
    } else {
      res.status(401).send({
        message: 'You DO NOT have permission to update this data set!'
      })
    }
  } else {
    res.status(403).send({
      message: 'Not found Data set!'
    })
  }

  dataSet.catch(err => {
    res.status(500).send(err || {
      message: `Could NOT update Data set with id= ${id}`
    })
  })
}

const deleteById = async (req, res) => {
  const id = req.params.id
  const user_id = req.user.id
  const dataSet = await models.data_sets.findOne({
    where: {
      id
    }
  })

  if (dataSet) {
    if (user_id === dataSet.user_id) {
      models.data_sets.destroy({
        where: {
          id
        }
      })
      res.send({
        message: 'Data set was deleted successfully!'
      })
    } else {
      res.status(401).send({
        message: 'You DO NOT have permision to delete this Data set!'
      })
    }

    dataSet.catch(err => {
      res.status(500).send(err || {
        message: `Could NOT delete Data set with id= ${id}`
      })
    })
  }
}

export default {
  prefix: '/data-sets',
  inject: (router) => {
    router.get('', list)
    router.post('', create)
    router.get('/:id', detail)
    router.put('/:id', update)
    router.delete('/:id', deleteById)
  }
}
