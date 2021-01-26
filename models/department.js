module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Departments', {
      dept_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      deptName: {
         type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }  
      },
      created_dt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('NOW()'),
        },
        last_modified_dt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('NOW()'),
        },
      
  });
  
  return Department;
};