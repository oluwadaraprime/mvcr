module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
     password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: ["^[a-z]+$",'i'] 
        }
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     billing_address: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      default_shipping_address: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
     
  });

  return Customers;
};
