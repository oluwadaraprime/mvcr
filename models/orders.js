module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      customer_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      shipping_address: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      order_address: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      order_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        }
      },
      order_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDate: true,
        }
      },
      status: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
  });
  
  return Orders;
};