module.exports = (sequelize, DataTypes) => {
  const Order_details = sequelize.define('Order_details', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      order_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      product_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      sku: {
          type: DataTypes.NUMERIC,
          allowNull: false,
          validate: {
            notEmpty: true,
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
     
     
  });

  return Order_details;
};
