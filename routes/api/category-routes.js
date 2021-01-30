const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [{
      model: Product
    }]
  }).then(dbCategory => {
    res.json(dbCategory)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })

  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product
    }]
  }).then(dbCategory => {
    res.json(dbCategory)

  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  //create new category
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCatData => {
      if (!dbCatData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCategory => {
        if (!dbCategory) {
          res.status(404).json({ message: 'no comment found with this id!' });
          return;
        }
        res.json(dbCategory);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
