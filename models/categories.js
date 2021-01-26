module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
      descriptions: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
      thumbnail: {
            type: DataTypes.BLOB,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
      
  });
  
   return Categories;
};