import { Model, DataTypes, Sequelize} from "sequelize";
import { database } from "../databases";


export class Authors extends Model {

    public id!: number;
    public name!: string;
    public createdAt!: Date;
    public updateAt!: Date



}


Authors.init({

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }


},
    {
        tableName: 'authors',
        sequelize: database
    });
