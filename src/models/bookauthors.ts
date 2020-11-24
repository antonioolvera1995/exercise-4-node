import { Model, DataTypes, Sequelize } from "sequelize";
import { database } from "../databases";
import { Authors } from "./authors.models";
import { Books } from "./books.model";


export class BookAuthors extends Model {

    public id!: number;
    public idBook!: number;
    public idAuthors!: number;
    public createdAt!: Date;
    public updateAt!: Date



}


BookAuthors.init({

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Books,
            key: 'id'
        }
    },
    AuthorsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Authors,
            key: 'id'
        }
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
        tableName: 'bookauthors',
        sequelize: database
    });




    
Authors.belongsToMany(Books, { through: 'bookauthors' ,foreignKey: 'AuthorsId', otherKey: 'BookId'});
Books.belongsToMany(Authors, { through: 'bookauthors', foreignKey: 'BookId' , otherKey: 'AuthorsId'});