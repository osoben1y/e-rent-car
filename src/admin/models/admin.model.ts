import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttr {
    full_name: string;
    email: string;
    phone_number: string;
    birthdate: Date;
    hashed_password: string;
    is_active: Boolean;
    is_admin: Boolean;
    hashed_refresh_token: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number;

    @Column({

    })
    full_name: string;

    @Column({

    })
    email: string;

    @Column({

    })
    phone_number: string;

    @Column({

    })
    birthdate: Date

    @Column({

    })
    hashed_password: string

    @Column({

    })
    is_active: Boolean

    @Column({

    })
    is_admin: Boolean

    @Column({

    })
    hashed_refresh_token: string
}
