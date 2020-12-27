module.exports = (sequelize, DataTypes) =>
  (sequelize.define(
    "employee",
    {
    _id: { // 열 이름
        type: DataTypes.INTEGER, // 자료형
        primaryKey: true, // Primary Key 여부
        autoIncrement: true, // 자동증가 여부
    },
      name: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
        hiredDate: {
            type: DataType.DATE,
            //note here this is the guy that you are looking for                   
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
            }
      },
      position: {
          type : DataTypes.STRING(140),
          allowNull:false
      },
      pretax_pay:{
          types: DataTypes.FLOAT,
          allowNull:false
      },
      posttax_pay : {
        types: DataTypes.FLOAT,
        allowNull:false
      }
    },
    {
      timestamps: true,
      paranoid: true,
    }
  ));

//id, date, name, position, pretax_pay, posttax_pay